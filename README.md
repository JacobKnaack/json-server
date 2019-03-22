# json-server
simple http server using json-server for mock data projects

## Getting Started
1) `git clone https://github.com/JacobKnaack/json-server.git` or fork repo
2) `npm install`
3) Create a file at the root of your project called `.env`
4) Add Some JSON data to your `db.json`
5) Create API credentials:
```bash
$ npm run auth:init
```
6) Add A User:
```bash
$ npm run create:user YOUR_USER_NAME YOUR_AUTH_STRING
```
> If you receive the following error from bcrypt: 
> `dyld: lazy symbol binding failed: Symbol not found:` 
> try running the following command from npm:
> ```bash
> $ npm rebuild bcrypt --build-from-source
> ```

7) Start your server with nodemon: 
```bash
$ npm run json:server
```
or run with node:
```bash
$ npm start
```

## Fetching a Web Token:
- `POST /auth`
- Rsequest body:
  ```js
  {
    user: 'string',
    authString: 'string',
  }
  ```
