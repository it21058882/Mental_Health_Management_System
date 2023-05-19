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



////////////////////////////////////////////////////////////////////////////////////

const doctorRouter = require("./api/routers/doctor.js");
app.use("/doctor",doctorRouter);

const questionTitleRouter = require("./api/routers/quiz.js");
app.use("/quiz",questionTitleRouter);

const ArticleRouter = require("./api/controllers/articlescontroller.js");
app.use("/article", ArticleRouter);

const clientRouter = require("./api/routers/client.js");
app.use("/client",clientRouter);

const userRouter = require("./api/routers/user");
app.use("/user",userRouter);

const channelRouter = require("./api/routers/channel.js");
app.use("/channel",channelRouter);

