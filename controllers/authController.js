
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise"
import { credentials }  from '../constants.js'
import {db} from "./index.js"


const dbConnect = await mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
    database: credentials.database
});

await dbConnect.connect()

export const register = async (req, res)=>{
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE userEmail = ? OR userName = ?";
  
    dbConnect.query(q, [req.body.userEmail, req.body.userName], async (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");
  
     // Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const columns = ["userName", "userEmail", "userPassword", "usercountry" ];
      const values = [req.body.userName, req.body.userEmail, hash, req.body.usercountry];
    
    try{
        const { ok,data,message } = await db.insert("users",columns,values)
        if(ok)
            res.status(201).json({data:req.body,message})
        else
            res.status(500).json({data,message})
        }catch(err){
            if(err.hasOwnProperty('sqlMessage'))
                res.status(400).json({data: [],message: err.sqlMessage})
        }
  
  });
}

  export const login  =  async (req, res)=>{
    //CHECK USER
  
    const q = `SELECT * FROM users WHERE userName = ?`;
  
       await   dbConnect.query(q, [req.body.userName], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      //Check password
      const isPasswordCorrect = req.body.userPassword
        
  
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong username or password!");
  
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { userPassword, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  };
  export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };