module.exports = function ({ types: t }) {
  return {
    visitor: {
      // 使用源码替换
      // FunctionDeclaration(path) {
      //   if (!t.isFunctionDeclaration(path.node)) return;
      //   path.replaceWithSourceString(`
      //     function add(a, b) {
      //       return a +b;
      //     }
      //   `);
      // },

      // Removing a node
      // FunctionDeclaration(path) {
      //   path.remove();
      // },

      // Replacing a parent
      // BinaryExpression(path) {
      //   path.parentPath.replaceWith(t.stringLiteral('Hello, lizhigao!'));
      // },

      // Removing a parent
      BinaryExpression(path) {
        path.parentPath.remove();
      },
    },
  };
};
