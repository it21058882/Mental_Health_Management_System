import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from "../Ui/nav";
import React, { useEffect, useState } from "react";

function UserProfile() {

  const [getProdata, setProdata] = useState([]);
  console.log(localStorage.getItem('userID'));

  function viewProfile() {
    axios.get("http://localhost:8050/user/ProfileView/" + localStorage.getItem('userID'))
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


  function editpro() {
    window.location.href = '/editprofile';
  }

  function deletePro() {

    axios.delete("http://localhost:8050/user/ProfileDelete/" + localStorage.getItem('userID')).then(res => {
      if (res) {
        alert("Profile deleted");
        localStorage.setItem('acctoken', "")
        localStorage.setItem('userID', "")
        window.location.href = '/';
      }
    }).catch(err => {
      console.log(err)


    })

  }





  return (<div>
    <Nav />
    <div class="h-screen bg-gray-200 pt-20">
      <div>
        <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div class="border-b px-4 pb-6">
            <div class="text-center my-4">
              <img class="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
              <div class="py-2">
                <h3 class="font-bold text-2xl mb-1">{getProdata.length > 0 && getProdata[0].userName}</h3>
                <div class="inline-flex text-gray-700 items-center">
                  {getProdata.length > 0 && getProdata[0].email}
                </div>
              </div>
            </div>
            <div class="flex gap-2 px-2">
              <button onClick={editpro} class="flex-1 rounded-full bg-yellow-600 text-white antialiased font-bold hover:bg-yellow-800 px-4 py-2">Edit Profile</button>
              <button onClick={deletePro} class="flex-1 rounded-full border-2 bg-red-700 font-semibold hover:bg-red-900 text-white px-4 py-2">Delete Profile</button>
            </div>
          </div>
          <div>
            <div>
              <h1 class="py-3 pl-6 font-bold text-gray-500">First Name: {getProdata.length > 0 && getProdata[0].firstName}</h1>
              <h1 class="py-3 pl-6 font-bold text-gray-500">Last Name: {getProdata.length > 0 && getProdata[0].lastname}</h1>
              <h1 class="py-3 pl-6 font-bold text-gray-500">Contact Number: {getProdata.length > 0 && getProdata[0].contactNo}</h1>
              <h1 class="py-3 pl-6 font-bold text-gray-500">Name Of Closest: {getProdata.length > 0 && getProdata[0].nameOfClosest}</h1>
              <h1 class="py-3 pl-6 font-bold text-gray-500">Closest Email: {getProdata.length > 0 && getProdata[0].closestEmail}</h1>

              <h1 class="pt-3 pb-8 pl-6 font-bold text-gray-500">Closest Contact Number: {getProdata.length > 0 && getProdata[0].closestContactNo}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>);
}

export default UserProfile;