'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
  async getALl() {
    const { app } = this;
    const res = await app.mysql.select('comment');
    return res;
  }

  async create(data) {
    const { app } = this;
    const res = await app.mysql.insert('comment', data);
    return res.affectedRows === 1;
  }
}

module.exports = CommentService;
