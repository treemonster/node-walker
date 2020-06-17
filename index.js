const server=require('cwg-pre-loader/simple-server')

module.exports=(opt)=>{
  const {init_dir, port, safedir, shell, upload, disabledelete}=opt
  const AESKey=(Math.random().toString(36)+Date.now().toString(36)).match(/.{16}$/)[0]
  const AESKeyIV=(Math.random().toString(36)+Date.now().toString(36)).match(/.{16}$/)[0]
  const shutdown=server({
    dir: __dirname+'/code',
    listen: port,
    globals: {
      INIT_DIR: init_dir,
      SAFE_DIR: safedir,
      SHELL: !safedir && shell,
      UPLOAD: upload,
      DELETE: !disabledelete,
      AESKey,
      AESKeyIV,
      Buffer,
    },
    index: 'index.chtml',
    ext: /\.(html|cjs|chtml)$/,
  })
  return shutdown
}
