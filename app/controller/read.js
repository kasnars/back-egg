'use strict';

const Controller = require('egg').Controller;

class ReadController extends Controller {
  async addIndex() {
    const { ctx } = this;
    // 想要取到函数的值一定要用await调用，非则取到的是一个promise对象
    const result = await ctx.service.read.readAdd();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        msg: '请求出错',
      };
    }
  }
}

module.exports = ReadController;
