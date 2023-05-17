import React, { useState } from 'react'
import axios from "axios";



function ChannelForm({}) {
  
 // const {id} = useParams();

 // const[doctor,setdoctor]= useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo]=useState('');
  const [other, setother]=useState('');
  


/*  const getDoctor=()=>{
    axios.get("http://localhost:8050/doctor/"+id).then((res)=>{
 
          
      setDoctor(res.data);
            
          })
          .catch((err) => {
              alert(err.message);
          });
      }
      


      useEffect(()=> getDoctor(),[]);*/

  return (
    <div id="rentalform" className="#">
     
      <h1 ></h1>
      <h1>Package Reservation </h1><h1>Booking Details</h1>
   
      <div className="rentaleinnercontainer">
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
              console.log(newChannel);

              await axios.post("http://localhost:8050/channel/channel", newChannel)
              .then(() => {
                alert("Package Booked Successfully");
               
              }).catch((err) => {
                alert("Error ");
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
                <label className="#">Reserve Date </label>
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
                <input type="Number" className="form-control"  min="100000000" max="9999999999" placeholder="Enter phone No" onChange={(e) => {setphoneNo(e.target.value)}} required/>
              </div>
          <br />
<br />
<div className="form-group">
                <label className="#">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter Full Name" onChange={(e) => {setother(e.target.value)}} required/>
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
  );
}

export default ChannelForm;
