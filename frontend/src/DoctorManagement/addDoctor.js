import React, { useState } from 'react'
import axios from "axios";
import Nav from "../Ui/AdminNavBar";
import "./DoctorPreview.css";


  
  function AddDoctor() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [specialization, setSpecialization] = useState('');
   const [image, setImage] = useState('');
    

    
    function inputvalue(e){



       var reader = new FileReader();
      
      reader.readAsDataURL(e.target.files[0]);
      
    
      
       reader.onload = () =>{
      
      // console.log(reader.result);
      
     setImage(reader.result);
      
       }
      
     }

    return (
      <div className='main2'>
        <Nav />
        <div className='#'>
            <h1 class="text-3xl font-bold dark:text-black">Enter Therapist Details</h1>
            <br></br>
            <div className="form">
                <br />
                <form onSubmit={async(e) => {
                    e.preventDefault();
                  
                   
                 const newDoctor = {
                        firstName, 
                        lastName, 
                        type, 
                         gender, 
                        email, 
                        specialization, 
                        image, 

                    }

                    axios.post("http://localhost:8050/doctor/doctor", newDoctor)
                        .then(() => {
                            alert(" Content added successfully");
                            window.location.href = '/DoctorPreview'
                        }).catch((err) => {
                            alert("Error adding Therapist Content");
                            console.log(err);
                        })
                    .catch((err) => {
                        console.log(err);
                    })
                }}>

                   
                <div className="form-group">
                  <label className="">Enter First Name</label>
                  <input type="text" className="form-control" placeholder="Enter Full Name" onChange={(e) => {setFirstName(e.target.value)}} required/>
                </div>
                <br />
                <div className="form-group">
                  <label className="#">Enter Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter Last  Name" onChange={(e) => {setLastName(e.target.value)}} required/>
                </div>
                <br />
           <div className="form-group">
            <label className="form-label"> Type</label>
            <select
              className="form-control"
              pattern="[a-z,A-Z,0-9 ]{3,}"
              onChange={(e) => {
                setType(e.target.value);
              }}
              required
            >
              <option value="Psychologist" selected="selected">
              Psychologist
              </option>
              <option value="Counselor ">Counselor </option>
              <option value="Other">Counselor-Free</option>
            </select>
             </div>
                <br />
         

          <div className="form-group">
            <label className="form-label"> Gender</label>
            <select
              className="form-control"
              pattern="[a-z,A-Z,0-9 ]{2,}"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            >
              <option value="Female" selected="selected">
              Female
              </option>
              <option value="Male ">Male </option>
              
            </select>
             </div>
                <br />
             

           <div className="form-group">
            <label className="form-label"> Specialization For </label>
            <select
              className="form-control"
              pattern="[a-z,A-Z,0-9 ]{2,}"
              onChange={(e) => {
                setSpecialization(e.target.value);
              }}
              required
            >
              <option value="Kids" selected="selected">
              Kids
              </option>
              <option value="Teenagers ">Teenagers </option>
              <option value="Adults ">Adults </option>
              
            </select>
             </div>

                <br />
                <div className="form-group">
                  <label className="#">Email</label>
                  <input type="email" className="form-control"pattern="[a-z0-9]+@+[a-z]+.com" placeholder="Enter Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                </div>
                <br />
                <lable id="input">Image : </lable>
              <br/><input id="input" type="file" name="avatar" accept="image/png, image/jpeg" onChange={inputvalue}/>

                    <br />
                    <br>
                    </br>
                    <button type="submit" className="submitbtn">Submit</button><br /><br />
                </form>
            </div>
        </div>
        </div>
    )
}


export default AddDoctor;