import express from "express";
import {getAllReviews, getOneReview, saveReview, deleteReview,updateReview} from "../controllers/ReviewController.js"

const reviewRoute = express.Router()

reviewRoute.get("/",getAllReviews)
reviewRoute.get("/:id",getOneReview)
reviewRoute.post("/",saveReview)
reviewRoute.delete("/:id",deleteReview)
reviewRoute.patch("/:id",updateReview)

export {reviewRoute}