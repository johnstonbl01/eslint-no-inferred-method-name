/**
 * Inferred Method Name Rule:
 * @author Blake Johnston
 * @copyright 2015 Blake Johnston. All rights reserved.
 */

'use strict';

function isMethodCall(identifier) {
  const isWithinFunction = identifier.parent.type === 'CallExpression';
  const isWithinBlock = identifier.parent.parent.parent.type === 'BlockStatement';

  return isWithinFunction && isWithinBlock;
}

module.exports = {
  meta: {
    type: 'problem',
    messages: {
      noInferred:
        '"{{name}}" has no lexical name binding. Use syntax "foo: function foo {...}" or call with "this.foo()".'
    },
    docs: {
      description:
        'disallow the use of functions without lexical binding when using concise method syntax for objects',
      category: 'Possible Errors',
      recommended: true,
      url:
        'https://github.com/johnstonbl01/eslint-no-inferred-method-name/tree/master/docs/rules/no-inferred-method-name.md'
    }
  },
  create(context) {
    return {
      'Program:exit': function() {
        const globalScope = context.getScope();

        globalScope.through.forEach(ref => {
          const blockParent = ref.from.block.parent;

          const usesMethodShorthand = blockParent.type === 'Property' && blockParent.method;

          if (isMethodCall(ref.identifier) && usesMethodShorthand) {
            context.report({
              node: ref.identifier,
              messageId: 'noInferred',
              data: ref.identifier
            });
          }
        });
      }
    };
  }
};
