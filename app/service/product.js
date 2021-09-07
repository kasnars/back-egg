/* eslint-disable strict */
const Service = require('egg').Service;

class ProductService extends Service {
  async index() {
    return {
      id: 100,
      name: 'test',
    };
  }
}

module.exports = ProductService;
