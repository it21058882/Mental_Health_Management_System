import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'

function UserProgress(){

          const[serQuery,serSerQuery] = useState("");
          const [getResults,setResults] = useState([]);

          function searchfun(e){
                    
                    serSerQuery(e.target.value);
          }

          function getUserPro(){
                    axios.get("http://localhost:8050/quiz/getresultsadmin").then(res=>{
                              console.log(res.data)
                              setResults(res.data);
                    })  .catch(err=>{
                              console.log(err);
                    })        
          }

          useEffect(()=>{
                    getUserPro();
          },[])

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
                      
                          head: [['User Name', 'Email', 'Contact Nu','Closest Name','Closest Con Nu','Closest Email','Quiz Name','Results']],
                          body:  getResults.filter(items=>

                            items.userName.toLowerCase().includes(serQuery)||
                            items.quizName.toLowerCase().includes(serQuery)
                                
                                ).map(function(items){
                                          return( 
                                         [ 
                                          items.userName , 
                                          items.email,
                                          items.contactNo,
                                          items.nameOfClosest,
                                          items.closestContactNo,
                                          items.closestEmail,
                                          items.quizName,
                                          items.results,
                                        ] 
                                             
                                                    
                                          );
                                }) 
        
                                })
                    
        
                    doc.save("User Progress.pdf");
        
                      })
                  }

          return(<div>
       

          

          <section class="vh-50 gradient-custom">
                    <div class="container py-5 h-50">
                      <div class="row justify-content-center align-items-center h-100">
                        <div class=" col-xl-12">
                          <div class="card shadow-2-strong card-registration" style={{borderRadius: 15+"px"}}>
                            <div class="card-body p-4 p-md-5">
                            


                            <div class="row">
                                  <div class="col-md-6 mb-4">

                                  <h3>User Progress</h3>
                                  <button onClick={downloadPDF}>Download data set</button>
                                  </div>
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="text" id="Marks4" placeholder="Search" class="form-control form-control"  onChange={searchfun}/>
                                      
                                    </div>
                                  </div>
                                </div>





                    <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Nu</th>
                        <th scope="col">Closest Name</th>
                        <th scope="col">Closest Con Nu</th>
                        <th scope="col">Closest Email</th>
                        <th scope="col">Quiz Name</th>
                        <th scope="col">Results</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    {
                              getResults.filter(items=>

                              items.userName.toLowerCase().includes(serQuery)||
                              items.quizName.toLowerCase().includes(serQuery)
                              ).map(function(item){
                                        return(<tr scope="row">
                                                  <td><strong>{item.userName}</strong></td>
                                                  <td>{item.email}</td>
                                                  <td>{item.contactNo}</td>
                                                  <td>{item.nameOfClosest}</td>
                                                  <td>{item.closestContactNo}</td>
                                                  <td>{item.closestEmail}</td>
                                                  <td><strong>{item.quizName}</strong></td>
                                                  <td><strong>{item.results}</strong></td>
                                                
                                         </tr>)
                              })
                    }
                    </tbody>
                    </table>
                    </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </section>
          </div>)
}

export default UserProgress;