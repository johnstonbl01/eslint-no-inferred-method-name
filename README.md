# Disallow Inferred Method Names in Object Literals (no-inferred-method-name)

In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead. This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal. 

More information on this can be found:
- [eslint/eslint#2454](https://github.com/eslint/eslint/issues/2454#issuecomment-100285220)
- [babel/babel#1367](https://github.com/babel/babel/issues/1367)
- [ES6 Concise Methods: Lexical or Not?](http://blog.getify.com/es6-concise-methods-lexical-or-not/)

**Note** - Tests are provided in the repo, but not necessary for installation or use of the rule.

## Setup

### Prerequisites

Node.js & NPM - For instructions on how to install Node.js, check [here](https://nodejs.org/).

ESLint - Install globally with `npm install -g eslint`. More information on ESLint setup & configuration can be found [here](http://eslint.org/).

### Install Plugin via NPM

Install the plugin using NPM:
```
$ npm install -g eslint-plugin-no-inferred-method-name
```

_Note_: If ESLint is installed globally, the plugin must also be installed globally. If ESLint is installed locally within the project folder, then the plugin can also be installed locally by omitting the `-g`.

### Enable Plugin in ESLint Config File

Within the project directory, create or edit the `.eslintrc` file to enable the new rule.

```js
{
    "plugins": [
        "no-inferred-method-name"
    ],

    "settings": {
        "ecmascript": 6
    }
}
```

### Run ESLint

You can lint files from the command line using:
`eslint [filename]`

Additionally, the above setup should enable the rule within your Text Editor or IDE (assuming that you have a Linter enabled).

## Rule Details

In the example below, 1 error is generated because foo is being called recursively when there is no lexical name binding for the `foo` function using the concise object literal syntax. See links above for in-depth discussion on this behavior.

```js
const bar = {
  name: 'Bar',
  types: [
    { f: 'function' },
    { n: 'number' }
  ],
  foo (f, n) {   // this function will not have any lexical binding for recursive calls
    if (typeof f === 'function') {
      f();
    } else {
      throw new Error('foo: A Function is required.');
    }
    
    n -= 1;
    if (!n) {
      return undefined;
    }

    return foo(f, n);   // error on this line
  }
};

bar.foo(() => {console.log('baz');}, 3);
//baz
//ReferenceError: foo is not defined
```

In this example, no errors are generated because the function expression explicitly defines a lexical identifier.

```js
const bar = {
  name: 'Bar',
  types: [
    { f: 'function' },
    { n: 'number' }
  ],
  foo: function foo (f, n) {   // explicitly defines a lexical name for the method
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

bar.foo(() => {console.log('baz');}, 3);
//baz
//baz
//baz
```
