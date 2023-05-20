import React, { useState } from "react";
import axios from "axios";

function Login() {

    const [getEmail, setEmail] = useState("");
    const [getPass, setPass] = useState("");

    function loginSubmited(e) {
        e.preventDefault();

        const loginInfo = {
            email: getEmail,
            password: getPass
        }

        axios.post("http://localhost:8050/user/login", loginInfo).then((res) => {

            const token = res.data.acsessToken;
            const uID = res.data.userID;
            const type = res.data.userType;
            console.log(type)
            if (token) {
                //console.log(res.data.acsessToken)
                localStorage.setItem('acctoken', token)
                localStorage.setItem('userID', uID)

                if(type === "admin"){
                   
                window.location.href = '/admin';
                }else{
                   
                window.location.href = '/home';
                }
                


            } else {
                console.log("na")
            }
        }).catch((err) => {
            console.log(err)
        })



    }

    return (
        <div className="w-8/12 mx-auto my-32" >
            {/* <form onSubmit={loginSubmited}>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username"required onChange={(e)=>{setEmail(e.target.value)}}/>
            <br/>
            <br/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required onChange={(e)=>{setPass(e.target.value)}}/>
            <br/>
            <br/>
            <button type="submit">Login</button>
            </form> */}


            <div class="bg-white font-family-karla py-20">

                <div class="w-full flex flex-wrap">


                    <div class="w-full md:w-1/2 flex flex-col">



                        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                            <p class="text-center text-2xl underline">Welcome to Happy Life</p>
                            <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();" onSubmit={loginSubmited}>
                                <div class="flex flex-col pt-4">
                                    <label for="email" class="text-lg">Email</label>
                                    <input type="email" id="email" placeholder="your@email.com" onChange={(e) => { setEmail(e.target.value) }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <div class="flex flex-col pt-4">
                                    <label for="password" class="text-lg">Password</label>
                                    <input type="password" id="password" placeholder="Password" required onChange={(e) => { setPass(e.target.value) }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>

                                <input type="submit" value="Log In" class="bg-green-700 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                            </form>
                            <div class="text-center pt-12 pb-12">
                                <p>Don't have an account? <a href="/registerUser" class="underline font-semibold">Register here.</a></p>
                            </div>

                        </div>

                    </div>


                    <div class="w-1/2 shadow-2xl">
                        <img class="object-cover w-full h-fill hidden md:block" src="https://www.healtheuropa.com/wp-content/uploads/2019/10/iStock-Ridofranz-696x392.jpg" />
                    </div>
                </div>

            </div>






        </div>
    )
}
export default Login;