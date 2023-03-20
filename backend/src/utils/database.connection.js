import mongoose, { connection } from "mongoose";
import config from "../configs/index";


let databese;

const connect = async () =>{
          const MONGODB_URL = config.DB_CONNECTION_STRING;
         

          if(databese) return;

          mongoose.connect(MONGODB_URL)
          .then ((connection)=>{
                    databese = connection;
                    console.log('Database Synced ✅✅✅');
          })
          .catch((err) => {
                    console.log("Database " + err.message);
          })


}

export {connect};