'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getarticle() {
    const { ctx } = this;
    const res = await ctx.service.article.getAll();
    ctx.body = {
      status: 200,
      data: res,
    };
  }
  async getById() {
    const { ctx } = this;
    const id = ctx.params.id;
    const res = await ctx.service.article.getById(id);
    ctx.body = {
      id: 200,
      data: res,
    };
  }
}

module.exports = ArticleController;
