import express from 'express';
import { getAllUsers,getOneUser ,saveUser,updateUser,deleteUser } from '../controllers/usersController.js';

const userRoute = express.Router()

userRoute.get("/",getAllUsers)
userRoute.get("/:id",getOneUser)
userRoute.post("/",saveUser)
userRoute.patch("/:id",updateUser)
userRoute.delete("/:id",deleteUser)

export { userRoute }