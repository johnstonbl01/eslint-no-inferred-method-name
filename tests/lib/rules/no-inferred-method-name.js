/**
 * @fileoverview Tests for no-inferred-method-name.
 * @author Blake Johnston
 */

'use strict';

const rule = require('../../../lib/rules/no-inferred-method-name');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

const ERROR_MSG =
  '"foo" has no lexical name binding. Use syntax "foo: function foo {...}" or call with "this.foo()".';

ruleTester.run('no-inferred-method-name', rule, {
  valid: [
    { code: 'var a; a = 1; var obj = { foo: function foo() { a; } }' },
    { code: 'var obj = { foo: function foo() { foo(); } }' },
    { code: 'var obj = { otherObj: { foo: function foo() { foo(); } } }' },
    { code: 'var obj = { foo() { } }' }
  ],
  invalid: [
    {
      code: 'var obj = { foo() { foo() } };',
      errors: [{ message: ERROR_MSG, type: 'Identifier' }]
    },
    {
      code: 'var obj = { otherObj: { foo() { foo(); } } }',
      errors: [{ message: ERROR_MSG, type: 'Identifier' }]
    },
    {
      code: 'var obj = { foo() { foo(); } }',
      errors: [{ message: ERROR_MSG, type: 'Identifier' }]
    }
  ]
});
