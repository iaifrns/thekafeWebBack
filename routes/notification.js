import express from "express";
import {getAllNotifications, getOneNotification, saveNotification, deleteNotification,updateNotification} from "../controllers/NotificationController.js"

const notificationRoute = express.Router()

notificationRoute.get("/",getAllNotifications)
notificationRoute.get("/:id",getOneNotification)
notificationRoute.post("/",saveNotification)
notificationRoute.delete("/:id",deleteNotification)
notificationRoute.patch("/:id",updateNotification)

export {notificationRoute}