module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qrcode-panel/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "vue-template-loader",
          exclude: /index.html/
        }
      ]
    }
  }
}