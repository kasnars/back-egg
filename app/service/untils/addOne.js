'use strict';
// str, str, str
const Service = require('egg').Service;

class UntilService extends Service {

  async addOne(table, rowData, id) {
    const { app } = Service.prototype;
    const beforeData = await app.mysql.get(table, { id });
    if (!beforeData) { return false; }
    const row = {
      [rowData]: beforeData[rowData] + 1,
    };
    const option = {
      where: {
        id,
      },
    };
    const res = await app.mysql.update(table, row, option);
    return res.affectedRows === 1;
  }
}


module.exports = UntilService;
