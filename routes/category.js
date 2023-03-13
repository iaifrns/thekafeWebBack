
import express from "express";
import {getAllCategorys, getOneCategory, saveCategory, deleteCategory,updateCategory} from "../controllers/categoryController.js"

const categoryRoute = express.Router()

categoryRoute.get("/",getAllCategorys)
categoryRoute.get("/:id",getOneCategory)
categoryRoute.post("/",saveCategory)
categoryRoute.delete("/:id",deleteCategory)
categoryRoute.patch("/:id",updateCategory)

export {categoryRoute}