'use strict'
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3030;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON server is runnning on port :: ${PORT}`);
});

