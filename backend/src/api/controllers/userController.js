import "dotenv/config";

 const user = require("../model/user");
 const bcrypt = require('bcrypt');
 const saltRounds = 10;
 var jwt = require('jsonwebtoken');

 const Register = async (req, res, next) => {
   // console.log(req.body);

    try{
        const registedUser = await user.findOne({ email: req.body.email });
        if(registedUser){
            res.send("You are already registerd");
        }else{
            
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                if(req.body.userType === "admin"){
                    res.send(req.body.userType)
                    //admin reg part here
                }else{
                    

                    const newUser = new user({
                        firstName: req.body.firstName,
                        lastname : req.body.lastname,
                        userName : req.body.userName,
                        userType :"n/a",
                        email : req.body.email,
                        contactNo : req.body.contactNo,
                        nameOfClosest : req.body.nameOfClosest,
                        closestEmail : req.body.closestEmail,
                        closestContactNo : req.body.closestContactNo,
                        password : hash
                    });
                   

                    newUser.save().then(()=>{
                        
                        const email = req.body.email;
                        const password = req.body.password;
                    

                            const userFound = user.findOne({email:email})
                    
                            if(userFound){
                               
                                
                                bcrypt.compare(password, hash, function(err, result) {
                                    // result == true
                                    if(result){
                                        //login sucsess
                                        
                    
                                        const userID = userFound.id;
                                        const userName = userFound.userName;
                                        const userType = userFound.userType;
                                    
                                        const supp = { id: userID, userName : userName, userType : userType};
                                        
                                        const acsessToken = jwt.sign(supp, process.env.FOR_TOKEN, { expiresIn: '1h' });
                                          
                                        const data ={
                                            acsessToken
                                        }
                    
                                        res.send(data);
                                    }else{
                                        res.send("Login again");
                                    }
                                    
                                });
                    
                    
                    
                    
                            }else{
                              //  res.send("Login again");
                            }
                    
                    
                    
                    



                    }).catch((err)=>{
                                res.send(err);
                    })
                }

                
            });
            
        }
    }catch(err){

    }
   
  }


  const Login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        const userFound = await user.findOne({email:email})

        if(userFound){
           

            bcrypt.compare(password, userFound.password, function(err, result) {
                // result == true
                if(result){
                    //login sucsess
                    

                    const userID = userFound.id;
                    const userName = userFound.userName;
                    const userType = userFound.userType;
                
                    const supp = { id: userID, userName : userName, userType : userType};
                    
                    const acsessToken = jwt.sign(supp, process.env.FOR_TOKEN, { expiresIn: '1h' });
                      
                    const data ={
                        acsessToken,
                        userID,
                        userType
                    }

                    res.send(data);
                }else{
                    res.send("Somthing wrong with your password");
                }
                
            });




        }else{
            res.send("You are not Registerd");
        }




    }catch(err){

    }
    

 }
  


 const UpdateUser = async (req, res, next) => {
    const userID = req.userDetails.id;
  const updata= {
        firstName: req.body.firstName,
        lastname : req.body.lastname,
        userName : req.body.userName,
        contactNo : req.body.contactNo,
        nameOfClosest : req.body.nameOfClosest,
        closestEmail : req.body.closestEmail,
        closestContactNo : req.body.closestContactNo,
        
    };

    try{
        const result = await user.updateOne({_id:userID},{$set : updata})
        res.send(result +   "   ----------    Updated")
        console.log(result)
    }catch(err){
            res.send(err)
    }


    

 }


 const ProfileView = async (req, res, next) => {

    const userID = req.params.userId;
    console.log(userID)

          try{
                    const userd = await user.find({"_id": userID});
                    console.log(userd)
                    res.send(userd);
          } catch(err){
            console.log(err);
          }

 }

 const ProfileDelete = async (req, res, next) => {

    const userID = req.params.userId;

    try{
        const data = await user.deleteOne({"_id":userID})
        if(data){
            res.send("user deleted");
        }
      
       }catch(err){
        res.send(err)
  }
    
 }
  



  exports.Register = Register;
  exports.Login = Login;
  exports.UpdateUser = UpdateUser;
  exports.ProfileView = ProfileView;
  exports.ProfileDelete = ProfileDelete;