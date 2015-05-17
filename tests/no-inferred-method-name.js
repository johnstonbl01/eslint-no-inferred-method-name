/**
 * @fileoverview Tests for no-inferred-method-name.
 * @author Blake Johnston
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("../../../lib/eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/no-inferred-method-name", {
    valid: [
        { code: "var a; a = 1; var obj = { foo: function foo() { a; } }"},
        { code: "var obj = { foo: function foo() { foo(); } }"},
        { code: "var obj = { otherObj: { foo: function foo() { foo(); } } }"},
        { code: "var obj = { foo() { } }", ecmaFeatures: { objectLiteralShorthandMethods: true } }
    ],
    invalid: [
        { code: "var obj = { foo: function() { foo(); } }", errors: [{ message: "\"foo\" has no defined method name. Use syntax - foo: function foo {..}.", type: "Identifier"}] },
        { code: "var obj = { otherObj: { foo: function() { foo(); } } }", errors: [{ message: "\"foo\" has no defined method name. Use syntax - foo: function foo {..}.", type: "Identifier"}] },
        { code: "var obj = { foo() { foo(); } }", errors: [{ message: "\"foo\" has no defined method name. Use syntax - foo: function foo {..}.", type: "Identifier"}], ecmaFeatures: { objectLiteralShorthandMethods: true } }
    ]
});
