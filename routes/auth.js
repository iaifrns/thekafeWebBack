import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import passport from "passport";

const authRoute = express.Router();

const CLIENT_URL = 'http://localhost:3000/'

authRoute.get("/login/failed",(req,res)=>{
    return res.status(401).json({ok: false,message: "Authentication failed !!!"})
})

authRoute.get("/login/success",(req,res)=>{
    if(req.user)
        return res.status(200).json({ok: true,message: "Authentication successful !!!",user: req.user})
})

authRoute.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err) return next(err)
    })
    res.redirect(CLIENT_URL+"login")
})

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.post("/logout", logout);

//google social media authentication
authRoute.get('/google',passport.authenticate('google', { scope: ['profile'] }));
authRoute.get('/google/callback', passport.authenticate('google', 
{ failureRedirect: '/login/failed' , successRedirect:CLIENT_URL}))

//github social media authentication
authRoute.get('/github',passport.authenticate('github', { scope: ['profile'] }));
authRoute.get('/github/callback', passport.authenticate('github', 
{ failureRedirect: '/login/failed' , successRedirect:CLIENT_URL}))

//facebook social media authentication
authRoute.get('/facebook',passport.authenticate('facebook', { scope: ['profile'] }));
authRoute.get('/facebook/callback', passport.authenticate('facebook', 
{ failureRedirect: '/login/failed' , successRedirect:CLIENT_URL}))


export default authRoute;