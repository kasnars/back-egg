/* eslint-disable strict */
const Controller = require('egg').Controller;

class GetWorksController extends Controller {
  async getworks() {
    const { ctx } = this;
    const res = await ctx.service.getworks.getworks();
    // const tags = res.tags.splice(',');
    // console.log(res[0].images.split(','), 'images');
    // console.log(res[1], 'reees');
    // res[0].tags = res[0].tags.split(',');
    // res[0].images = res[0].images.split(',');
    res.forEach(item => {
      item.tags = item.tags.split(',');
      item.images = item.images.split(',');
    });

    ctx.body = {
      status: 200,
      data: res,
    };
  }
}

module.exports = GetWorksController;
