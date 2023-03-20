import express from "express";
import "dotenv/config";
import cors from "cors";
import {connect} from "./utils/database.connection";

const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || "8050";

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({limit:"10mb"}));





app.get("/",(req,res,next)=>{
          res.send("<h1>Mental health management system</h1>");
          next();
})









app.listen(PORT, ()=>{
         console.log(`Server running on PORT ${PORT} 🚀🚀🚀`);
         connect();
})