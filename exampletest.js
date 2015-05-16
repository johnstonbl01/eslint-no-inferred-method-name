'CallExpression'
'BlockStatement'
'==================================== ref.identifier ============================================'
{ type: 'Identifier',
  name: 'repeat',
  range: [ 309, 315 ],
  loc: 
   { start: { line: 22, column: 9 },
     end: { line: 22, column: 15 } },
  parent: 
   { type: 'CallExpression',
     callee: [Circular],
     arguments: [ [Object], [Object] ],
     range: [ 309, 321 ],
     loc: { start: [Object], end: [Object] },
     parent: 
      { type: 'ReturnStatement',
        argument: [Circular],
        range: [Object],
        loc: [Object],
        parent: [Object] } } }
'==================================== ref.identifier.parent ====================================='
{ type: 'CallExpression',
  callee: 
   { type: 'Identifier',
     name: 'repeat',
     range: [ 309, 315 ],
     loc: { start: [Object], end: [Object] },
     parent: [Circular] },
  arguments: 
   [ { type: 'Identifier',
       name: 'f',
       range: [Object],
       loc: [Object],
       parent: [Circular] },
     { type: 'Identifier',
       name: 'i',
       range: [Object],
       loc: [Object],
       parent: [Circular] } ],
  range: [ 309, 321 ],
  loc: 
   { start: { line: 22, column: 9 },
     end: { line: 22, column: 21 } },
  parent: 
   { type: 'ReturnStatement',
     argument: [Circular],
     range: [ 302, 322 ],
     loc: { start: [Object], end: [Object] },
     parent: 
      { type: 'BlockStatement',
        body: [Object],
        range: [Object],
        loc: [Object],
        parent: [Object] } } }
'==================================== ref.identifier.parent.parent =============================='
{ type: 'ReturnStatement',
  argument: 
   { type: 'CallExpression',
     callee: 
      { type: 'Identifier',
        name: 'repeat',
        range: [Object],
        loc: [Object],
        parent: [Circular] },
     arguments: [ [Object], [Object] ],
     range: [ 309, 321 ],
     loc: { start: [Object], end: [Object] },
     parent: [Circular] },
  range: [ 302, 322 ],
  loc: 
   { start: { line: 22, column: 2 },
     end: { line: 22, column: 22 } },
  parent: 
   { type: 'BlockStatement',
     body: [ [Object], [Object], [Object], [Circular] ],
     range: [ 131, 325 ],
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
    through: [ [Object], [Object], [Object], [Object], [Object] ],
    variables: [ [Object], [Object] ],
    references: [ [Object], [Object] ],
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
    isStrict: true,
    childScopes: [ [Object], [Object] ] } ]
'==================================== globalScope .block.tokens ================================='
{ type: 'String',
  value: '\'use strict\'',
  range: [ 0, 12 ],
  loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 12 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 12, 13 ],
  loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 13 } } }
{ type: 'Keyword',
  value: 'const',
  range: [ 15, 20 ],
  loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 5 } } }
{ type: 'Identifier',
  value: 'repeater',
  range: [ 21, 29 ],
  loc: { start: { line: 3, column: 6 }, end: { line: 3, column: 14 } } }
{ type: 'Punctuator',
  value: '=',
  range: [ 30, 31 ],
  loc: { start: { line: 3, column: 15 }, end: { line: 3, column: 16 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 32, 33 ],
  loc: { start: { line: 3, column: 17 }, end: { line: 3, column: 18 } } }
{ type: 'Identifier',
  value: 'name',
  range: [ 35, 39 ],
  loc: { start: { line: 4, column: 1 }, end: { line: 4, column: 5 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 39, 40 ],
  loc: { start: { line: 4, column: 5 }, end: { line: 4, column: 6 } } }
{ type: 'String',
  value: '\'Repeater\'',
  range: [ 41, 51 ],
  loc: { start: { line: 4, column: 7 }, end: { line: 4, column: 17 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 51, 52 ],
  loc: { start: { line: 4, column: 17 }, end: { line: 4, column: 18 } } }
{ type: 'Identifier',
  value: 'types',
  range: [ 54, 59 ],
  loc: { start: { line: 5, column: 1 }, end: { line: 5, column: 6 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 59, 60 ],
  loc: { start: { line: 5, column: 6 }, end: { line: 5, column: 7 } } }
{ type: 'Punctuator',
  value: '[',
  range: [ 61, 62 ],
  loc: { start: { line: 5, column: 8 }, end: { line: 5, column: 9 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 65, 66 ],
  loc: { start: { line: 6, column: 2 }, end: { line: 6, column: 3 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 67, 68 ],
  loc: { start: { line: 6, column: 4 }, end: { line: 6, column: 5 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 68, 69 ],
  loc: { start: { line: 6, column: 5 }, end: { line: 6, column: 6 } } }
{ type: 'String',
  value: '\'function\'',
  range: [ 70, 80 ],
  loc: { start: { line: 6, column: 7 }, end: { line: 6, column: 17 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 81, 82 ],
  loc: { start: { line: 6, column: 18 }, end: { line: 6, column: 19 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 82, 83 ],
  loc: { start: { line: 6, column: 19 }, end: { line: 6, column: 20 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 86, 87 ],
  loc: { start: { line: 7, column: 2 }, end: { line: 7, column: 3 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 88, 89 ],
  loc: { start: { line: 7, column: 4 }, end: { line: 7, column: 5 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 89, 90 ],
  loc: { start: { line: 7, column: 5 }, end: { line: 7, column: 6 } } }
{ type: 'String',
  value: '\'number\'',
  range: [ 91, 99 ],
  loc: { start: { line: 7, column: 7 }, end: { line: 7, column: 15 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 100, 101 ],
  loc: { start: { line: 7, column: 16 }, end: { line: 7, column: 17 } } }
{ type: 'Punctuator',
  value: ']',
  range: [ 103, 104 ],
  loc: { start: { line: 8, column: 1 }, end: { line: 8, column: 2 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 104, 105 ],
  loc: { start: { line: 8, column: 2 }, end: { line: 8, column: 3 } } }
{ type: 'Identifier',
  value: 'repeat',
  range: [ 107, 113 ],
  loc: { start: { line: 9, column: 1 }, end: { line: 9, column: 7 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 113, 114 ],
  loc: { start: { line: 9, column: 7 }, end: { line: 9, column: 8 } } }
{ type: 'Keyword',
  value: 'function',
  range: [ 115, 123 ],
  loc: { start: { line: 9, column: 9 }, end: { line: 9, column: 17 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 124, 125 ],
  loc: { start: { line: 9, column: 18 }, end: { line: 9, column: 19 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 125, 126 ],
  loc: { start: { line: 9, column: 19 }, end: { line: 9, column: 20 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 126, 127 ],
  loc: { start: { line: 9, column: 20 }, end: { line: 9, column: 21 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 128, 129 ],
  loc: { start: { line: 9, column: 22 }, end: { line: 9, column: 23 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 129, 130 ],
  loc: { start: { line: 9, column: 23 }, end: { line: 9, column: 24 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 131, 132 ],
  loc: { start: { line: 9, column: 25 }, end: { line: 9, column: 26 } } }
{ type: 'Keyword',
  value: 'let',
  range: [ 135, 138 ],
  loc: { start: { line: 10, column: 2 }, end: { line: 10, column: 5 } } }
{ type: 'Identifier',
  value: 'i',
  range: [ 139, 140 ],
  loc: { start: { line: 10, column: 6 }, end: { line: 10, column: 7 } } }
{ type: 'Punctuator',
  value: '=',
  range: [ 141, 142 ],
  loc: { start: { line: 10, column: 8 }, end: { line: 10, column: 9 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 143, 144 ],
  loc: 
   { start: { line: 10, column: 10 },
     end: { line: 10, column: 11 } } }
{ type: 'Punctuator',
  value: '-',
  range: [ 145, 146 ],
  loc: 
   { start: { line: 10, column: 12 },
     end: { line: 10, column: 13 } } }
{ type: 'Numeric',
  value: '1',
  range: [ 147, 148 ],
  loc: 
   { start: { line: 10, column: 14 },
     end: { line: 10, column: 15 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 148, 149 ],
  loc: 
   { start: { line: 10, column: 15 },
     end: { line: 10, column: 16 } } }
{ type: 'Keyword',
  value: 'if',
  range: [ 153, 155 ],
  loc: { start: { line: 12, column: 2 }, end: { line: 12, column: 4 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 156, 157 ],
  loc: { start: { line: 12, column: 5 }, end: { line: 12, column: 6 } } }
{ type: 'Keyword',
  value: 'typeof',
  range: [ 157, 163 ],
  loc: 
   { start: { line: 12, column: 6 },
     end: { line: 12, column: 12 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 164, 165 ],
  loc: 
   { start: { line: 12, column: 13 },
     end: { line: 12, column: 14 } } }
{ type: 'Punctuator',
  value: '===',
  range: [ 166, 169 ],
  loc: 
   { start: { line: 12, column: 15 },
     end: { line: 12, column: 18 } } }
{ type: 'String',
  value: '\'function\'',
  range: [ 170, 180 ],
  loc: 
   { start: { line: 12, column: 19 },
     end: { line: 12, column: 29 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 180, 181 ],
  loc: 
   { start: { line: 12, column: 29 },
     end: { line: 12, column: 30 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 182, 183 ],
  loc: 
   { start: { line: 12, column: 31 },
     end: { line: 12, column: 32 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 187, 188 ],
  loc: { start: { line: 13, column: 3 }, end: { line: 13, column: 4 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 188, 189 ],
  loc: { start: { line: 13, column: 4 }, end: { line: 13, column: 5 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 189, 190 ],
  loc: { start: { line: 13, column: 5 }, end: { line: 13, column: 6 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 190, 191 ],
  loc: { start: { line: 13, column: 6 }, end: { line: 13, column: 7 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 194, 195 ],
  loc: { start: { line: 14, column: 2 }, end: { line: 14, column: 3 } } }
{ type: 'Keyword',
  value: 'else',
  range: [ 196, 200 ],
  loc: { start: { line: 14, column: 4 }, end: { line: 14, column: 8 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 201, 202 ],
  loc: 
   { start: { line: 14, column: 9 },
     end: { line: 14, column: 10 } } }
{ type: 'Keyword',
  value: 'throw',
  range: [ 206, 211 ],
  loc: { start: { line: 15, column: 3 }, end: { line: 15, column: 8 } } }
{ type: 'Keyword',
  value: 'new',
  range: [ 212, 215 ],
  loc: 
   { start: { line: 15, column: 9 },
     end: { line: 15, column: 12 } } }
{ type: 'Identifier',
  value: 'Error',
  range: [ 216, 221 ],
  loc: 
   { start: { line: 15, column: 13 },
     end: { line: 15, column: 18 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 221, 222 ],
  loc: 
   { start: { line: 15, column: 18 },
     end: { line: 15, column: 19 } } }
{ type: 'String',
  value: '\'repeat: A Function is required\'',
  range: [ 222, 254 ],
  loc: 
   { start: { line: 15, column: 19 },
     end: { line: 15, column: 51 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 254, 255 ],
  loc: 
   { start: { line: 15, column: 51 },
     end: { line: 15, column: 52 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 255, 256 ],
  loc: 
   { start: { line: 15, column: 52 },
     end: { line: 15, column: 53 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 259, 260 ],
  loc: { start: { line: 16, column: 2 }, end: { line: 16, column: 3 } } }
{ type: 'Keyword',
  value: 'if',
  range: [ 264, 266 ],
  loc: { start: { line: 18, column: 2 }, end: { line: 18, column: 4 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 267, 268 ],
  loc: { start: { line: 18, column: 5 }, end: { line: 18, column: 6 } } }
{ type: 'Punctuator',
  value: '!',
  range: [ 268, 269 ],
  loc: { start: { line: 18, column: 6 }, end: { line: 18, column: 7 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 269, 270 ],
  loc: { start: { line: 18, column: 7 }, end: { line: 18, column: 8 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 270, 271 ],
  loc: { start: { line: 18, column: 8 }, end: { line: 18, column: 9 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 272, 273 ],
  loc: 
   { start: { line: 18, column: 10 },
     end: { line: 18, column: 11 } } }
{ type: 'Keyword',
  value: 'return',
  range: [ 277, 283 ],
  loc: { start: { line: 19, column: 3 }, end: { line: 19, column: 9 } } }
{ type: 'Identifier',
  value: 'undefined',
  range: [ 284, 293 ],
  loc: 
   { start: { line: 19, column: 10 },
     end: { line: 19, column: 19 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 293, 294 ],
  loc: 
   { start: { line: 19, column: 19 },
     end: { line: 19, column: 20 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 297, 298 ],
  loc: { start: { line: 20, column: 2 }, end: { line: 20, column: 3 } } }
{ type: 'Keyword',
  value: 'return',
  range: [ 302, 308 ],
  loc: { start: { line: 22, column: 2 }, end: { line: 22, column: 8 } } }
{ type: 'Identifier',
  value: 'repeat',
  range: [ 309, 315 ],
  loc: 
   { start: { line: 22, column: 9 },
     end: { line: 22, column: 15 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 315, 316 ],
  loc: 
   { start: { line: 22, column: 15 },
     end: { line: 22, column: 16 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 316, 317 ],
  loc: 
   { start: { line: 22, column: 16 },
     end: { line: 22, column: 17 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 317, 318 ],
  loc: 
   { start: { line: 22, column: 17 },
     end: { line: 22, column: 18 } } }
{ type: 'Identifier',
  value: 'i',
  range: [ 319, 320 ],
  loc: 
   { start: { line: 22, column: 19 },
     end: { line: 22, column: 20 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 320, 321 ],
  loc: 
   { start: { line: 22, column: 20 },
     end: { line: 22, column: 21 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 321, 322 ],
  loc: 
   { start: { line: 22, column: 21 },
     end: { line: 22, column: 22 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 324, 325 ],
  loc: { start: { line: 23, column: 1 }, end: { line: 23, column: 2 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 326, 327 ],
  loc: { start: { line: 24, column: 0 }, end: { line: 24, column: 1 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 327, 328 ],
  loc: { start: { line: 24, column: 1 }, end: { line: 24, column: 2 } } }
{ type: 'Keyword',
  value: 'const',
  range: [ 330, 335 ],
  loc: { start: { line: 26, column: 0 }, end: { line: 26, column: 5 } } }
{ type: 'Identifier',
  value: 'repeater',
  range: [ 336, 344 ],
  loc: 
   { start: { line: 26, column: 6 },
     end: { line: 26, column: 14 } } }
{ type: 'Punctuator',
  value: '=',
  range: [ 345, 346 ],
  loc: 
   { start: { line: 26, column: 15 },
     end: { line: 26, column: 16 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 347, 348 ],
  loc: 
   { start: { line: 26, column: 17 },
     end: { line: 26, column: 18 } } }
{ type: 'Identifier',
  value: 'name',
  range: [ 350, 354 ],
  loc: { start: { line: 27, column: 1 }, end: { line: 27, column: 5 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 354, 355 ],
  loc: { start: { line: 27, column: 5 }, end: { line: 27, column: 6 } } }
{ type: 'String',
  value: '\'Repeater\'',
  range: [ 356, 366 ],
  loc: 
   { start: { line: 27, column: 7 },
     end: { line: 27, column: 17 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 366, 367 ],
  loc: 
   { start: { line: 27, column: 17 },
     end: { line: 27, column: 18 } } }
{ type: 'Identifier',
  value: 'types',
  range: [ 369, 374 ],
  loc: { start: { line: 28, column: 1 }, end: { line: 28, column: 6 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 374, 375 ],
  loc: { start: { line: 28, column: 6 }, end: { line: 28, column: 7 } } }
{ type: 'Punctuator',
  value: '[',
  range: [ 376, 377 ],
  loc: { start: { line: 28, column: 8 }, end: { line: 28, column: 9 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 380, 381 ],
  loc: { start: { line: 29, column: 2 }, end: { line: 29, column: 3 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 382, 383 ],
  loc: { start: { line: 29, column: 4 }, end: { line: 29, column: 5 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 383, 384 ],
  loc: { start: { line: 29, column: 5 }, end: { line: 29, column: 6 } } }
{ type: 'String',
  value: '\'function\'',
  range: [ 385, 395 ],
  loc: 
   { start: { line: 29, column: 7 },
     end: { line: 29, column: 17 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 396, 397 ],
  loc: 
   { start: { line: 29, column: 18 },
     end: { line: 29, column: 19 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 397, 398 ],
  loc: 
   { start: { line: 29, column: 19 },
     end: { line: 29, column: 20 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 401, 402 ],
  loc: { start: { line: 30, column: 2 }, end: { line: 30, column: 3 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 403, 404 ],
  loc: { start: { line: 30, column: 4 }, end: { line: 30, column: 5 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 404, 405 ],
  loc: { start: { line: 30, column: 5 }, end: { line: 30, column: 6 } } }
{ type: 'String',
  value: '\'number\'',
  range: [ 406, 414 ],
  loc: 
   { start: { line: 30, column: 7 },
     end: { line: 30, column: 15 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 415, 416 ],
  loc: 
   { start: { line: 30, column: 16 },
     end: { line: 30, column: 17 } } }
{ type: 'Punctuator',
  value: ']',
  range: [ 418, 419 ],
  loc: { start: { line: 31, column: 1 }, end: { line: 31, column: 2 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 419, 420 ],
  loc: { start: { line: 31, column: 2 }, end: { line: 31, column: 3 } } }
{ type: 'Identifier',
  value: 'repeat',
  range: [ 422, 428 ],
  loc: { start: { line: 32, column: 1 }, end: { line: 32, column: 7 } } }
{ type: 'Punctuator',
  value: ':',
  range: [ 428, 429 ],
  loc: { start: { line: 32, column: 7 }, end: { line: 32, column: 8 } } }
{ type: 'Keyword',
  value: 'function',
  range: [ 430, 438 ],
  loc: 
   { start: { line: 32, column: 9 },
     end: { line: 32, column: 17 } } }
{ type: 'Identifier',
  value: 'repeat',
  range: [ 439, 445 ],
  loc: 
   { start: { line: 32, column: 18 },
     end: { line: 32, column: 24 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 446, 447 ],
  loc: 
   { start: { line: 32, column: 25 },
     end: { line: 32, column: 26 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 447, 448 ],
  loc: 
   { start: { line: 32, column: 26 },
     end: { line: 32, column: 27 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 448, 449 ],
  loc: 
   { start: { line: 32, column: 27 },
     end: { line: 32, column: 28 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 450, 451 ],
  loc: 
   { start: { line: 32, column: 29 },
     end: { line: 32, column: 30 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 451, 452 ],
  loc: 
   { start: { line: 32, column: 30 },
     end: { line: 32, column: 31 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 453, 454 ],
  loc: 
   { start: { line: 32, column: 32 },
     end: { line: 32, column: 33 } } }
{ type: 'Keyword',
  value: 'let',
  range: [ 457, 460 ],
  loc: { start: { line: 33, column: 2 }, end: { line: 33, column: 5 } } }
{ type: 'Identifier',
  value: 'i',
  range: [ 461, 462 ],
  loc: { start: { line: 33, column: 6 }, end: { line: 33, column: 7 } } }
{ type: 'Punctuator',
  value: '=',
  range: [ 463, 464 ],
  loc: { start: { line: 33, column: 8 }, end: { line: 33, column: 9 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 465, 466 ],
  loc: 
   { start: { line: 33, column: 10 },
     end: { line: 33, column: 11 } } }
{ type: 'Punctuator',
  value: '-',
  range: [ 467, 468 ],
  loc: 
   { start: { line: 33, column: 12 },
     end: { line: 33, column: 13 } } }
{ type: 'Numeric',
  value: '1',
  range: [ 469, 470 ],
  loc: 
   { start: { line: 33, column: 14 },
     end: { line: 33, column: 15 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 470, 471 ],
  loc: 
   { start: { line: 33, column: 15 },
     end: { line: 33, column: 16 } } }
{ type: 'Keyword',
  value: 'if',
  range: [ 475, 477 ],
  loc: { start: { line: 35, column: 2 }, end: { line: 35, column: 4 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 478, 479 ],
  loc: { start: { line: 35, column: 5 }, end: { line: 35, column: 6 } } }
{ type: 'Keyword',
  value: 'typeof',
  range: [ 479, 485 ],
  loc: 
   { start: { line: 35, column: 6 },
     end: { line: 35, column: 12 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 486, 487 ],
  loc: 
   { start: { line: 35, column: 13 },
     end: { line: 35, column: 14 } } }
{ type: 'Punctuator',
  value: '===',
  range: [ 488, 491 ],
  loc: 
   { start: { line: 35, column: 15 },
     end: { line: 35, column: 18 } } }
{ type: 'String',
  value: '\'function\'',
  range: [ 492, 502 ],
  loc: 
   { start: { line: 35, column: 19 },
     end: { line: 35, column: 29 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 502, 503 ],
  loc: 
   { start: { line: 35, column: 29 },
     end: { line: 35, column: 30 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 504, 505 ],
  loc: 
   { start: { line: 35, column: 31 },
     end: { line: 35, column: 32 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 509, 510 ],
  loc: { start: { line: 36, column: 3 }, end: { line: 36, column: 4 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 510, 511 ],
  loc: { start: { line: 36, column: 4 }, end: { line: 36, column: 5 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 511, 512 ],
  loc: { start: { line: 36, column: 5 }, end: { line: 36, column: 6 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 512, 513 ],
  loc: { start: { line: 36, column: 6 }, end: { line: 36, column: 7 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 516, 517 ],
  loc: { start: { line: 37, column: 2 }, end: { line: 37, column: 3 } } }
{ type: 'Keyword',
  value: 'else',
  range: [ 518, 522 ],
  loc: { start: { line: 37, column: 4 }, end: { line: 37, column: 8 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 523, 524 ],
  loc: 
   { start: { line: 37, column: 9 },
     end: { line: 37, column: 10 } } }
{ type: 'Keyword',
  value: 'throw',
  range: [ 528, 533 ],
  loc: { start: { line: 38, column: 3 }, end: { line: 38, column: 8 } } }
{ type: 'Keyword',
  value: 'new',
  range: [ 534, 537 ],
  loc: 
   { start: { line: 38, column: 9 },
     end: { line: 38, column: 12 } } }
{ type: 'Identifier',
  value: 'Error',
  range: [ 538, 543 ],
  loc: 
   { start: { line: 38, column: 13 },
     end: { line: 38, column: 18 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 543, 544 ],
  loc: 
   { start: { line: 38, column: 18 },
     end: { line: 38, column: 19 } } }
{ type: 'String',
  value: '\'repeat: A Function is required\'',
  range: [ 544, 576 ],
  loc: 
   { start: { line: 38, column: 19 },
     end: { line: 38, column: 51 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 576, 577 ],
  loc: 
   { start: { line: 38, column: 51 },
     end: { line: 38, column: 52 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 577, 578 ],
  loc: 
   { start: { line: 38, column: 52 },
     end: { line: 38, column: 53 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 581, 582 ],
  loc: { start: { line: 39, column: 2 }, end: { line: 39, column: 3 } } }
{ type: 'Keyword',
  value: 'if',
  range: [ 586, 588 ],
  loc: { start: { line: 41, column: 2 }, end: { line: 41, column: 4 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 589, 590 ],
  loc: { start: { line: 41, column: 5 }, end: { line: 41, column: 6 } } }
{ type: 'Punctuator',
  value: '!',
  range: [ 590, 591 ],
  loc: { start: { line: 41, column: 6 }, end: { line: 41, column: 7 } } }
{ type: 'Identifier',
  value: 'n',
  range: [ 591, 592 ],
  loc: { start: { line: 41, column: 7 }, end: { line: 41, column: 8 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 592, 593 ],
  loc: { start: { line: 41, column: 8 }, end: { line: 41, column: 9 } } }
{ type: 'Punctuator',
  value: '{',
  range: [ 594, 595 ],
  loc: 
   { start: { line: 41, column: 10 },
     end: { line: 41, column: 11 } } }
{ type: 'Keyword',
  value: 'return',
  range: [ 599, 605 ],
  loc: { start: { line: 42, column: 3 }, end: { line: 42, column: 9 } } }
{ type: 'Identifier',
  value: 'undefined',
  range: [ 606, 615 ],
  loc: 
   { start: { line: 42, column: 10 },
     end: { line: 42, column: 19 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 615, 616 ],
  loc: 
   { start: { line: 42, column: 19 },
     end: { line: 42, column: 20 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 619, 620 ],
  loc: { start: { line: 43, column: 2 }, end: { line: 43, column: 3 } } }
{ type: 'Keyword',
  value: 'return',
  range: [ 624, 630 ],
  loc: { start: { line: 45, column: 2 }, end: { line: 45, column: 8 } } }
{ type: 'Identifier',
  value: 'repeat',
  range: [ 631, 637 ],
  loc: 
   { start: { line: 45, column: 9 },
     end: { line: 45, column: 15 } } }
{ type: 'Punctuator',
  value: '(',
  range: [ 637, 638 ],
  loc: 
   { start: { line: 45, column: 15 },
     end: { line: 45, column: 16 } } }
{ type: 'Identifier',
  value: 'f',
  range: [ 638, 639 ],
  loc: 
   { start: { line: 45, column: 16 },
     end: { line: 45, column: 17 } } }
{ type: 'Punctuator',
  value: ',',
  range: [ 639, 640 ],
  loc: 
   { start: { line: 45, column: 17 },
     end: { line: 45, column: 18 } } }
{ type: 'Identifier',
  value: 'i',
  range: [ 641, 642 ],
  loc: 
   { start: { line: 45, column: 19 },
     end: { line: 45, column: 20 } } }
{ type: 'Punctuator',
  value: ')',
  range: [ 642, 643 ],
  loc: 
   { start: { line: 45, column: 20 },
     end: { line: 45, column: 21 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 643, 644 ],
  loc: 
   { start: { line: 45, column: 21 },
     end: { line: 45, column: 22 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 646, 647 ],
  loc: { start: { line: 46, column: 1 }, end: { line: 46, column: 2 } } }
{ type: 'Punctuator',
  value: '}',
  range: [ 648, 649 ],
  loc: { start: { line: 47, column: 0 }, end: { line: 47, column: 1 } } }
{ type: 'Punctuator',
  value: ';',
  range: [ 649, 650 ],
  loc: { start: { line: 47, column: 1 }, end: { line: 47, column: 2 } } }

example.js
   3:6  error  repeater is defined but never used  no-unused-vars
  22:9  error  "repeat" is not defined             no-undef
  26:6  error  repeater is already defined         no-redeclare

✖ 3 problems (3 errors, 0 warnings)

