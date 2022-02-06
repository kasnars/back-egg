/* eslint-disable strict */
const Controller = require('egg').Controller;
// 调我接口之前一定要将下面的key改成自己在聚合api申请的 不然很容易到上限
const JUHE_WEATER_KEY = '2e1f9f0ee4b4795b0dc19ccb4ede38f2';
const JUHE_NEWS_KEY = 'e20c2c17d09aeb81c720fa9f511464e6';
class JuheapiController extends Controller {
  async weather() {
    const { ctx } = this;
    const url = `http://apis.juhe.cn/simpleWeather/query?city=%E6%AD%A6%E6%B1%89&key=${JUHE_WEATER_KEY}`;
    const res = await this.ctx.curl(url, { dataType: 'json' });
    ctx.body = {
      status: 200,
      data: res.data,
    };
  }

  async getNews() {
    const { ctx } = this;
    let page = ctx.query.page || 1;
    let page_size = ctx.query.page_size || 30;
    const type = ctx.query.type || 'top';
    if (page <= 0) page = 1;
    if (page_size <= 0 || page_size > 30) page_size = 30;
    const url = `http://v.juhe.cn/toutiao/index?type=${type}&page=${page}&page_size=${page_size}&is_filter=1&key=${JUHE_NEWS_KEY}`;
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
