/* eslint-disable strict */
const Controller = require('egg').Controller;
const TOKEN = "'24.3029741096eb23a37522ca6f469fa159.2592000.1647135002.282335-25346644'"

class AiController extends Controller {

    async aiFlowerByBaidu() {
        const { ctx } = this;
        // 获取post 请求参数
        const url = ctx.request.body.url
        const baseUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/plant?'
        const postUrl = `${baseUrl}access_token=${TOKEN}&url=${url}&baike_num=3`
        const result = await ctx.curl(postUrl, {
            method: 'POST', // 设置请求方式 默认是GET
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded', // 默认是 form
        });
        ctx.body = result.data
    }
}

module.exports = AiController;
