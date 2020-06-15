const server=require('cwg-pre-loader/simple-server')

module.exports=(opt)=>{
  const {init_dir, port, safedir, shell, upload}=opt
  const shutdown=server({
    dir: __dirname+'/code',
    listen: port,
    globals: {
      INIT_DIR: init_dir,
      SAFE_DIR: safedir,
      SHELL: shell,
      UPLOAD: upload,
    },
  })
  return shutdown
}
