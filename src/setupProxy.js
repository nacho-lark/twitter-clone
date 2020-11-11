module.exports = app => {
  app.get("/api/login", (req, res) => {
    res.json({ token: "sso_token" });
  });
};
