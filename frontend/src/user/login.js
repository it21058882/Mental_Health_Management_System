import React, { useState } from "react";
import axios from "axios";

function Login(){

    const [getEmail,setEmail] = useState("");
    const [getPass,setPass] = useState("");

    function loginSubmited(e){
        e.preventDefault();

        const loginInfo ={
            email :getEmail ,
            password : getPass
        }

        axios.post("http://localhost:8050/user/login",loginInfo).then((res)=>{
            
            const token =res.data.acsessToken;
            if(token){
                console.log(res.data.acsessToken)
                localStorage.setItem('acctoken', token)
                alert(res.data.acsessToken)
                window.location.href = '/home';


            }else{
                console.log("na")
            }
        }).catch((err)=>{
            console.log(err)
  })

       
        
    }

    return(
        <div>
            <form onSubmit={loginSubmited}>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username"required onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <br/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required onChange={(e)=>{setPass(e.target.value)}}/>
            <br/>
            <br/>
            <button type="submit">Login</button>
  {}

            </form>
        </div>
    )
}
export default Login;