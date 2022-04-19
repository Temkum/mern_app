# MERN Stack

Built a REST API with express (backend nodejs framework) and MongoDB for database management and use mangoose to connect and interact with MongoDB.

Add authentication to the api and create a login endpoint, register endpoint using a json web token to authenticate. Basically a CRUD app.

We'll use Redux and Redux tool kit.
Use postman as our HTTP client.
MongoDB for cloud database.

## Create a folder for backend files

- contains our modules, controllers and config files

- install dependencies for the project: `npm i express dotenv mongoose colors`
- install nodemon to reload our server automatically `npm i -D nodemon` it's going to watch our server.js file so we don't restart it manually.

- Modify package.json file: change the scripts - `"start": "node backend/server.js" & "server": "nodemon backend/server.js"`

- create a `.env` file in the root folder

## Routes

- use postman
- you can set the status on your routes and use json
- create a separate route folder for routes

- create a controller and add your functionalities or logic

## Middleware

These are functions which execute during the response and request cycle

- setup error handler
- in order to use the body, you need to modify the middleware
- use `express-async-handler` as alternative for error handling

## Data base

- download compass to manage db
- create a file and connect to mongoose

## DB Models

- create models

## Authentication with JWT

- use json web tokens
- create user model - add schema
- every goal should be associated with a specific user
- create user routes

- install bcryptjs for password encryption `npm install bcryptjs`
- and jwt `npm i jsonwebtoken`
- make methods async since we're working with mongoose

- register user
- login user
