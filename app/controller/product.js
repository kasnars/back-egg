/* eslint-disable strict */
const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'product';
  }

  async detail() {
    const { ctx } = this;
    ctx.body = `id = ${ctx.query.id}`;
  }

  async detail2() {
    const { ctx } = this;
    ctx.body = `id = ${ctx.params.id}`;
  }
}

module.exports = ProductController;
