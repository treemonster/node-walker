const server=require('cwg-pre-loader/simple-server')

module.exports=(init_dir, port)=>{
  const shutdown=server({
    dir: __dirname+'/code',
    listen: port,
    globals: {INIT_DIR: init_dir}
  })
  return shutdown
}
