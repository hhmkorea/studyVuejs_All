module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // API 서버의 주소
      },
    },
  },
};