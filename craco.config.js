const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@root": path.resolve(__dirname, "src/"),
      "@css": path.resolve(__dirname, "src/css/")
    }
  }
}