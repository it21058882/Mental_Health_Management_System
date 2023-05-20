import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../Ui/AdminNavBar";
import Swal from 'sweetalert2'
function AdmminViewQuestions(){
          const [getQustions,setQuestions] = useState([]);
          const [getUpdateState,setUpdateState] = useState(false);
          const [getQuestionID,setQuestionid] = useState("")
          const [getQuestion,setQuesrion] = useState("");
          const [getAun1,setAun1]= useState("");
          const [getMark1,setMark1] =useState("");
          const [getAun2,setAun2]= useState("");
          const [getMark2,setMark2] =useState("");
          const [getAun3,setAun3]= useState("");
          const [getMark3,setMark3] =useState("");
          const [getAun4,setAun4]= useState("");
          const [getMark4,setMark4] =useState("");

          const[serQuery,serSerQuery] = useState("");


          const {quizid,quiztitle} = useParams(); 
          
          useEffect(()=>{
                    axios.get("http://localhost:8050/quiz/titles/ViewQuestionsAdmin/"+quizid).then((res)=>{
                   
                    setQuestions(res.data);
          }).catch((err)=>{
                    console.log(err);
          })
          },[deleteQuestion,submitupdateQuestion])
          
          function updateQuestionBTN(e){
                   
                    setUpdateState(true);
                    setQuestionid(e._id);
                    setQuesrion(e.question)
                    setAun1(e.answer1)
                    setMark1(e.answer1Mark)
                    setAun2(e.answer2)
                    setMark2(e.answer2Mark)
                    setAun3(e.answer3)
                    setMark3(e.answer3Mark)
                    setAun4(e.answer4)
                    setMark4(e.answer4Mark)
          }

          function submitupdateQuestion(e){
                    e.preventDefault();
       
                    const newQuestion = {
                              question : e.target[0].value,
                               answer1 : e.target[1].value,
                               answer1Mark : e.target[2].value,
                               answer2 : e.target[3].value,
                               answer2Mark : e.target[4].value,
                               answer3 : e.target[5].value,
                               answer3Mark : e.target[6].value,
                               answer4 : e.target[7].value,
                               answer4Mark : e.target[8].value,
                               
                    }

                    console.log(e.target);

                    axios.patch("http://localhost:8050/quiz/titles/ViewQuestionsAdmin/"+quizid+"/updatequestion/"+ getQuestionID,newQuestion).then((res)=>{
                              Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your Qustion has been Updated',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
                              setUpdateState(false)
                              console.log(res);
                    }).catch((err)=>{
                              console.log(err);
                    })

 
          }

          function deleteQuestion(e){

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
                                  'success',axios.delete("http://localhost:8050/quiz/titles/ViewQuestionsAdmin/"+quizid+"/deletequestion/"+e).then((res)=>{
                                       
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
                                  'Your qustion is safe :)',
                                  'error'
                                )
                              }
                            })

                    console.log("delete   : "+e)
                    
          }

          function qChange(e){setQuesrion(e.target.value) }
          function a1AunChange(e){setAun1(e.target.value) }
          function a1MarkChange(e){setMark1(e.target.value) }
          function a2AunChange(e){setAun2(e.target.value)}
          function a2MarkChange(e){setMark2(e.target.value) }
          function a3AunChange(e){setAun3(e.target.value)}
          function a3MarkChange(e){setMark3(e.target.value)}
          function a4AunChange(e){setAun4(e.target.value) }
          function a4MarkChange(e){setMark4(e.target.value)}
         
          function searchfun(e){
                    console.log(e.target.value)
                    serSerQuery(e.target.value);
          }
          
          return(<div>
           <Nav />
                    
                    <div className="mt-10"><h1 className="text-6xl font-bold text-center underline">{quiztitle}</h1></div>

          <section class="vh-50 gradient-custom">
                    <div class="container py-5 h-50">
                      <div class="row justify-content-center align-items-center h-100">
                        <div class=" col-xl-12">
                          <div class="card shadow-2-strong card-registration" style={{borderRadius: 15+"px"}}>
                            <div class="card-body p-4 p-md-5">
                            


                            <div class="row">
                                  <div class="col-md-6 mb-4 font-medium text-xl underline">

                                  <h3>Manage Questions</h3>

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
                        <th scope="col">Q No</th>
                        <th scope="col">Question</th>
                        <th scope="col">Answer 1</th>
                        <th scope="col">A1 Mark</th>
                        <th scope="col">Answer 2</th>
                        <th scope="col">A2 Mark</th>
                        <th scope="col">Answer 3</th>
                        <th scope="col">A3 Mark</th>
                        <th scope="col">Answer 4</th>
                        <th scope="col">A4 Mark</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                              getQustions.filter(items=>

                              items.question.toLowerCase().includes(serQuery)
                              ).map(function(item,index){
                                        return(<tr scope="row">
                                                  <td>{index+1}</td>
                                                  <td>{item.question}</td>
                                                  <td>{item.answer1}</td>
                                                  <td>{item.answer1Mark}</td>
                                                  <td>{item.answer2}</td>
                                                  <td>{item.answer2Mark}</td>
                                                  <td>{item.answer3}</td>
                                                  <td>{item.answer3Mark}</td>
                                                  <td>{item.answer4}</td>
                                                  <td>{item.answer4Mark}</td>
                                                  <td><button class="btn btn-warning" onClick={e=>updateQuestionBTN(item)}><i class="bi bi-pen-fill"></i></button></td>
                                                  <td><button class="btn btn-danger" onClick={e=>deleteQuestion(item._id)}><i class="bi bi-trash-fill"></i></button></td>
                                        </tr>)
                              })
                    }
                    </tbody>
                    </table>

                    <br/><br/>

                    {/* {!getUpdateState || <form onSubmit={submitupdateQuestion}>
                              <label for="Question">Question : </label>
                               <input type="text" id="Question" name="Question" value={getQuestion} onChange={qChange}/><br/><br/>

                              <label for="Answers1" >Answers 1</label>
                              <input type="text" id="Answers1" name="Answers1" value={getAun1} onChange={a1AunChange}/>
                              <label for="Marks1">Marks</label>
                              <input type="number" id="Marks1" name="Marks1" value={getMark1} onChange={a1MarkChange}/><br/><br/>

                              <label for="Answers2">Answers 2</label>
                              <input type="text" id="Answers2" name="Answers2" value={getAun2} onChange={a2AunChange}/>
                              <label for="Marks2">Marks</label>
                              <input type="number" id="Marks2" name="Marks2" value={getMark2} onChange={a2MarkChange}/><br/><br/>

                              <label for="Answers3">Answers 3</label>
                              <input type="text" id="Answers3" name="Answers3" value={getAun3} onChange={a3AunChange} />
                              <label for="Marks3">Marks</label>
                              <input type="number" id="Marks3" name="Marks3" value={getMark3} onChange={a3MarkChange}/><br/><br/>
                              
                              <label for="Answers4">Answers 4</label>
                              <input type="text" id="Answers4" name="Answers4" value={getAun4} onChange={a4AunChange}/>
                              <label for="Marks4">Marks</label>
                              <input type="number" id="Marks4" name="Marks4" value={getMark4} onChange={a4MarkChange}/><br/><br/>

                              <input type="submit" value="Add Question"/>
                    </form>} */}

                    
                    {!getUpdateState || <div className="bg-white border rounded editbox border-secondary ">
                    <h4 class="mb-4 pb-2 pb-md-0 mb-md-5 font-medium text-xl underline">Update Question</h4> 
                    <form onSubmit={submitupdateQuestion}>
                              <div class="row">
                                  <div class="col-md-12 mb-4 d-flex align-items-center">

                                    <div class="form-outline datepicker w-100">
                                      <input type="text" class="form-control form-control-lg" id="Question" value={getQuestion} onChange={qChange} />
                                      <label for="Question" class="form-label ">Question</label>
                                    </div>
                                  </div>
                                
                                </div>


                                <div class="row">
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="text" id="Answers1" class="form-control form-control-lg" value={getAun1} onChange={a1AunChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Answers1 ">Answers 1</label>
                                    </div>

                                  </div>
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="number" id="Marks1" class="form-control form-control-lg" value={getMark1} onChange={a1MarkChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Marks1 ">Mark</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="text" id="Answers2" class="form-control form-control-lg" value={getAun2} onChange={a2AunChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Answers2 ">Answers 2</label>
                                    </div>

                                  </div>
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="number" id="Marks2" class="form-control form-control-lg" value={getMark2} onChange={a2MarkChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Marks2 ">Mark</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="text" id="Answers3" class="form-control form-control-lg" value={getAun3} onChange={a3AunChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Answers3 ">Answers 3</label>
                                    </div>

                                  </div>
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="number" id="Marks3" class="form-control form-control-lg" value={getMark3} onChange={a3MarkChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Marks3 ">Mark</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="text" id="Answers4" class="form-control form-control-lg" value={getAun4} onChange={a4AunChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Answers4 ">Answers 4</label>
                                    </div>

                                  </div>
                                  <div class="col-md-6 mb-4">

                                    <div class="form-outline">
                                      <input type="number" id="Marks4" class="form-control form-control-lg" value={getMark4} onChange={a4MarkChange}/>
                                      <label class="form-label font-medium text-gray-600" for="Marks4 ">Mark</label>
                                    </div>
                                  </div>
                                </div>


                                

                              
                                <div class="mt-4 pt-2">
                                  <input class="btn btn-lg  px-4 py-2 font-bold text-white bg-yellow-500 border border-yellow-600 rounded hover:bg-yellow-700" type="submit" value="Update Question" />
                                 
                                 
                                </div>

                              </form> </div>}


                             


                    </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

          </div>)
}

export default AdmminViewQuestions;