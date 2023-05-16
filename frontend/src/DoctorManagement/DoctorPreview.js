<<<<<<< HEAD
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import AddDoctor from './addDoctor';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
=======
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
//import AddDoctor from './addDoctor';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

// function Doctor() { 
//   const [Doctor, setDoctor] = useState([]);

//   const getDoctor = () => {
//     axios.get("http://localhost:8050/doctor/getdoctor")
//       .then((res) => {
//         setDoctor(res.data);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }
//   const deleteDoctor = (id) => {
//     axios.delete(`http://localhost:8050/doctor/deletedoctor/${id}`)  //Activates Thrapist deleting function
//         .then((res) => {
//             alert("Packages Content Deleted");
//             getDoctor();
//         })
//         .catch((err) => {
//             alert(err);
//         });
//     }
  


//   useEffect(() => { getDoctor() } );  //Shows changes of the page

//   return (

    
//     <div className='container text-center'>
//        <Link to={'/addDoctor/'}>
//             <div>
//                 <button className='btnPkg'>Add A Thrapist </button>
//             </div>
//    </Link> 
//       <h1 className='text-center'>Therapist</h1>

//       <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
//         {Doctor.map((data) => {
//           return (
//             <Card style={{ width: '25rem', margin: '2rem', padding: '1rem'}}>
//               <Card.Img src={data.image}/>
//               <Card.Body>
//                 <Card.Title>{data.firstName}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">{data.VehiclesId}</Card.Subtitle>
//                 <Card.Text>
   
//                 First Name = {data.firstName}<br/>
//                 Last Name = {data.lastName}<br/>
//                 Type      = {data.type}<br/>
//                 Gender   = {data.gender}<br/>
//                 Email    = {data.email}<br/>
//                 Specialization  ={data.specialization}<br/>
            
                
              
//                 </Card.Text>
                
                
<<<<<<< HEAD
//                 <Link key={`${data._id} + 4`} to={"/editorDash/DoctorUpdateForm/"+data._id}> 
//                 <Button key={`${data._id} + 1`}variant="warning">Update</Button>
//                 </Link>
//                 <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteDoctor(data._id)}>Delete</Button>
//               </Card.Body>
//             </Card>
//           )        
//         })}
//         <hr></hr>
=======
                <Link key={`${data._id} + 4`} to={"/updateDoctor/"+data._id}> 
                <Button key={`${data._id} + 1`}variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteDoctor(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
        <hr></hr>
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364
       
//       </div>
//     </div>
//   )
// }


//   export default Doctor;