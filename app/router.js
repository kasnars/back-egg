'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail2/:id', controller.product.detail2);
  router.post('/product/create', controller.product.create);

  router.get('/read', controller.read.addIndex);

  router.get('/juheapi/weather', controller.juheapi.weather);

  router.get('/getworks', controller.getworks.getworks);

  router.get('/article', controller.article.getarticle);
  router.get('/article/:id', controller.article.getById);

  router.get('/timelocus', controller.timelocus.getAll);

  router.post('/user/new', controller.user.newUser);
  router.get('/user/getall', controller.user.getAll);
  router.post('/login', controller.user.login);
  router.get('/user/:name', controller.user.getUserInfo);
};
