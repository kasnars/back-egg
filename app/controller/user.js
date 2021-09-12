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
      ctx.status = 401;
      ctx.body = {
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
  async login() {
    const { ctx } = this;
    const { name, password } = ctx.request.body;
    const res = await ctx.service.user.getUserById(name);
    if (res < 0) {
      ctx.status = 403;
      ctx.body = {
        msg: '账号不存在',
      };
      return;
    }
    if (res.password === password) {
      ctx.status = 200;
      ctx.body = {
        id: res.id,
        name: res.name,
        nickname: res.nickname,
      };
    } else {
      ctx.status = 403;
      ctx.body = {
        msg: '账号或密码错误',
      };
      return;
    }
    console.log(res.password, 'passs');
  }
}

module.exports = UserController;
