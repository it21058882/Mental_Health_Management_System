import React, { useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./DoctorPreview.css";


function Front() {

    
        const handleSubmit = (event) => {
          event.preventDefault();
          // Perform form submission logic here, e.g., make API calls using Axios
        };
    return (
      <div>

<div className="main2">  
<h1 className='text-center-heading'>Therapist</h1>

 <br></br>
     <h1 ></h1>
     <h1 class="text-3xl font-bold dark:text-black" >Discover Your Perfect  Match  </h1>
  <br></br>
    <form className="form1">
  <div className='frontq'>
    <label for="doctorGender">(1) Are you looking for a female or male doctor?</label><br></br>
    <br></br>
    <select id="doctorGender" name="doctorGender">
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
  </div>
<br></br>
  <div>
    <label for="age">(2) What is your age?</label><br></br>
    <br></br>
    <select id="age" name="age">
      <option value="1-18">1-18</option>
      <option value="18+">18+</option>
      <option value="35+">35+</option>
    </select>
  </div>
<br></br>
  <div>
    <label for="channelOrAdvice">(3) Do you want to channel a doctor ,counceling or free counseling ?</label> <br></br>
    <br></br>
    <select id="channelOrAdvice" name="channelOrAdvice">
      <option value="channel">Channel Doctor</option>
      <option value="advice">Counceling</option>
      <option value="advice">Free Counceling</option>
    </select>
  </div>
<br></br>


<br></br>
<br></br>
<br></br>
  <button type="submit" className='btn4'>
  <a href="http://localhost:3000/doctorpreviewuser">
    Submit  </a> </button>
   
</form>
<br></br>
      </div>
      </div>
    );
  }
  
  export default Front;
  
  