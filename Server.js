const express = require("express");
const app = express();
const port = 3000;
const router = require('./router')
const session = require('express-session');


app.use(express.json());

app.use(
    session({
      secret: 'salkfjasljfiefjasdurowifiennvhyteidssd',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
      },
    })
  );

app.use('/',router)

app.listen(port,()=>{
  console.log(`My Server Running At http://localhost:${port}`);
});