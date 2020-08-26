module.exports = function ({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path) {
        // // 检查是否绑定了局部变量
        // if (path.scope.hasBinding('n')) {
        //   console.log('绑定了局部变量：n');
        // }

        // // 检查是否绑定了局部变量
        // if (path.scope.hasOwnBinding('n')) {
        //   console.log('绑定了自己的局部变量：n');
        // }

        // // 生成UID（不会与已有变量产生重名冲突）
        // const nd = path.scope.generateUidIdentifier('uid');
        // console.log(nd);
        // // Node { type: "Identifier", name: "_uid" }
        // const nd2 = path.scope.generateUidIdentifier('uid');
        // console.log(nd2);
        // // Node { type: "Identifier", name: "_uid2" }

        // push一个变量声明到父级作用域中
        // // path.remove();
        // // path.scope.parent.push({ id, init: path.node });
        
      },
    },
  };
};
