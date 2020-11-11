import * as express from "express";
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const BASE_URL = "localhost:8080";

module.exports = () => {
  // Necesito esto?
  app.use(
    "/api/login",
    createProxyMiddleware({
      target: BASE_URL,
      changeOrigin: true,
    })
  );

  app.get("/api/login", (req, res) => {
    res.json({ token: "sso_token" });
  });

  app.listen(8080);
};
