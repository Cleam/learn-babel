module.exports = function ({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path, state) {
        if (t.isBinaryExpression(path.node, { operator: '*' })) {
          console.log(path.node.left.name);
          path.replaceWith(t.binaryExpression('**', path.node.left, t.numericLiteral(2)));
        }
      },
    },
  };
};
