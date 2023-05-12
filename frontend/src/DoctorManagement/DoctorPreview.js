import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddDoctor from './addDoctor';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Doctor() { 
  const [Doctor, setDoctor] = useState([]);

  const getDoctor = () => {
    axios.get("http://localhost:8050/doctor/getdoctor")
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const deleteDoctor = (id) => {
    axios.delete(`http://localhost:8050/doctor/deletedoctor/${id}`)  //Activates Package deleting function
        .then((res) => {
            alert("Packages Content Deleted");
            getDoctor();
        })
        .catch((err) => {
            alert(err);
        });
    }
  


  useEffect(() => { getDoctor() } );  //Shows changes of the page

  return (
    <div className='container text-center'>
      <h1 className='text-center'>Therapist</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {Doctor.map((data) => {
          return (
            <Card style={{ width: '25rem', margin: '2rem', padding: '1rem'}}>
              <Card.Img src={data.firstName}/>
              <Card.Body>
                <Card.Title>{data.firstName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.VehiclesId}</Card.Subtitle>
                <Card.Text>
   
                type = {data.firstName}<br/>
                vehicleType = {data.lastName}<br/>
                driverName      = {data.type}<br/>
                ownerName        = {data.gender}<br/>
                email    = {data.email}<br/>
                phoneNo            ={data.specialization}<br/>
                fee              = {data.image}<br/>
                
              
                </Card.Text>
                
                
                <Link key={`${data._id} + 4`} to={"/editorDash/DoctorUpdateForm/"+data._id}> 
                <Button key={`${data._id} + 1`}variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteDoctor(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
        <hr></hr>
        <Link to={'/addDoctor/'}>
            <div>
                <button className='btnPkg'>Reserve a Package</button>
            </div>
   </Link> 
      </div>
    </div>
  )
}


  export default Doctor;