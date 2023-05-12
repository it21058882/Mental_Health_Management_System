import React, { useState } from 'react'
import axios from "axios";



  
  function AddDoctor() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [image, setImage] = useState('');



    return (
        <div className='#'>
            <h1>Enter Therapist Details</h1>
            <div className="#">
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
                        }).catch((err) => {
                            alert("Error adding Therapist Content");
                            console.log(err);
                        })
                    .catch((err) => {
                        console.log(err);
                    })
                }}>

                   
                <div className="form-group">
                  <label className="#">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter Full Name" onChange={(e) => {setFirstName(e.target.value)}} required/>
                </div>
                <br />
                <div className="form-group">
                  <label className="#">Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter Last  Name" onChange={(e) => {setLastName(e.target.value)}} required/>
                </div>
                <br />
                <div className="form-group">
                  <label className="#">Enter Type</label>
                  <input type="text" className="form-control" placeholder="Enter Last  Name" onChange={(e) => {setType(e.target.value)}} required/>
                </div>
                <br />
                <div className="form-group">
                  <label className="#">Enter Gender</label>
                  <input type="text" className="form-control" placeholder="Enter Last  Name" onChange={(e) => {setGender(e.target.value)}} required/>
                </div>
                <br />
                <div className="form-group">
                  <label className="#">Enter specialization</label>
                  <input type="text" className="form-control" placeholder="Enter Last  Name" onChange={(e) => {setSpecialization(e.target.value)}} required/>
                </div>
                <br />
                <div className="form-group">
                  <label className="#">Email</label>
                  <input type="email" className="form-control"pattern="[a-z0-9]+@+[a-z]+.com" placeholder="Enter Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                </div>
                <br />
                <div className="form-group">
                  <label className="#">Enter Image </label>
                  <input type="text" className="form-control" placeholder="Enter Last  Name" onChange={(e) => {setImage(e.target.value)}} required/>
                </div>
                <br />

                    <br />
                    <button type="submit" className="submitbtn">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}


export default AddDoctor;