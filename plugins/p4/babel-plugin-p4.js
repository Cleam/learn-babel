// 使用多个节点替换一个节点
module.exports = function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (t.isIdentifier(path.node, { name: '__ENV__' })) {
          path.replaceWith(t.StringLiteral('prod'));
        }
      },
    },
  };
};
