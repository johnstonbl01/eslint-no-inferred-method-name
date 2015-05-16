# Disallow Inferred Method Names in Object Literals (no-inferred-method-name)

Every form of function expression assignment in ES6 infers a `name` that can be used inside the function for recursion. This is true, _except_ for object literal function assignment. This rule will catch any instance where a function name is not explicitly defined within an object literal function assignment.

**Note** - Tests are provided in the repo, but not necessary for installation or use of the rule.

## Setup

### Prerequisites

Node.js & NPM - For instructions on how to install Node.js, check [here](https://nodejs.org/).

ESLint - Install globally with `npm install -g eslint`. More information on ESLint setup & configuration can be found [here](http://eslint.org/).

### Copy Rules File to ESLint Rules Directory

Place the `no-inferred-method-name.js` from the `rules/` directory into your ESLint `lib/rules/` directory. If you're using a global installation of ESLint, then this can be found at `usr/lib/node_modules/eslint/` on a Linux Distro. For build system integration (Gulp, Grunt, etc), it's possible to copy this file into the `npm_modules/eslint/lib/rules/` directory within your project folder.

### Enable rule in ESLint Config File

Within the project directory, create or edit the `.eslintrc` file to enable the new rule.

```js
{
    "rules": {
        "no-inferred-method-name": 2
    },

    "settings": {
        "ecmascript": 6
    }
}
```

The settings above ensure that ES6 is enabled and that the new rule flags as an error. If warnings are preferred over errors, change the value of `"no-inferred-method-name"` to `1`.

### Run ESLint

You can lint files from the command line using:
`eslint [filename]`

Additionally, the above setup should enable the rule within your Text Editor or IDE (assuming that you have a Linter enabled).

## Rule Details

The following code causes 1 error, as the `foo` method does not have an explicitly defined name.

```js
var obj = {
	foo: function (f, n) {
		let i = n - 1;
		return foo(f, i);    // 'foo(f, i)' is an inferred method name
	}
}
```

In this code, no warnings are generated, since the `foo` method in the object literal has an explicitly defined name (`foo`)

```js
var obj = {
	foo: function foo (f, n) {   // 'foo' has an explicitly defined method name
		let i = n - 1;
		return foo(f, i);
	}
}
```