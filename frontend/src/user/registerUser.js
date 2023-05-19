
import React, { useState } from "react";
import axios from "axios";

function RegisterUser(){


    const [firstName,setfirstName] = useState("");
    const [lastname,setlastname] = useState("");
    const [userName,setuserName] = useState("");
    const [email,setemail] = useState("");
    const [contactNo,setcontactNo] = useState("");
    const [nameOfClosest,setnameOfClosest] = useState("");
    const [closestEmail,setclosestEmail] = useState("");
    const [closestContactNo,setclosestContactNo] = useState("");
    
    const [getpassword,setpassword] = useState("");
    const [getrepassword,setrepassword] = useState("");

    
    

    function ReistesSubmited(e){
        e.preventDefault();

        if(getpassword ==getrepassword ){
            const regdata ={
                firstName,
                lastname,
                userName,
                email,
                contactNo,
                nameOfClosest,
                closestEmail,
                closestContactNo,
                password : getrepassword
                
            }

            axios.post("http://localhost:8050/user/register",regdata).then((res)=>{
            
            const token =res.data.acsessToken;
            if(token){
                console.log(res.data.acsessToken)
                localStorage.setItem('acctoken', token)
                alert(res.data.acsessToken)
                window.location.href = '/';


            }else{
                console.log("na")
            }
        }).catch((err)=>{
            console.log(err)
  })
            





            
        }else{
            alert("Your Passwords Are not matching");
        }

        

         
        
    }

    

    return(<div>
         <div className="w-8/12 mx-auto my-32" >
            
            

            <div class="bg-white font-family-karla py-20">

<div class="w-full flex flex-wrap">

    
    <div class="w-full md:w-1/2 flex flex-col">

       

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p class="text-center text-2xl underline">Register to Happy Life</p>
            <form class="flex flex-col pt-3 md:pt-8" onSubmit={ReistesSubmited}>
            
            
                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">First Name</label>
                    <input type="text" id="email" placeholder="First name" required onChange={(e)=>{setfirstName(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Last Name</label>
                    <input type="text" id="email" placeholder="Last name" required onChange={(e)=>{setlastname(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">User Name</label>
                    <input type="text" id="email" placeholder="User Name" required onChange={(e)=>{setuserName(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Email</label>
                    <input type="email" id="email" placeholder="your@email.com" required onChange={(e)=>{setemail(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Contact Number</label>
                    <input type="Number" id="" placeholder="076 666 6666" required onChange={(e)=>{setcontactNo(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Name Of Closest</label>
                    <input type="text" id="email" placeholder="Name Of Closest" required  onChange={(e)=>{setnameOfClosest(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Closest Email</label>
                    <input type="email" id="email" placeholder="your@email.com" required  onChange={(e)=>{setclosestEmail(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Closest Contact Number</label>
                    <input type="Number" id="" placeholder="076 666 6666" required onChange={(e)=>{setclosestContactNo(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Password</label>
                    <input type="password" id="password" placeholder="Password" required onChange={(e)=>{setpassword(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Re-Enter your Password</label>
                    <input type="password" id="password" placeholder="Re-Enter your Password" required onChange={(e)=>{setrepassword(e.target.value)}} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <input type="submit" value="Register me" class="bg-green-700 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
            </form>
            <div class="text-center pt-12 pb-12">
                <p>Don't have an account? <a href="/" class="underline font-semibold">Log in.</a></p>
            </div>
        </div>

    </div>

    
    <div class="w-1/2 shadow-2xl">
        <img class="object-cover w-full h-fill hidden md:block"  src="https://www.healtheuropa.com/wp-content/uploads/2019/10/iStock-Ridofranz-696x392.jpg"/>
    </div>
</div>

</div>



 

           
        </div>
    </div>)
}

export default RegisterUser;