import express from 'express';
import cors from 'cors';
import { ROUTES } from './routes/index.js';
import { createDatabase, useDB } from './db_connection.js';
import { createAllTables } from './helpers/models.js';
import cookieSession from 'cookie-session';
import passport from 'passport';
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.js";
import './passport.js'



const app = express()
const db_name = "job_portal"

dotenv.config()
const {ok, message} = await createDatabase(db_name)

if (ok) {
    console.log(message)
    const use_db = await useDB(db_name)
    if (use_db.ok){
        console.log(use_db.message)
        const create_tables = await createAllTables()
        if (create_tables.ok){
            console.log(create_tables.message)
        }else{
            console.log(create_tables.message)
        }
    }else{
        console.log(use_db.message)
    }
}else{
    console.log(message)
}

//implemeing cookieSession to keep login sessions
app.use(cookieSession({name:'session', keys:['daniel'], maxAge: 24*60*60*100  }))

app.use(passport.initialize())
app.use(passport.session())
app.use(function(request, response, next) {
    if (request.session && !request.session.regenerate) {
        request.session.regenerate = (cb) => {
            cb()
        }
    }
    if (request.session && !request.session.save) {
        request.session.save = (cb) => {
            cb()
        }
    }
    next()
})

app.use(cors({
    origin:'http://localhost:3000',
    methods:"GET,POST,PUT,DELETE,PATCH",
    credentials: true
}))



// Do this to be able to upload high quality images and support large json body
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true,limit: '50mb'}));

app.get('/',(req,res)=>{
    res.send("<h1>Hello world !!</h1>")
})

app.use("/users",ROUTES.users)
app.use("/jobs",ROUTES.job)
app.use("/category",ROUTES.category)
app.use("/company",ROUTES.company)
app.use("/employee",ROUTES.employee)
app.use("/notification",ROUTES.notification)
app.use("/review",ROUTES.review)
app.use("/role",ROUTES.role)
app.use("/auth", authRoutes);
const port = process.env.port || 5000;


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})