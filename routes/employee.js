import express from "express";
import {getAllEmployees, getOneEmployee, saveEmployee, deleteEmployee,updateEmployee} from "../controllers/EmployeeController.js"

const employeeRoute = express.Router()

employeeRoute.get("/",getAllEmployees)
employeeRoute.get("/:id",getOneEmployee)
employeeRoute.post("/",saveEmployee)
employeeRoute.delete("/:id",deleteEmployee)
employeeRoute.patch("/:id",updateEmployee)

export {employeeRoute}