/* eslint-disable strict */
const Controller = require('egg').Controller;

class GetWorksController extends Controller {
  async getworks() {
    const { ctx } = this;
    const res = await ctx.service.getworks.getworks();
    // const tags = res.tags.splice(',');
    console.log(res[0].images.split(','), 'images');
    res[0].tags = res[0].tags.split(',');
    res[0].images = res[0].images.split(',');
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}

module.exports = GetWorksController;
