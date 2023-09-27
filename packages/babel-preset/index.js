const fs = require('fs');
const createReact = require('./react.create');
const createVue = require('./vue.create');
const path = require('path');

function isPackageListed(name, packageJson) {
  let isListed = false;
  try {
    const pkg = JSON.parse(fs.readFileSync(packageJson, 'utf-8'));
    isListed = name in (pkg.dependencies || {}) || name in (pkg.devDependencies || {});
  } catch (e) {
    console.log(e);
  }

  return isListed;
}

module.exports = function (api, opts) {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;
  const appDirectory = fs.realpathSync(process.cwd());
  const appPackageJson = path.resolve(appDirectory, 'package.json');
  const appTsConfig = path.resolve(appDirectory, 'tsconfig.json');

  const useTypeScript = fs.existsSync(appTsConfig);
  const includeReact = isPackageListed('react-dom', appPackageJson);
  const includeVue = isPackageListed('vue', appPackageJson);

  console.log({ react: includeReact, vue: includeVue });
  const options = {
    ...opts,
    useTypeScript,
  };
  if (includeReact) {
    return createReact(api, options, env);
  }
  if (includeVue) {
    return createVue(api, options, env);
  }
  return createVue(api, options, env);
};
