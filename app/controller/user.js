'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async newUser() {
    const { ctx } = this;
    const reqData = ctx.request.body;
    const toNewUser = {
      name: reqData.name,
      password: reqData.password,
      nickname: reqData.nickname,
    };
    const res = await ctx.service.user.newUser(toNewUser);
    if (res.affectedRows === 1) {
      ctx.body = {
        status: 200,
        data: reqData,
      };
    } else {
      ctx.body = {
        status: 200,
        msg: '注册失败',
      };
    }

  }
  async getAll() {
    const { ctx } = this;
    const data = await ctx.service.user.getAll();
    ctx.body = {
      data,
    };
  }
}

module.exports = UserController;
