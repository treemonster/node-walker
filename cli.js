#!/usr/bin/env node
const walk=require('.')
walk({
  init_dir: __dirname,
  port: 9090,
  // safedir: '', // 不为空时指定安全目录，设置以后，仅能读写安全目录下的文件。同时前端不可见安全目录的真实路径
  // shell: 0, // 设为1时允许远程命令，如果设置了安全目录，那么这一项会被忽略，即shell不可用
  // upload: 0, // 设为1时允许上传文件，存在重名文件时尝试往文件名之后家加数字
  // disabledelete: 0, // 设为1时禁止删除文件
  shell: 1,
  upload: 1,
  override: async req=>new Promise(r=>{
  	console.log(req.url, req.headers)
    setTimeout(_=>r({
      disabledelete: 1,
    }), 16)
  }),
})
console.log("server ready on http://127.0.0.1:9090/")
