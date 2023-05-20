import React, { useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';




function ChannelForm({}) {
  
 const {id} = useParams();


 // const[doctor,setdoctor]= useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo]=useState('');
  const [other, setother]=useState('');
  




  return (<div>
   
    <div className="main2">
     
      <h1 ></h1>
      <h1 class="text-3xl font-bold dark:text-black" >Channel your Doctor  </h1>
   <br></br>
      <div className="form">
        <div className="rentalformcont">
          <form
            className="rentalform"
            onSubmit={async (e) => {
              e.preventDefault();

              const newChannel = {
                
                name,
                date,
                email,
                phoneNo,
                other,
  
             
              };

               axios.post("http://localhost:8050/channel/channel", newChannel)
              .then(() => {
                alert("Package Booked Successfully");
                window.location.href = '/doctorpreviewuser'
               
              }).catch((err) => {
                alert("Error ");
                window.location.href = '/doctorpreviewuser'
                console.log(err);
              });
            }}>

        <div className="form-group">
              
              </div>

              <div className="form-group">
                <label className="#">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter Full Name" onChange={(e) => {setName(e.target.value)}} required/>
              </div>
              <br />
              <div className="form-group">
                <label className="#">Channeling Date </label>
                <input type="date" className="form-control" onChange={(e) => {setDate(e.target.value)}} required/>
              </div>
              <br />
              <div className="form-group">
                <label className="#">Email</label>
                <input type="email" className="form-control"pattern="[a-z0-9]+@+[a-z]+.com" placeholder="Enter Email" onChange={(e) => {setEmail(e.target.value)}} required/>
              </div>
              <br />
  <div className="form-group">
                <label className="#">phoneNo</label>
                <input type="Number" className="form-control"   placeholder="Enter phone No" onChange={(e) => {setphoneNo(e.target.value)}} required/>
              </div>
          <br />
<br />
<div className="form-group">
                <label className="#">Other Details </label>
                <input type="text-area" className="form-control" placeholder="Enter Full Name" onChange={(e) => {setother(e.target.value)}} required/>
              </div>
              <br />

            <button type="submit" className="submitbtn">
              Submit
            </button>
          </form>
        </div>
       
      </div>
      <br />
      <br />
      
    </div> 
        </div> );
}

export default ChannelForm;
