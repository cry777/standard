/* eslint-disable no-param-reassign */
const { dirname, resolve } = require('path');
const { getPackageInfoSync } = require('local-pkg');

const validateBoolOption = (name, value, defaultValue) => {
  if (typeof value === 'undefined') {
    value = defaultValue;
  }

  if (typeof value !== 'boolean') {
    throw new Error(`Preset axum: '${name}' option must be a boolean.`);
  }

  return value;
};
/**
 *
 * @param api
 * @param {object} opts
 * @param env
 */
module.exports = function (api, opts, env) {
  if (!opts) {
    opts = {};
  }
  const isEnvDevelopment = env === 'development';
  // const isEnvProduction = env === 'production';
  // const isEnvTest = env === 'test';

  const hasJsxRuntime = (() => {
    try {
      require.resolve('react/jsx-runtime');
      return true;
    } catch (e) {
      return false;
    }
  })();

  const isTypeScriptEnabled = validateBoolOption('typescript', opts.typescript, false);
  const areHelpersEnabled = validateBoolOption('helpers', opts.helpers, true);
  const useAbsoluteRuntime = validateBoolOption('absoluteRuntime', opts.absoluteRuntime, true);
  let absoluteRuntimePath;
  if (useAbsoluteRuntime) {
    absoluteRuntimePath = dirname(require.resolve('@babel/runtime/package.json'));
  }

  const ownNodeModulesPath = resolve(__dirname, 'node_modules');
  const coreJsPackageJson = getPackageInfoSync('core-js', { paths: [ownNodeModulesPath] }) || { version: undefined };
  return {
    presets: [
      [
        require('@babel/preset-env').default,
        {
          // useBuiltIns
          //  1. 取值为 entry，需要在代码中手动引入 polyfill 包:
          //     import 'core-js'; //手动引入
          //     import 'regenerator-runtime/runtime'; //手动引入
          //  2. 取值为 false, 不进行任何 polyfill 的转译
          //  3. 取值为 usage，根据代码中使用的内容进行动态polyfill
          useBuiltIns: 'usage',
          // Set the corejs version we are using to avoid warnings in console
          corejs: coreJsPackageJson.version,
          // Exclude transforms that make all code slower
          exclude: ['transform-typeof-symbol'],
          // 取值可以是 amd, umd, systemjs, commonjs 和 false，为 false 时可以用于 webpack 做 tree shaking
          // modules: false,
        },
      ],
      [
        require('@babel/preset-react').default,
        {
          // Adds component stack to warning messages
          // Adds __self attribute to JSX which React will use for some warnings
          development: isEnvDevelopment,
          // Will use the native built-in instead of trying to polyfill
          // behavior for any plugins that require one.
          ...(hasJsxRuntime ? {} : { useBuiltIns: true }),
          runtime: hasJsxRuntime ? 'automatic' : 'classic',
        },
      ],
      isTypeScriptEnabled && [require('@babel/preset-typescript').default],
    ].filter(Boolean),
    plugins: [
      [
        require('@babel/plugin-transform-runtime').default,
        {
          corejs: false,
          helpers: areHelpersEnabled,
          // By default, babel assumes babel/runtime version 7.0.0-beta.0,
          // explicitly resolving to match the provided helper functions.
          // https://github.com/babel/babel/issues/10261
          version: require('@babel/runtime/package.json').version,
          regenerator: true,
          // Undocumented option that lets us encapsulate our runtime, ensuring
          // the correct version is used
          // https://github.com/babel/babel/blob/090c364a90fe73d36a30707fc612ce037bdbbb24/packages/babel-plugin-transform-runtime/src/index.js#L35-L42
          absoluteRuntime: absoluteRuntimePath,
        },
      ],
    ].filter(Boolean),
  };
};
