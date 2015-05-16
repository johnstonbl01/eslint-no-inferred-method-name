'==================================== ref.identifier ============================================'
{ type: 'Identifier',
  name: 'blakeFunction',
  range: [ 54, 67 ],
  loc: { start: { line: 3, column: 9 }, end: { line: 3, column: 22 } },
  parent: 
   { type: 'ReturnStatement',
     argument: [Circular],
     range: [ 47, 68 ],
     loc: { start: [Object], end: [Object] },
     parent: 
      { type: 'BlockStatement',
        body: [Object],
        range: [Object],
        loc: [Object],
        parent: [Object] } } }
'==================================== ref.identifier.parent ====================================='
{ type: 'ReturnStatement',
  argument: 
   { type: 'Identifier',
     name: 'blakeFunction',
     range: [ 54, 67 ],
     loc: { start: [Object], end: [Object] },
     parent: [Circular] },
  range: [ 47, 68 ],
  loc: { start: { line: 3, column: 2 }, end: { line: 3, column: 23 } },
  parent: 
   { type: 'BlockStatement',
     body: [ [Circular] ],
     range: [ 43, 71 ],
     loc: { start: [Object], end: [Object] },
     parent: 
      { type: 'FunctionExpression',
        id: null,
        params: [Object],
        body: [Circular],
        generator: false,
        expression: false,
        range: [Object],
        loc: [Object],
        parent: [Object] } } }
'==================================== ref.identifier.parent.parent =============================='
{ type: 'BlockStatement',
  body: 
   [ { type: 'ReturnStatement',
       argument: [Object],
       range: [Object],
       loc: [Object],
       parent: [Circular] } ],
  range: [ 43, 71 ],
  loc: { start: { line: 2, column: 31 }, end: { line: 4, column: 2 } },
  parent: 
   { type: 'FunctionExpression',
     id: null,
     params: [ [Object] ],
     body: [Circular],
     generator: false,
     expression: false,
     range: [ 28, 71 ],
     loc: { start: [Object], end: [Object] },
     parent: 
      { type: 'Property',
        key: [Object],
        value: [Circular],
        kind: 'init',
        method: false,
        shorthand: false,
        computed: false,
        range: [Object],
        loc: [Object],
        parent: [Object] } } }
'==================================== childScopes ==============================================='
[ { type: 'function',
    set: {},
    taints: {},
    dynamic: false,
    block: 
     { type: 'Program',
       body: [Object],
       sourceType: 'script',
       range: [Object],
       loc: [Object],
       comments: [],
       tokens: [Object],
       parent: null },
    through: [ [Object] ],
    variables: [ [Object], [Object] ],
    references: [ [Object] ],
    variableScope: [Circular],
    functionExpressionScope: false,
    directCallToEvalScope: false,
    thisFound: false,
    __left: null,
    upper: 
     { type: 'global',
       set: {},
       taints: {},
       dynamic: true,
       block: [Object],
       through: [Object],
       variables: [Object],
       references: [],
       variableScope: [Circular],
       functionExpressionScope: false,
       directCallToEvalScope: false,
       thisFound: false,
       __left: null,
       upper: null,
       isStrict: false,
       childScopes: [Circular],
       implicit: [Object] },
    isStrict: false,
    childScopes: [ [Object] ] } ]
'==================================== globalScope .block.tokens ================================='
{ type: 'Keyword',
  value: 'var',
  range: [ 0, 3 ],
  loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 3 } } }
{ type: 'Identifier',
  value: 'obj',
  range: [ 4, 7 ],
  loc: { start: { line: 1, column: 4 }, end: { line: 1, column: 7 } } }
{ type: 'Punctuator',
  value: '=',
  range: [ 8, 9 ],
  loc: { start: { line: 1, column: 8 }, end: { line: 1, column: 9 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 10, 11 ],
  loc: { start: { line: 1, column: 10 }, end: { line: 1, column: 11 } } }
{ type: 'Identifier',
  value: 'blakeFunction',
  range: [ 13, 26 ],
  loc: { start: { line: 2, column: 1 }, end: { line: 2, column: 14 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 26, 27 ],
  loc: { start: { line: 2, column: 14 }, end: { line: 2, column: 15 } } }
{ type: 'Keyword',
  value: 'function',
  range: [ 28, 36 ],
  loc: { start: { line: 2, column: 16 }, end: { line: 2, column: 24 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 37, 38 ],
  loc: { start: { line: 2, column: 25 }, end: { line: 2, column: 26 } } }
{ type: 'Identifier',
  value: 'arr',
  range: [ 38, 41 ],
  loc: { start: { line: 2, column: 26 }, end: { line: 2, column: 29 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 41, 42 ],
  loc: { start: { line: 2, column: 29 }, end: { line: 2, column: 30 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 43, 44 ],
  loc: { start: { line: 2, column: 31 }, end: { line: 2, column: 32 } } }
{ type: 'Keyword',
  value: 'return',
  range: [ 47, 53 ],
  loc: { start: { line: 3, column: 2 }, end: { line: 3, column: 8 } } }
{ type: 'Identifier',
  value: 'blakeFunction',
  range: [ 54, 67 ],
  loc: { start: { line: 3, column: 9 }, end: { line: 3, column: 22 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 67, 68 ],
  loc: { start: { line: 3, column: 22 }, end: { line: 3, column: 23 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 70, 71 ],
  loc: { start: { line: 4, column: 1 }, end: { line: 4, column: 2 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 72, 73 ],
  loc: { start: { line: 5, column: 0 }, end: { line: 5, column: 1 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 73, 74 ],
  loc: { start: { line: 5, column: 1 }, end: { line: 5, column: 2 } } }

short.js
  1:4   error  obj is defined but never used   no-unused-vars
  2:16  error  Missing "use strict" statement  strict
  2:26  error  arr is defined but never used   no-unused-vars
  3:9   error  "blakeFunction" is not defined  no-undef

✖ 4 problems (4 errors, 0 warnings)

