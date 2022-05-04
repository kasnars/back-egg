// eslint-disable-next-line strict
const Service = require('egg').Service;

class AiService extends Service {
    async getAllFlowerData() {
        const { app } = this;
        const works = await app.mysql.select('flowerData');
        // console.log(works, 'work');
        return works;
    }
    async findByName(name){
        const { app } = this
        const res = await app.mysql.get('flowerData',{
            flowerTag:name
        })
        return res
    }
    async findById(id){
        const { app } = this
        const res = await app.mysql.get('flowerData', {
            id,
        })
        return res
    }
    async createFlowerDataByUser(data){
        const { app } = this
        const { name,content,img } = data
        console.log(data);
        const res = await app.mysql.insert('flowerData',{
            flowerTag:name,
            flowerDescript:content,
            flowerImg:img,
            dataSource:0,
            createTime: this.app.mysql.literals.now,
            // 0- user 1-sys
        })
        return res
    }

    async createFlowerDataBySys(data) {
        const { app } = this
        const { name, content, img } = data
        console.log(data);
        const res = await app.mysql.insert('flowerData', {
            flowerTag: name,
            flowerDescript: content,
            flowerImg: img,
            dataSource: 1,
            createTime: this.app.mysql.literals.now,
        })
        return res
    }


    async mpUserList(){
        const { app } = this;
        const works = await app.mysql.select('mpuser');
        console.log(works, 'work');
        return works;
    }

    async addLike(data){
        const {app} = this
        const {userId, flowerId, flowerTitle, flowerContent} = data
        const res = await app.mysql.insert('flowerLike',{
            userId,
            flowerId,
            flowerTitle,
            flowerContent,
        })
        return res
    }

    async getLike(userId){
        const { app } = this
        const res = await this.app.mysql.select('flowerLike', { // 搜索 post 表
            where: { userId }, // WHERE 条件
            // columns: ['author', 'title'], // 要查询的表字段
            // orders: [['created_at', 'desc'], ['id', 'desc']], // 排序方式
        });
        return res
    }

    async addHistory(data){
        const { app } = this
        const {userId, flowerId, flowerName, flowerContent } = data
        const res = await this.app.mysql.insert('flowerHistory',{
            userId,
            flowerId,
            flowerName,
            flowerContent,
            time: this.app.mysql.literals.now,
        })
        return res
    }

    async getHistory(userId){
        const { app } = this
        const res = await this.app.mysql.select('flowerHistory',{
            where:{userId}
        })
        return res
    }
}

module.exports = AiService;
