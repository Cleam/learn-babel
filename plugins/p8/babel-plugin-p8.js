module.exports = function ({ types: t }) {
  return {
    pre(state) {
      this.cache = new Map();
    },
    visitor: {
      FunctionDeclaration(path, state) {
        console.log(state.opts);
      },
    },
    post(state) {
      console.log(this.cache);
    },
  };
};
