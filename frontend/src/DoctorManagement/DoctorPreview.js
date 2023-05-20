import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./DoctorPreview.css";
import Swal from 'sweetalert2'
import jsPDF from "jspdf";
import Nav from "../Ui/AdminNavBar";
import autoTable from 'jspdf-autotable'

function Doctor() { 
  const [Doctor, setDoctor] = useState([]);
  const [getResults,setResults] = useState([]);

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
    axios.delete(`http://localhost:8050/doctor/deletedoctor/${id}`)  //Activates Thrapist deleting function
        .then((res) => {
            alert("Packages Content Deleted");
            getDoctor();
        })
        .catch((err) => {
            alert(err);
        });
    }
  


  useEffect(() => { getDoctor() } );  //Shows changes of the page

  //pdf

  function downloadPDF(){
    let timerInterval
    Swal.fire({
    title: 'Preparing your PDF',
    html: 'Please wait <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    }).then(()=>{


    const doc = new jsPDF('p','pt','a4');
    var imgData ='';
    var width = doc.internal.pageSize.getWidth();
    var hight = doc.internal.pageSize.getHeight()

   
     var pageSize = doc.internal.pageSize;
     // jsPDF 1.4+ uses getHeight, <1.4 uses .height
     var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
     // jsPDF 1.4+ uses getWidth, <1.4 uses .width
     var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

     doc.autoTable({
         html: '#my-table',
         startY: pageHeight - 700,
         theme: 'grid'
     });

     var today = new Date();
        var curr_date = today.getDate();
        var curr_month = today.getMonth();
        var curr_year = today.getFullYear();
  
        today = [curr_month + 1] + "/ " + curr_date + "/ " + curr_year;
        var newdat = today;


   
   
   /////// doc.addImage(imgData,'PNG',0,0,width,hight)
   // doc.text("Available Supplies",20,10);
   doc.text(newdat,450,108);
    doc.autoTable({
       //fields name
          head: [['Name Of the Thrapist', 'Email', 'Type','Gender','Specialization For ']],
          body:  Doctor.map(function(items){
                          return( 
                         [ 
                          items.firstName + "" + items.lastName , 
                          items.email,
                          items.type,
                           items.gender,
                          items.specialization,
                          
                        ] 
                             
                                    
                          );
                }) 

                })
    

    doc.save("User Progress.pdf");

      })
    }
  return (

    <div className='main'>
      <Nav />
    <div className='container text-center'>
       <Link to={'/addDoctor/'}>
            <div>
                <button className='addbtn'>Add New Thrapist </button> 
                <button onClick={downloadPDF} className='pdf'>Download list </button>
            </div>
   </Link> 
      <h1 className='text-center-heading'>Therapist</h1>
     
      <div className='container flex-wrap d-flex' style={{ width: '80%'}}>
        {Doctor.map((data) => {
          return (
            <Card style={{ width: '25rem', margin: '3rem', padding: '2rem'}} className=''>
              <Card.Img src={data.image}/>
              <Card.Body >
                <Card.Title>Ms. {data.firstName +' '+data.lastName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.DoctorId}</Card.Subtitle>
                <Card.Text >
   
                First Name = {data.firstName}<br/>
                Last Name = {data.lastName}<br/>
                Type      = {data.type}<br/>
                Gender   = {data.gender}<br/>
                Email    = {data.email}<br/>
                Specialization  ={data.specialization}<br/>
            
                
              
                </Card.Text>
                
                
                <Link key={`${data._id} + 4`} to={"/updateDoctor/"+data._id}> 
                <Button key={`${data._id} + 1`} className='btn1'>Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} className='btn2 ' onClick={() => deleteDoctor(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
        <hr></hr>
       
      </div>
    </div>
    </div>
  )
}


  export default Doctor;