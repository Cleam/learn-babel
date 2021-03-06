const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const babel = require('@babel/core');

const root = path.join(__dirname);

const resolve = (relativePath) => path.resolve(__dirname, relativePath);

const babelBuild = (name) => {
  let options;
  try {
    options = JSON.parse(fs.readFileSync(resolve(`./${name}/.babelrc`), 'utf-8'));
    options.plugins[0][0] = resolve(`./${name}/babel-plugin-${name}`);
  } catch (error) {}
  if (!options) {
    options = {
      plugins: [resolve(`./${name}/babel-plugin-${name}`)],
    };
  }

  const { code } = babel.transformSync(fs.readFileSync(resolve(`./${name}/code.js`)), options);
  // console.log(code);
  fs.writeFileSync(resolve(`./${name}/output.js`), code);
};

// babelBuild('p2');

// 遍历plugins
const dirs = fs.readdirSync(root);

for (const d of dirs) {
  const info = fs.statSync(root + '/' + d);
  if (info.isDirectory()) {
    console.log('\n');
    console.log(chalk.green(root + '/' + d));
    babelBuild(d);
  }
}
