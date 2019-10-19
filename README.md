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

ESLint - More information on ESLint setup & configuration can be found [here](http://eslint.org/).

### Install Plugin via NPM

Install the plugin using NPM:

```
$ npm install eslint-plugin-no-inferred-method-name --save-dev
```

_Note_: If ESLint is installed globally, the plugin must also be installed globally.

### Enable Plugin in ESLint Config File

Within the project directory, create or edit the ESLint configuration file to enable the new rule.

```js
{
  plugins: ['eslint-plugin-no-inferred-method-name'],
  rules: {
    // ...
    'no-inferred-method-name/no-inferred-method-name': 'error'
  }
  // ...
}
```

### Run ESLint

You can lint files from the command line using: `eslint [filename]`

Additionally, the above setup should enable the rule within your Text Editor or IDE (assuming that you have a Linter enabled).

## Rule Details

Detailed information / examples of the rule can be found [here](/docs/rules/no-inferred-method-name.md).
