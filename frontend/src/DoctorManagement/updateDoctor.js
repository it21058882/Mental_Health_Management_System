import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import "./DoctorPreview.css";

  
function Updatedoctor() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [specialization, setSpecialization] = useState('');
   const [image, setImage] = useState('');
    

    const {id} = useParams();
    console.log(id);
  
    const newDoctor = () => {   
        axios.get("http://localhost:8050/doctor/"+id) //get id
            .then((res) => {
             
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setType(res.data.type);
                setGender(res.data.gender);
                setEmail(res.data.email);
                setSpecialization(res.data.specialization);
                setImage(res.data.image);
               
            })
            .catch((err) => {
                alert(err);
            });
    };
    
    useEffect(() => { newDoctor() },[]);

    return (
        <div className='main2'>
        <div className='#'>
            <h1>Update Package Details </h1>
            <div className="form">
            <form onSubmit={async (e) => {
                e.preventDefault();

       //         const imageRef = ref(storage, `images/packages/${name + image.name}`);
        
               

               (() => {
                        
                   

                const newDoctor = {
                    firstName, 
                    lastName, 
                    type, 
                     gender, 
                    email, 
                    specialization, 
                    image, 
                }

                axios.put("http://localhost:8050/doctor/updatedoctor/"+id, newDoctor)
                    .then(() => {
                        alert("Package updated successfully");

                    }).catch((err) => {
                        alert(err);
                    })
                }).catch((err) => {
                    console.log(err);
                });
            }}>

                <div className="form-group">
                    <label className="form-label">Enter First Name</label>
                    <input type="text" className="form-control" value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Enter Last Name</label>
                    <input type="text" className="form-control" value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }} required/>
                </div>
                
                <div className="form-group">
                    <label className="form-label">Type</label>
                    <input type="text" className="form-control" value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Gender</label>
                    <input type="text" className="form-control" value={gender}
                    onChange={(e) => {
                        setGender(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>
 
                <div className="form-group">
                    <label className="form-label">Specialization For</label>
                    <input type="text" className="form-control" value={specialization}
                    onChange={(e) => {
                        setSpecialization(e.target.value);
                    }} />
                </div>
                  
                <br></br>
                <button type="submit" className="submitbtn">
                  Update
                </button><br /><br />
            </form>
        </div>
        </div>
       </div> 
    )
}


export default Updatedoctor;
