const PROXY_CONFIG = {
  "/api": {
    "target": "https://www.boredapi.com",
    "secure": true,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}

module.exports = PROXY_CONFIG
