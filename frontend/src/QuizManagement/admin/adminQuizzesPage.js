import axios from "axios";
import Nav from "../../Ui/AdminNavBar";
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
          
          return(<div className="h-full">
             <Nav />
                    
                    <div class="input-group w-[700px] pr-52 pt-12 float-right">
  <input type="text" class="form-control" onChange={searchfun} placeholder= "Search Quiz name" aria-label="Search Quiz name" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    
  </div>
</div>
                    

          <div className="clear-right">
          <h1 className="text-6xl font-bold text-center underline">Quiz Management </h1>
          </div>
                    
                <div className="w-8/12 py-10 mx-auto my-10 bg-white rounded-2xl shadow-current">
                   
                    <div  class="row1">
                    {
                              getTitles .filter(items=>

                              items.title.toLowerCase().includes(serQuery)
                              ).map(function(item,index){
                                        return(
                                                   
                                                     <div class="card col-md-3 !bg-green-200 border-4">
                                                            <div class="card-body">
                                                            <h4 class="card-title text-lg font-semibold"  onClick={e=>selectQuiz(item)}>{item.title}</h4>
                                                                
                                                            <button class="btn btn-danger btn-sm align-content-center" onClick={e=>deleteQuiz(item._id)}><i class="bi bi-trash-fill"></i></button>
                                                            </div>
                                                            

                                                   </div>
                                        )
  
                              })
                    }
                    </div>
                    
                    </div>
                    <div class="col-md-12 text-center">

                    <button class="btn btn-success addquizbtn mb-5" onClick={addQuizbtn}>+ Add Quiz</button>
                    </div>
                    <div className="w-8/12 h-1 mx-auto bg-white"></div>
                    <div className="mt-12 mb-12">
                     <p className="m-auto text-xs text-center w-50">Our mental health is a fundamental part to our overall health and well-being. As a parent, you play a huge role in supporting your child's mental well-being. Nurturing and loving care build a strong foundation, helping your child to develop the social and emotional skills they need to lead a happy, healthy and fulfilled life.  </p>
                     </div>
                     <div className="w-8/12 h-1 mx-auto mb-12 bg-white"></div>
          </div>);

}

export default AdminQuizzesPage;