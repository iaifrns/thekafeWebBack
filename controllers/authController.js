
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise"
import { credentials } from '../constants.js'
import { db } from "./index.js"




export const register = async (req, res) => {
  //CHECK EXISTING USER
  let columns = []
  let values = []

  if (req.body.length > 0) {

    const checkColumn = ["userName", "userEmail"]
    const checkValues = [req.body[0].userName, req.body[0].userEmail]
    const { ok, data, message } = await db.find("users", checkColumn, checkValues)
    console.log(message)
    if (ok) {
      if (data.length > 0) {
        return res.status(400).json({ message: 'Sorry username or email already exist in our system' })
      }

    } else {
      return res.status(500).json({ message: 'Sorry an error occured try again' })
    }
    columns = Object.keys(req.body[0])
    values = (() => {
      let arr = []; req.body.forEach(element => {
        arr.push(Object.values(element))
      });
      return arr;
    })()
  }
  try {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(req.body[0].userPassword, salt)
    req.body[0].userPassword = hash
    const { ok, data, message } = await db.insert("users", columns, values)
    if (ok)
      res.status(201).json({ data: req.body, message })
    else
      res.status(500).json({ data, message })
  } catch (err) {
    if (err.hasOwnProperty('sqlMessage'))
      res.status(400).json({ data: [], message: err.sqlMessage })
  }
}

export const login = async (req, res) => {
  //CHECK USER
  const fields =
    [
      "userEmail"]
  const values = [req.body.userEmail]
  const { ok, data, message } = await db.find("users", fields, values)
  if (!ok)
    return res.status(404).json("Wrong username or password!");
  const isPasswordValid = await bcrypt.compare(req.body.userPassword, data[0].userPassword)
  if (!isPasswordValid)
    return res.status(400).json("Wrong username or password!");

  const token = jwt.sign({ id: data[0].id }, "jwtkey");
  const { userPassword, ...other } = data[0];
  if (ok)
    if (data.length > 0)
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);

    else
      return res.status(400).json("Wrong username or password!");
}


export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
  }).status(200).json("User has been logged out.")
};