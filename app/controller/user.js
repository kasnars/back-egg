'use strict';

const Controller = require('egg').Controller;
const Token = require('../middleware/token');

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
      const token = Token.encrypt({ id: res.name }, '15d');
      ctx.status = 200;
      ctx.body = {
        id: res.id,
        name: res.name,
        nickname: res.nickname,
        img: res.img,
        token,
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
  async getUserInfo() {
    const { ctx } = this;
    const res = await ctx.service.user.getUserById(ctx.params.name);
    if (res !== -1) {
      ctx.status = 200;
      ctx.body = {
        data: res,
      };
    } else {
      ctx.status = 401;
      ctx.body = {
        msg: '用户不存在',
      };
    }
  }
}

module.exports = UserController;
