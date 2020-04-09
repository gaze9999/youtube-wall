module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/youtube-wall/'
  : '/',
  outputDir: 'dist', // 產出的資料夾名稱
  assetsDir: 'dist', // 靜態檔的資料夾名稱
  filenameHashing: true, // bundle出來的檔案是否要有hash值
  transpileDependencies: [
    'vuetify'
  ]
}