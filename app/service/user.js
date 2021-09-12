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
}

module.exports = UserService;
