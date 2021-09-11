// eslint-disable-next-line strict
const Service = require('egg').Service;

class DemoService extends Service {
  async getworks() {
    const { app } = this;
    const works = app.mysql.select('works');
    return works;
  }
}

module.exports = DemoService;
