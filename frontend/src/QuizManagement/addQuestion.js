import React, { useState,useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

function AddQuestions (){
          
          const [getQuestions,setQuestions] = useState([]);
         
          const {quiztitleid} = useParams(); 

        //  useEffect(()=>{

                   function newQustionist(){
                              axios.get("http://localhost:8050/quiz/titles/ViewQuestionsAdmin/"+quiztitleid).then((res)=>{
                                        
                                        setQuestions(res.data);
                              }).catch((err)=>{
                                        console.log(err)
                              })

                    }
        //  },[]);         
         
         
console.log(getQuestions);





          function submitQuestion(e){
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
                               quizTitleId : quiztitleid
                    }

                    

                    axios.post("http://localhost:8050/quiz/addquestion",newQuestion).then(function(res){
                              if(res){
                                        
                                  alert(res.data);
                                  console.log(res.data)
                                  newQustionist();
                                
                              }
                           })




          }
          
         
          return(
                   <div>
                 
                    {quiztitleid}
                    <h1>Add Questions</h1>

                    <form>
                              {getQuestions.map(function(item,index){
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

                                        </tr>)
                              })}
                    </form>

                    <form onSubmit={submitQuestion}>
                              <label for="Question">Question : </label>
                               <input type="text" id="Question" name="Question"/><br/><br/>

                              <label for="Answers1">Answers 1</label>
                              <input type="text" id="Answers1" name="Answers1"/>
                              <label for="Marks1">Marks</label>
                              <input type="number" id="Marks1" name="Marks1"/><br/><br/>

                              <label for="Answers2">Answers 2</label>
                              <input type="text" id="Answers2" name="Answers2"/>
                              <label for="Marks2">Marks</label>
                              <input type="number" id="Marks2" name="Marks2"/><br/><br/>

                              <label for="Answers3">Answers 3</label>
                              <input type="text" id="Answers3" name="Answers3"/>
                              <label for="Marks3">Marks</label>
                              <input type="number" id="Marks3" name="Marks3"/><br/><br/>
                              
                              <label for="Answers4">Answers 4</label>
                              <input type="text" id="Answers4" name="Answers4"/>
                              <label for="Marks4">Marks</label>
                              <input type="number" id="Marks4" name="Marks4"/><br/><br/>
                              




                              <input type="submit" value="Add Question"/>
                    </form>







                   </div>
                             
                    
          )
}

export default AddQuestions;