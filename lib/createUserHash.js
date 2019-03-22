require('dotenv').config();
const bcrypt = require('bcrypt');
const fs = require('fs');

const authUser = process.argv[2];
const authString = process.argv[3];

function createUserHash(string) {
  bcrypt.hash(`${string}:${process.env.API_SECRET}`, 10, function (err, hash) {
    if (err) throw err;
    fs.appendFile('.env', `\n${authUser.toUpperCase()}_AUTH=${hash}`, function (err) {
      if (err) throw err;
      console.log('User Added');
    });
  });
}

if (authString) {
  createUserHash(authString);
}

module.exports = createUserHash;
