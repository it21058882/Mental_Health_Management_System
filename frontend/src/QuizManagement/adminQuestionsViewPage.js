import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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


          const {quizid} = useParams(); 
          
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
                              alert(res);
                              console.log(res);
                    }).catch((err)=>{
                              console.log(err);
                    })


          }

          function deleteQuestion(e){
                    console.log("delete   : "+e)
                    axios.delete("http://localhost:8050/quiz/titles/ViewQuestionsAdmin/"+quizid+"/deletequestion/"+e).then((res)=>{
                              alert(res.data);
                    }).catch((err)=>{
                              console.log(err);
                    })
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
         

          
          return(<div>
          {quizid}
                    <table>

                    {
                              getQustions.map(function(item,index){
                                        return(<tr>
                                                  <td>Question {index+1}</td>
                                                  <td>{item.question}</td>
                                                  <td>{item.answer1}</td>
                                                  <td>{item.answer1Mark}</td>
                                                  <td>{item.answer2}</td>
                                                  <td>{item.answer2Mark}</td>
                                                  <td>{item.answer3}</td>
                                                  <td>{item.answer3Mark}</td>
                                                  <td>{item.answer4}</td>
                                                  <td>{item.answer4Mark}</td>
                                                  <td><button onClick={e=>updateQuestionBTN(item)}>Update Question</button></td>
                                                  <td><button onClick={e=>deleteQuestion(item._id)}>Delete Question</button></td>
                                        </tr>)
                              })
                    }
                    </table>

                    <br/><br/><br/><br/><br/>

                    {!getUpdateState || <form onSubmit={submitupdateQuestion}>
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
                    </form>}


          </div>)
}

export default AdmminViewQuestions;