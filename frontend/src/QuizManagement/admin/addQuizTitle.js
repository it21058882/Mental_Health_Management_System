import React, { useState } from 'react'
import Nav from "../../Ui/AdminNavBar";
import axios from "axios";


function AddQuizTitle (){

          const [getTitle,setTitle] = useState("");
          
        


          function submitTitle (){
                    const newTitle  = {
                              title : getTitle
                    }

                    console.log(newTitle);

                    axios.post("http://localhost:8050/quiz/quizTile",newTitle).then(function(res){
                              if(res){
                                        
                                  //alert(res.data);
                                  localStorage.setItem('newTitleID',res.data);
                                  window.location.href = '/addquestions/' +res.data+"/"+getTitle ;
                  
                                 
                                
                              }
                           })
                    
          }

          function titleinsert (e){
                    setTitle(e.target.value);
          }

          return(
                   <div className="h-[600px]">
                     <Nav />

                            
                              <div className="mt-12"><h1 className="text-6xl font-bold text-center underline">Add Quiz</h1></div>

                    <section class="vh-50 gradient-custom">
                    <div class="container py-5 h-20">
                      <div class="row justify-content-center align-items-center h-100">
                        <div class=" col-xl-8">
                          <div class="card shadow-2-strong card-registration" style={{borderRadius: 15+"px"}}>
                            <div class="card-body p-4 p-md-5">
                              <div className='row1'> 
                              <div class=" col-md-5 card-body">
                              <h3 class="card-title text-3xl font-bold">Quiz Name</h3>
                              <input  class="form-control inputcss" placeholder='Quiz Title' onChange={titleinsert}/>
                              <hr></hr>
                              <button class="btn btn-success mt-4" onClick={submitTitle}>Create a Quiz</button>
                              </div>
                              </div>

                              </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    
                  </section>
                   </div>
                              
                    
          )
}

export default AddQuizTitle;