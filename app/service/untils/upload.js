// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const sendToWormhole = require('stream-wormhole');

// const uploadimg = async () => {
//   // const form = new multiparty.Form();
//   const { ctx } = this;
//   // egg getFileStream 方法自动创建文件可读流
//   const stream = await ctx.getFileStream();
//   // 创建文件写入路径
//   const write = () => new Promise((resolve, reject) => {
//     // 获取文件名
//     const filename = stream.filename;
//     // 存储地址
//     const target = path.join('./app/public', `img/${filename}`);
//     // 创建可写流
//     const fileStrem = fs.createWriteStream(target);
//     // 建立管道
//     stream.pipe(fileStrem);
//     // 监听错误
//     let errFlag = false;
//     fileStrem.on('error', err => {
//       errFlag = true;
//       sendToWormhole(stream);
//       fileStrem.destroy();
//       reject(new Respone(500, err));
//     });
//     // 上传完成回写图片地址
//     fileStrem.on('finish', () => {
//       if (errFlag) return;
//       resolve(new Respone(200, '上传成功', { url: 'http://' + ctx.host + `/public/img/${filename}` }));
//     });
//   });
//   let result;
//   try {
//     result = await write();
//   } catch (e) {
//     console.log(e);
//   }
//   ctx.body = result;
// };

// module.exports = uploadimg;
