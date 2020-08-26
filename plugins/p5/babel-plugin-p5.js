// 使用源码替换
module.exports = function ({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path) {
        if (!t.isFunctionDeclaration(path.node)) return;
        path.replaceWithSourceString(`
          function add(a, b) {
            return a +b;
          }
        `);
      },
    },
  };
};
