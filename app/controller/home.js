'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    // ctx.body = 'hello, egg';
    await ctx.render('index.html', {
      res,
    });
  }
  async download() {
    const filePath = path.resolve(this.app.config.static.dir, '前端开发工程师_刘杨鑫.pdf');
    this.ctx.attachment('前端开发工程师_刘杨鑫.pdf');
    this.ctx.set('Content-Type', 'application/octet-stream');
    this.ctx.body = fs.createReadStream(filePath);
  }
}

module.exports = HomeController;
