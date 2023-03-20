import "dotenv/config";

require('dotenv').config()



const config ={
          DB_CONNECTION_STRING : process.env.MONGODB_URL
}

export default config;