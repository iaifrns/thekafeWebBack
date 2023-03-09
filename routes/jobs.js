import express from "express";

import {getAllJobs, getOneJob, saveJob, deleteJob,updateJob} from "../controllers/jobController.js"

const jobRoute = express.Router()

jobRoute.get("/",getAllJobs)
jobRoute.get("/:id",getOneJob)
jobRoute.post("/",saveJob)
jobRoute.delete("/:id",deleteJob)
jobRoute.patch("/:id",updateJob)

export {jobRoute}