const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const port = 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*":"/$1",
  })
);
server.use(router);
server.listen(port, () => {
  console.log("Server stated on " + port);
});
