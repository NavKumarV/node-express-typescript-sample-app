# node-express-typescript-sample-app
Boiler plate code for TS based express node server app.

### Prerequisite
1. Install node js - 
```
https://nodejs.org/en/download/package-manager/
```
#### OR
```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install nodejs
node --version
```
2. Install typescript - `npm install -g typescript`

### Steps to run code

1. Install node_modules in root directory
```
npm i
```
2. Run commands

  > If u need to run in dev mode, so that the changes you do in code gets reflected automatically.
  ```
  npm run dev
  ```
  > If you need to run a static single instance 
  ```
  npm run start
  ```
  
### Output
Open browser with `localhost:3000`, should be able to see a text `INDEX`
#### Or
Open browser with `http://localhost:3000/api/create-sample`, should be able to see a response object
