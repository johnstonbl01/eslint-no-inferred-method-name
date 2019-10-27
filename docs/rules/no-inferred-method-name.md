# Disallow Inferred Method Names in Object Literals (no-inferred-method-name)

In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead. This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.

More information on this can be found:

- [eslint/eslint#2454](https://github.com/eslint/eslint/issues/2454#issuecomment-100285220)
- [babel/babel#1367](https://github.com/babel/babel/issues/1367)
- [ES6 Concise Methods: Lexical or Not?](http://blog.getify.com/es6-concise-methods-lexical-or-not/)

## Rule Details

In the example below, 1 error is generated because foo is being called recursively when there is no lexical name binding for the `foo` function using the concise object literal syntax. See links above for in-depth discussion on this behavior.

```js
const bar = {
  name: 'Bar',
  types: [{ f: 'function' }, { n: 'number' }],
  foo(f, n) {
    // this function will not have any lexical binding for recursive calls
    if (typeof f === 'function') {
      f();
    } else {
      throw new Error('foo: A Function is required.');
    }

    n -= 1;
    if (!n) {
      return undefined;
    }

    return foo(f, n); // error on this line
  }
};

bar.foo(() => {
  console.log('baz');
}, 3);
//baz
//ReferenceError: foo is not defined
```

### Recommended: error-free version

In this example, no errors are generated because the function expression explicitly defines a lexical identifier.

```js
const bar = {
  name: 'Bar',
  types: [{ f: 'function' }, { n: 'number' }],
  foo: function foo(f, n) {
    // explicitly defines a lexical name for the method
    if (typeof f === 'function') {
      f();
    } else {
      throw new Error('foo: A Function is required.');
    }

    n -= 1;
    if (!n) {
      return undefined;
    }

    return foo(f, n);
  }
};

bar.foo(() => {
  console.log('baz');
}, 3);
//baz
//baz
//baz
```

### Why not use `this.foo(f, n)`?

ES6+ supports limited tail call optimization, meaning that a recursive call in the tail position (the last expression evaluated by the function before it exits) gets optimized to reuse the same stack frame, instead of creating new stack frames. This provides better performance and conserves memory resources, because a new stack frame does not need to be allocated for the new function call.

If your recursive call iterates too much without tail call optimization, it will cause a stack overflow, which will throw an error and crash your program.

The error-free example above triggers tail call opmitization, producing the following compiled ES5 in Babel:

```js
'use strict';

var bar = {
  name: 'Bar',
  types: [{ f: 'function' }, { n: 'number' }],
  foo: function foo(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var f = _x,
        n = _x2;
      _again = false;
      // explicitly defines a lexical name for the method
      if (typeof f === 'function') {
        f();
      } else {
        throw new Error('foo: A Function is required.');
      }

      n -= 1;
      if (!n) {
        return undefined;
      }

      _x = f;
      _x2 = n;
      _again = true;
      continue _function;
    }
  }
};

bar.foo(function() {
  console.log('baz');
}, 3);
```

Note that the tail call has been optimized to a `while` loop. That's a very good thing. It will perform better and prevent stack overflows from happening. Now watch what happens when we use `this.foo()` instead. Here's the source using `this`:

```js
const bar = {
  name: 'Bar',
  types: [{ f: 'function' }, { n: 'number' }],
  foo(f, n) {
    // explicitly defines a lexical name for the method
    if (typeof f === 'function') {
      f();
    } else {
      throw new Error('foo: A Function is required.');
    }

    n -= 1;
    if (!n) {
      return undefined;
    }

    return this.foo(f, n);
  }
};

bar.foo(() => {
  console.log('baz');
}, 3);
```

And here's what Babel compiles from it:

```js
'use strict';

var bar = {
  name: 'Bar',
  types: [{ f: 'function' }, { n: 'number' }],
  foo: function foo(f, n) {
    // explicitly defines a lexical name for the method
    if (typeof f === 'function') {
      f();
    } else {
      throw new Error('foo: A Function is required.');
    }

    n -= 1;
    if (!n) {
      return undefined;
    }

    return this.foo(f, n);
  }
};

bar.foo(function() {
  console.log('baz');
}, 3);
```

Note the missing `while` loop optimization. This version of the code is error prone, and could very well crash your program. For this reason, we strongly recommend using a named function expression as demonstrated in the error-free version above, instead.
