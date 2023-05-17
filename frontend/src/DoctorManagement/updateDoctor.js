import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



  
function Updatedoctor() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [specialization, setSpecialization] = useState('');
   const [image, setImage] = useState('');
    

    const {id} = useParams();
  
    const newDoctor = () => {   
        axios.get("http://localhost:8050/doctor/getdoctor"+id) //get id
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
        <div className='#'>
            <h1>Update Package Details </h1>
        <div className="#">
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
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Destination</label>
                    <input type="text" className="form-control" value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }} required/>
                </div>
                
                <div className="form-group">
                    <label className="form-label">Hotel</label>
                    <input type="text" className="form-control" value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Room Type</label>
                    <input type="text" className="form-control" value={gender}
                    onChange={(e) => {
                        setGender(e.target.value);
                    }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Vehicle</label>
                    <input type="text" className="form-control" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>
 
                 <div className="form-group">
            <label className="form-label">Guide</label>
            <select
              className="form-control"
              onChange={(e) => {
                setSpecialization(e.target.value);
              }}
              required
            >

              
              
              
            </select>
          </div>
               
                  
                
                <button type="submit" className="submitbtn">
                  Update
                </button><br /><br />
            </form>
        </div>
        </div>
    )
}


export default Updatedoctor;
