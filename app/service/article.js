'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
  async getAll() {
    const { app } = this;
    const res = await app.mysql.select('article');
    return res;
  }
  async getById(getid) {
    const { app } = this;
    const res = await app.mysql.get('article', {
      id: getid,
    });
    return res;
  }
}

module.exports = DemoService;
