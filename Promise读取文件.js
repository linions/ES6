// 引入 fs 模块
const fs = require('fs');
 
// 调用方法读取文件
// fs.readFile('./为学.md', (err, data)=>{
//     if (err) throw err;
//     console.log(data.toString());
// });

// 采用Promise 对象读取文件
const p = new Promise(function (resolve, reject) {
    fs.readFile('./为学.md', (err, data) => {
        //   判断读取如果失败
        if (err) reject(err);
        resolve(data);
    });
});

p.then(function (value) {
    console.log(value.toString());
},
    function (reason) {
        console.log("读取失败!");
    });