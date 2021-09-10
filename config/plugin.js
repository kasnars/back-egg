'use strict';

/** @type Egg.EggPlugin */
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// eslint-disable-next-line eggache/no-override-exports
// had enabled by egg
// static: {
//   enable: true,
// }

// 开启跨域插件
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
