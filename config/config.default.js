/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630999127997_8312';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'gz-cynosdbmysql-grp-ox2m9wvp.sql.tencentcdb.com',
      // 端口号
      port: '27943',
      // 用户名
      user: 'root',
      // 密码
      password: 'asir.20000809',
      // 数据库名
      database: 'kasnars',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ], // 白名单
  };

  config.cors = {
    origin: '*', // 跨任何域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 被允许的请求方式
  };
  config.cluster = {
    // listen:{
    //   // path:'',
    //   port:443,
    //   // hostname:'0.0.0.0'
    // },
    // https: {
    //   key: './kasnars.club.key',
    //   cert: './kasnars.club.pem',
    // },
  };

  return {
    ...config,
    ...userConfig,
  };
};
