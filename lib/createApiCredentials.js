require('dotenv').config();
const fs = require('fs');

function generateRandomString() {
  return Math.random()
    .toString(36)
    .substring(2, 15) + Math.random()
      .toString(36)
      .substring(2, 15);
}

function generateKeys() {
  const result = {
    "message": null,
    "API_KEY": null,
    "API_SECRET": null,
  }
  if (!process.env["API_KEY"]) {
    const newKey = generateRandomString()
    result.API_KEY = newKey;
    fs.appendFile('.env', `API_KEY=${newKey}`, function (err) {
      if (err) throw err;
    });
  } else {
    result.API_KEY = process.env["API_KEY"];
  }

  if (!process.env["API_SECRET"]) {
    const newSecret = generateRandomString();
    result.API_SECRET = newSecret;
    fs.appendFile('.env', `API_SECRET=${newSecret}`, function (err) {
      if (err) throw err;
    });
  } else {
    result.API_SECRET = process.env["API_SECRET"];
  }

  console.log(result);
}

generateKeys();

module.exports = {
  generateRandomString,
  generateKeys,
}
