#!/usr/bin/env node
const walk=require('.')
walk({
  init_dir: __dirname,
  port: 9090,
  // safedir: '',
  // shell: 0,
  // upload: 0,
  shell: 1,
  upload: 1,
})
console.log("server ready on http://127.0.0.1:9090/")
