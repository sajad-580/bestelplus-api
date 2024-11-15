const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS for all routes
server.use(middlewares);
server.use(router);

const PORT = 80;
const HOST = "0.0.0.0";

server.listen(() => {
  console.log(`JSON Server is running on http://${HOST}:${PORT}`);
});
