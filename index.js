'use strict'
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3030;

function createToken(args) {
  return jwt.sign(args, process.env.API_SECRET)
}

function verify(token) {
  return jwt.verify(token, process.env.API_SECRET, (err, decode) => decode !== undefined ? decode : err)
}

server.use(middlewares);
server.post('/auth', jsonServer.bodyParser, (req, res) => {
  const {authString, user} = req.body;
  let hash;
  if (user == 'jacob') hash = process.env.JACOB_AUTH;
  if (user == 'chris') hash = process.env.CHRIS_AUTH;

  bcrypt.compare(`${authString}:${process.env.API_SECRET}`, hash, (err,  isAuthorized) => {
    if (!isAuthorized) {
      const status = 401;
      const message = "Incorrect Auth String";
      res.status(status).jsonp({ status, message });
      return;
    }
    const accessToken = createToken(authString);
    res.jsonp(accessToken);
  })
});

server.use(router);
server.listen(PORT, () => {
  console.log(`JSON server is runnning on port :: ${PORT}`);
});

