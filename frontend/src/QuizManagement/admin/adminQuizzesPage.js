import axios from "axios";
import React, { useEffect, useState } from "react";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'



function AdminQuizzesPage(){
          const[getTitles,setTitles] = useState([]);
          const[serQuery,serSerQuery] = useState("");
          
          useEffect(()=>{
                    function loadQuestions(){
                              axios.get("http://localhost:8050/quiz/titles").then((res)=>{
                                        console.log(res.data);
                                        setTitles(res.data);
                              }).catch((err)=>{
                                        console.log(err)
                              })
          
                            
                    }loadQuestions();
          },[deleteQuiz,])
          
          function addQuizbtn(){
                    window.location.href = '/addquiztitle' ;
          }
          function selectQuiz(e){
                    console.log(e);
                    window.location.href = '/amminview/'+e._id+"/"+e.title ;
          }

          function deleteQuiz(e){

            const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            })
            
            swalWithBootstrapButtons.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel!',
              reverseButtons: true
            }).then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success',
                  axios.delete("http://localhost:8050/quiz//titles/DeleteQizeAdmin/"+e).then((res)=>{
                   
          }).catch((err)=>{
                    console.log(err);
          })
                  
                )
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'Your qustion back is safe :)',
                  'error'
                )
              }
            })




                    
                  
          }

          function searchfun(e){
                    console.log(e.target.value)
                    serSerQuery(e.target.value);
          }
          function searchfun2(){
                    searchfun(serQuery);
          }
          
          return(<div>
                    
                    <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={searchfun} placeholder= "Search Quiz name" aria-label="Search Quiz name" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={searchfun2} type="button"><i class="bi bi-search"></i>   Search</button>
  </div>
</div>
                    


                    <h1 class="text-center">Quiz Management </h1>
                    {/* <table>
                    {
                              getTitles.map(function(item,index){
                                        return(<tr>
                                                  <td>{index+1}</td>
                                                  <td onClick={e=>selectQuiz(item._id)}>{item.title}</td>
                                                  <td><button onClick={e=>deleteQuiz(item._id)}>Delete Quiz</button></td>
                                        </tr>)
                              })
                    }

                    

                    </table> */} 
                   
                    <div  class="row1">
                    {
                              getTitles .filter(items=>

                              items.title.toLowerCase().includes(serQuery)
                              ).map(function(item,index){
                                        return(
                                                   
                                                     <div class="card col-md-3">
                                                            <div class="card-body">
                                                            <h4 class="card-title"  onClick={e=>selectQuiz(item)}>{item.title}</h4>
                                                                
                                                            <button class="btn btn-danger btn-sm align-content-center" onClick={e=>deleteQuiz(item._id)}><i class="bi bi-trash-fill"></i></button>
                                                            </div>
                                                            

                                                   </div>
                                        )
  
                              })
                    }
                    </div>
                    

                    <div class="col-md-12 text-center">

                    <button class="btn btn-success addquizbtn" onClick={addQuizbtn}>+ Add Quiz</button>
                    </div>
          </div>);

}

export default AdminQuizzesPage;