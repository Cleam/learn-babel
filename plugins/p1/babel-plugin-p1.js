module.exports = function ({ types: t }) {
  return {
    name: 'p1',
    visitor: {
      FunctionDeclaration: {
        enter(path) {
          console.log('FunctionDeclaration enter called!', path.node.id.name);
          const ce = t.callExpression(
            t.memberExpression(t.identifier('console'), t.identifier('time')),
            [t.stringLiteral(path.node.id.name)]
          );
          path.get('body').unshiftContainer('body', ce);
        },
        exit(path) {
          console.log('FunctionDeclaration exit called!', path.node.id.name);
          const blockStatement = path.get('body');
          const lastExpression = blockStatement.get('body').pop();
          const ce = t.callExpression(
            t.memberExpression(t.identifier('console'), t.identifier('timeEnd')),
            [t.stringLiteral(path.node.id.name)]
          );

          if (lastExpression.type !== 'ReturnStatement') {
            lastExpression.insertAfter(ce);
          } else {
            lastExpression.insertBefore(ce);
          }
        },
      },
      // Identifier: {
      //   enter(path) {
      //     console.log('Identifier enter called!', path.node.name);
      //     const name = path.node.name;
      //     // reverse the name: JavaScript -> tpircSavaJ
      //     path.node.name = name.split('').reverse().join('');
      //   },
      //   exit(path) {
      //     console.log('Identifier exit called!', path.node.name);
      //   },
      // },
    },
  };
};
