import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Question from "../component/Question";

function Questions(){
          const {quizid,quiztitle} = useParams();

          const [getQustions,setQuestions] = useState([]);
          const [getmarks,setmarks] =useState([]);
          const [getAllMarks,setAllMarks] = useState(0);

          useEffect(()=>{
                    axios.get("http://localhost:8050/quiz/titles/ViewQuestionsAdmin/"+quizid).then((res)=>{
                   
                    setQuestions(res.data);
          }).catch((err)=>{
                    console.log(err);
          })
          },[])

          console.log(getQustions);

          function getMark(e){

                    const found = getmarks.find(obj =>{
                      return obj.id === e.id
                    })
                  
                    const marks = {
                      id :e.id,
                      mark :e.mark
                     }
                  
                    if(found){
                      found.mark =e.mark;
                      console.log(found);
                  
                    }else{
                      setmarks([marks, ...getmarks]);
                    }
                  
                  }

          function sublitAuns(){
                    const allqus = getQustions.length;
                    const didqua = getmarks.length;
                
                    if(allqus === didqua){
                      
                
                      const marks = (getmarks.reduce((a,v) =>  a = a + v.mark , 0 ))
                      

                      const fullmark = Math.floor((marks /(allqus*10))*100);
                      alert(fullmark);

                    /////////////////////////////////

                    const newResults = {
                      quizId : quizid,
                      quizName : quiztitle,
                      results : fullmark
                  }

                  axios.post("http://localhost:8050/quiz/addresults", newResults,{
                      headers: {
                        'Authorization': "bearer "+localStorage.getItem('acctoken')
                      }
                    }).then((res)=>{
                        if(res){
                          console.log(res.data.userName);
                         // alert(fullmark);
                         window.location.href = '/resultsview/'+res.data.userName+'/'+quiztitle+'/'+fullmark ;
                        }
                    }).catch((err) => {
                      console.log(err);
                    })

                    /////////////////////////////////
                      
                
                    }else{
                      alert("You have complete");
                    }
                }
          

          return(<div>
                    <h1>{quiztitle}</h1>
                    <br/>
                   {getQustions.map(qus =>{ return(<Question question={qus}  getMarkFormQuistion={getMark}/>)})}

                    <br/>
                    <br/>
                    <button onClick={sublitAuns}>Submit Aunswers</button>
                    <br/><br/>

          </div>)
}

export default Questions;

