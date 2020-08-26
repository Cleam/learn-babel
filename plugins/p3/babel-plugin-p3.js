// 使用多个节点替换一个节点
module.exports = function ({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        path.replaceWithMultiple([
          t.expressionStatement(t.stringLiteral('Is this the real life?')),
          t.expressionStatement(t.stringLiteral('Is this just fantasy?')),
          t.expressionStatement(
            t.stringLiteral('(Enjoy singing the rest of the song in your head)')
          ),
        ]);
      },
    },
  };
};
