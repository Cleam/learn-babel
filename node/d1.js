// import parser from '@babel/parser';
// import traverse from '@babel/traverse';
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const fs = require('fs');

const code = `function square(n) {
  return n * n;
}`;
const ast = parser.parse(
  code
  // {
  //   sourceType: 'module',
  //   plugins: ['jsx'],
  // }
);

const cd = traverse(ast, {
  // enter(path) {
  //   if (path.isIdentifier({ name: 'n' })) {
  //     path.node.name = 'x';
  //   }
  // },
  FunctionDeclaration(path) {
    console.log(path);
    // fs.writeFileSync('./d1.json', JSON.stringify(path));
    path.node.name = 'x';
  },
});
