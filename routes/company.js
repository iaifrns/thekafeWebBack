import express from "express";
import {getAllCompanys, getOneCompany, saveCompany, deleteCompany,updateCompany} from "../controllers/CompanyController.js"

const companyRoute = express.Router()

companyRoute.get("/",getAllCompanys)
companyRoute.get("/:id",getOneCompany)
companyRoute.post("/",saveCompany)
companyRoute.delete("/:id",deleteCompany)
companyRoute.patch("/:id",updateCompany)

export {companyRoute}