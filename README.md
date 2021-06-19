# node-express-typescript-sample-app
Boiler plate code for TS based express node server app.

### Prerequisite
1. Install node js - `https://nodejs.org/en/download/package-manager/`
2. Install typescript - `npm install -g typescript`

### Steps to run code

1. Install node_modules in root directory
```
npm i
```
2. Open 2 terminals

  > In first terminal we build the dist folder under watch mode.
  ```
  npm run build
  ```
  > In second terminal we start the nodemon server.
  ```
  npm run start
  ```
  
### Output
Open browser with `localhost:3000`, should be able to see a text `INDEX`
#### Or
Open browser with `http://localhost:3000/api/create-sample`, should be able to see a response object
