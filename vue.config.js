module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        ws: true,
        changeOrigin: true
      },
      "/mqtt": {
        target: "http://localhost:9000",
        ws: false,
        changeOrigin: true
      }
    }
  }
};
