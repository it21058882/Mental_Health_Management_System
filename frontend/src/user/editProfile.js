import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";


function EditProfile(){

          const [getProdata, setProdata] = useState([]);
          console.log(localStorage.getItem('userID'));


          const [firstName,setfirstName] = useState("");
          const [lastname,setlastname] = useState("");
          const [userName,setuserName] = useState("");
       
          const [contactNo,setcontactNo] = useState("");
          const [nameOfClosest,setnameOfClosest] = useState("");
          const [closestEmail,setclosestEmail] = useState("");
          const [closestContactNo,setclosestContactNo] = useState("");






          function viewProfile() {
            axios.get("http://localhost:8050/user/ProfileView/"+localStorage.getItem('userID'))
              .then((res) => {
                setProdata(res.data);
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          
          useEffect(() => {
            viewProfile();
          }, []);

          console.log(getProdata)

          



          function updateUser(e){
                    e.preventDefault();

                    

                    const regdata ={
                              firstName,
                              lastname,
                              userName,
                              contactNo,
                              nameOfClosest,
                              closestEmail,
                              closestContactNo
                              
                          }
                          console.log(regdata)

                          axios.patch("http://localhost:8050/user/updateuser",regdata,{
                            headers: {
                              'Authorization': "bearer "+localStorage.getItem('acctoken')
                            }
                          }).then((res)=>{
                            alert("Updated...");
                            window.location.href = '/userprofile';
                          }).catch((err)=>{
                            console.log(err);
                          })

          }

          function back(){
            window.location.href = '/userprofile';
          }






          return(<div>
                    <div class="h-screen bg-gray-200 pt-20">
   <div>
     <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
       <div class="border-b px-4 pb-6">
         <div class="text-center my-4">
            <div class="py-2">
             <h3 class="font-bold text-2xl mb-1 underline">Update Profile</h3>
             <div class="inline-flex text-gray-700 items-center">
               {getProdata.length > 0 && getProdata[0].email}
             </div>
           </div>
         </div>
         
       </div>
       <div>

       <div>
                    
       <div class="w-full m-auto max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={updateUser}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      First Name:
      </label>
      <input onChange={(e)=>{setfirstName(e.target.value)}} required placeholder={getProdata.length > 0 && getProdata[0].firstName} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
        
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Last Name:
      </label>
      <input onChange={(e)=>{setlastname(e.target.value)}} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={getProdata.length > 0 && getProdata[0].lastname}/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        User name:
      </label>
      <input onChange={(e)=>{setuserName(e.target.value)}} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={getProdata.length > 0 && getProdata[0].userName}/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Contact Number:
      </label>
      <input onChange={(e)=>{setcontactNo(e.target.value)}} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder={getProdata.length > 0 && getProdata[0].contactNo}/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Name Of Closest:
      </label>
      <input onChange={(e)=>{setnameOfClosest(e.target.value)}} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={getProdata.length > 0 && getProdata[0].nameOfClosest}/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Closest Contact Number:
      </label>
      <input onChange={(e)=>{setclosestContactNo(e.target.value)}} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder={getProdata.length > 0 && getProdata[0].closestContactNo}/>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Closest Email:
      </label>
      <input onChange={(e)=>{setclosestEmail(e.target.value)}} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder={getProdata.length > 0 && getProdata[0].closestEmail}/>
    </div>

    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Update Profile
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={back} type="button">
        Back
      </button>
      
    </div>
  </form>
          
  </div>
  </div>


       </div>

      


     </div>
   </div>
 </div>
 
           </div>)
}

export default EditProfile;