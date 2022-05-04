/* eslint-disable strict */
const Controller = require('egg').Controller;
const TOKEN = "'24.f3749839db72ba4658f6dc2a9aa84599.2592000.1654197002.282335-25346644'"

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
        const { result:res } = result.data
        console.log(res[0]);
        await ctx.service.ai.createFlowerDataBySys({
            name:res[0].name,
            content: res[0].baike_info.description,
            img: res[0].baike_info.image_url,
        })
        ctx.body = {
            data: res
        }
    }

    async getAllFlower(){
        const { ctx } = this
        const res = await ctx.service.ai.getAllFlowerData()
        ctx.body = {
            status: 200,
            data: res,
        };
    }

    async getFlowerByName(){
        const { ctx } = this
        const { name } = ctx.request.body
        const res = await ctx.service.ai.findByName(name)
        ctx.body = {
            status: 200,
            data: res,
        };
    }

    async getFlowerById() {
        const { ctx } = this
        const { id } = ctx.request.body
        const res = await ctx.service.ai.findById(id)
        ctx.body = {
            status: 200,
            data: res,
        };
    }

    async userCreateData(){
        const { ctx } = this
        console.log(ctx.request.body,'1');
        const { name } = ctx.request.body
        console.log(name,'name');
        const res = await ctx.service.ai.createFlowerDataByUser(ctx.request.body)
        if (res.affectedRows === 1) {
            ctx.body = {
                status: 200,
                msg: 'success',
            }; 
        }
    }

    async mpUserList(){
        const { ctx } = this
        console.log(1);
        const res = await ctx.service.ai.mpUserList()
        ctx.body = {
            status: 200,
            data: res,
        };
    }

    async userCreateLike(){
        const { ctx } = this
        const res = await ctx.service.ai.addLike(ctx.request.body)
        if (res.affectedRows === 1) {
            ctx.body = {
                status: 200,
                msg: 'success',
            };
        }
    }

    async getUserLike(){
        const {ctx} = this
        const { userId } = ctx.request.body
        const res = await ctx.service.ai.getLike(userId)
        ctx.body = {
            status:200,
            data:res,
        }
    }

    async addHistory(){
        const { ctx } = this
        const res = await ctx.service.ai.addHistory(ctx.request.body)
        if (res.affectedRows === 1) {
            ctx.body = {
                status: 200,
                msg: 'success',
            };
        } else {
            ctx.body = {
                status: 400,
                msg: '历史记录写入失败',
            };
        }
    }

    async getUserHistory(){
        const {ctx} = this
        const {userId} = ctx.request.body
        const res = await ctx.service.ai.getHistory(userId)
        ctx.body = {
            status: 200,
            data: res,
        }
    }
}

module.exports = AiController;
