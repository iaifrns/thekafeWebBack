import express from "express";
import {getAllRoles, getOneRole, saveRole, deleteRole,updateRole} from "../controllers/RoleController.js"

const roleRoute = express.Router()

roleRoute.get("/",getAllRoles)
roleRoute.get("/:id",getOneRole)
roleRoute.post("/",saveRole)
roleRoute.delete("/:id",deleteRole)
roleRoute.patch("/:id",updateRole)

export {roleRoute}