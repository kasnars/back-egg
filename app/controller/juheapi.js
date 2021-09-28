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
  async getmusic() {
    const { ctx } = this;
    const keywords = ctx.query.keywords;
    const limit = ctx.query.limit;
    const url = `http://bao.lqjhome.cn:3000/cloudsearch?keywords=${keywords}&limit=${limit}`;
    const res = await this.ctx.curl(url, { dataType: 'json' });
    ctx.body = res.data;
  }

  async getUrl() {
    const { ctx } = this;
    const id = ctx.query.id;
    const url = `http://bao.lqjhome.cn:3000/song/url?id=${id}`;
    const res = await this.ctx.curl(url, { dataType: 'json' });
    ctx.body = res.data;
  }

  async getLyric() {
    const { ctx } = this;
    const id = ctx.query.id;
    const url = `http://bao.lqjhome.cn:3000/lyric?id=${id}`;
    const res = await this.ctx.curl(url, { dataType: 'json' });
    ctx.body = res.data;
  }
}

module.exports = JuheapiController;
