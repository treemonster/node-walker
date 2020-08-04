const server=require('cwg-pre-loader/simple-server')
module.exports=(opt)=>{
  const {port, override, ...defaultOpts}=opt
  const AESKey=(Math.random().toString(36)+Date.now().toString(36)).match(/.{16}$/)[0]
  const AESKeyIV=(Math.random().toString(36)+Date.now().toString(36)).match(/.{16}$/)[0]
  const genGlobals=({init_dir, safedir, shell, upload, screenshot, disabledelete, path})=>({
    INIT_DIR: init_dir,
    SAFE_DIR: safedir,
    SHELL: !safedir && shell,
    UPLOAD: upload,
    DELETE: !disabledelete,
    SCREENSHOT: screenshot && shell,
    AESKey,
    AESKeyIV,
    Buffer,
    PATH: path,
  })
  const shutdown=server({
    dir: __dirname+'/code',
    listen: port,
    globals: async req=>genGlobals(Object.assign({}, defaultOpts, override? await override(req): {})),
    index: 'index.chtml',
    ext: /\.(html|cjs|chtml)$/,
  })
  return shutdown
}
