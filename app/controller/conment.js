'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  async newComment() {
    const { ctx } = this;
    const userToken = ctx.get('Authorization').split(' ')[1];
    const tokenStatus = await ctx.service.user.userVer(userToken);
    if (tokenStatus.token) {
      ctx.status = 200;
      ctx.body = 'ok';
    } else {
      ctx.status = 403;
      ctx.body = 'token不合法';
    }
  }
}

module.exports = CommentController;
