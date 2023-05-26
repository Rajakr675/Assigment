const express=require("express");
const Router=express.Router();
const controller=require("./controller");


// 1. first router for signup.
Router.post("/signup",controller.signup);

// 2 second router for login.
Router.get("/login",controller.Login_user);     // it's routers proper working.

// 3. third router for logout.
Router.get("/logout",controller.logout_user);

//4.four router for home page.
Router.get("/home",controller.home)  


module.exports = Router