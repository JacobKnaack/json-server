require('dotenv').config();
const bcrypt = require('bcrypt');
const authString = process.argv[2];

bcrypt.hash(`${authString}:${process.env.API_SECRET}`, 10, function(err, hash) {
  console.log(hash);
});
