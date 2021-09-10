/* eslint-disable strict */
const Controller = require('egg').Controller;

class JuheapiController extends Controller {
  async weather() {
    const { ctx } = this;
    const url = 'http://apis.juhe.cn/simpleWeather/query?city=%E6%AD%A6%E6%B1%89&key=2e1f9f0ee4b4795b0dc19ccb4ede38f2';
    const res = await this.ctx.curl(url, { dataType: 'json' });
    ctx.body = {
      status: 200,
      data: res.data,
    };
  }
}

module.exports = JuheapiController;
