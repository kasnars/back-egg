// eslint-disable-next-line strict
const Service = require('egg').Service;

class DemoService extends Service {
  async getworks() {
    const { app } = this;
    const works = await app.mysql.select('works');
    // console.log(works, 'work');
    return works;
  }
}

module.exports = DemoService;
