const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports = function (req,res,next){
    
    if(req.headers.authorization && req.headers.authorization.startsWith('bearer')){

        const token = req.headers.authorization.split(' ')[1];
       
        if(token == null){
            res.sendStatus(401);
        }else{
            // jwt.verify(token,process.env.FOR_TOKEN, function(err, decoded) {
                
            //     if(err){
            //         res.sendStatus(403);  
            //     }else{
            //         req.userDetails = decoded;
            //         next()
            //     }
            //   });

               try {
                    const decoded = jwt.verify(token, process.env.FOR_TOKEN);
                    req.userDetails = decoded;
                } catch (err) {
                    return res.status(401).send("Invalid Token");
                }
                return next();
        }
    }
}

