'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getAll() {
    const { app } = this;
    const res = app.mysql.select('user');
    return res;
  }
  async newUser(newdata) {
    const { app } = this;
    const res = app.mysql.insert('user', newdata);
    return res;
  }
  async getUserById(postname) {
    const { app } = this;
    try {
      const res = await app.mysql.get('user', { name: postname });
      return res || '-1';
    } catch (err) {
      return -1;
    }
  }
}

module.exports = UserService;
