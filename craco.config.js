const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@root": path.resolve(__dirname, "src/"),
      "@css": path.resolve(__dirname, "src/css/"),
      "@fonts": path.resolve(__dirname, "src/fonts/"),
    }
  }
}