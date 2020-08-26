module.exports = function ({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path) {
        // 函数声明转换成函数表达式（变量声明+函数表达式）
        const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id);
        // console.log(id);
        // console.log(path.scope.generateUidIdentifier(path.node.id.name));
        const node = path.node;
        const variableDeclarator = t.variableDeclarator(
          id,
          t.functionExpression(t.identifier(node.id.name), node.params, node.body)
        );
        const variableDeclaration = t.variableDeclaration('var', [variableDeclarator]);
        path.replaceWith(variableDeclaration);
      },
    },
  };
};
