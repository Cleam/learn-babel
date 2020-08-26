module.exports = function ({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path, state) {
        // 必须添加if条件判断，否则进入死循环，内存溢出。
        if (t.isBinaryExpression(path.node, { operator: '*' })) {
          // console.log(path.node.left.name);
          path.replaceWith(t.binaryExpression('**', path.node.left, t.numericLiteral(2)));
        }
      },
    },
  };
};
