import axios from "axios";
import React, { useEffect, useState } from "react";


function AdminQuizzesPage(){
          const[getTitles,setTitles] = useState([]);

          useEffect(()=>{
                    function loadQuestions(){
                              axios.get("http://localhost:8050/quiz/titles").then((res)=>{
                                        console.log(res.data);
                                        setTitles(res.data);
                              }).catch((err)=>{
                                        console.log(err)
                              })
          
                            
                    }loadQuestions()
          },[])

          function addQuizbtn(){
                    window.location.href = '/addquiztitle' ;
          }
          function pakoo(e){
                    console.log(e);
                    window.location.href = '/amminview/'+e ;
          }

          function deleteQuiz(e){
                    alert(e)
          }
         
          
          return(<div>
                    <table>
                    {
                              getTitles.map(function(item,index){
                                        return(<tr>
                                                  <td>{index+1}</td>
                                                  <td onClick={e=>pakoo(item._id)}>{item.title}</td>
                                                  <td><button onClick={e=>deleteQuiz(item._id)}>Delete Quiz</button></td>
                                        </tr>)
                              })
                    }

                    </table>

                    <button onClick={addQuizbtn}>Add Quiz</button>
          </div>);

}

export default AdminQuizzesPage;