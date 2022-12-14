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
  router.get('/juheapi/news', controller.juheapi.getNews);
  router.get('/juheapi/getmusic', controller.juheapi.getmusic);
  router.get('/juheapi/geturl', controller.juheapi.getUrl);
  router.get('/juheapi/getlyric', controller.juheapi.getLyric);

  router.get('/getworks', controller.getworks.getworks);

  router.get('/article', controller.article.getarticle);
  router.get('/article/:id', controller.article.getById);
  router.put('/article/:id', controller.article.like);

  router.get('/timelocus', controller.timelocus.getAll);

  router.post('/user/new', controller.user.newUser);
  router.get('/user/getall', controller.user.getAll);
  router.post('/login', controller.user.login);
  router.get('/user/:name', controller.user.getUserInfo);
  router.put('/user/update', controller.user.updataUser);

  // router.post('/comment', controller.conment.newComment);
  router.get('/comment', controller.conment.getAll);
  router.post('/comment', controller.conment.create);
  router.put('/comment/:id', controller.conment.like);

  router.post('/upload', controller.user.loadimg);

  router.get('/me', controller.home.download);

  router.post('/ai',controller.ai.aiFlowerByBaidu);
  router.post('/ai/getAllFlower',controller.ai.getAllFlower)
  router.post('/ai/getFlowerByName',controller.ai.getFlowerByName)
  router.post('/ai/getFlowerById', controller.ai.getFlowerById)
  router.post('/ai/create', controller.ai.userCreateData)
  router.post('/ai/mpuser',controller.ai.mpUserList)
  router.post('/ai/like',controller.ai.userCreateLike)
  router.post('/ai/likeList',controller.ai.getUserLike)
  router.post('/ai/addHistory',controller.ai.addHistory)
  router.post('/ai/getHistory',controller.ai.getUserHistory)
};
