import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "../../Ui/nav";

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
             <Nav />
                    <h1 className="mt-10 text-5xl font-bold text-center underline">{quiztitle}</h1>
                    <br/>
                   {getQustions.map(qus =>{ return(<Question question={qus}  getMarkFormQuistion={getMark}/>)})}

                    
                    <div className="flex justify-center ">
                    <button onClick={sublitAuns} className="px-4 py-2 m-6 font-bold text-white bg-yellow-600 rounded-full hover:bg-yellow-900">Submit Aunswers</button>
                     </div>
                     <div className="mb-32">
                     <p className="m-auto text-xs text-center w-50">Our mental health is a fundamental part to our overall health and well-being. As a parent, you play a huge role in supporting your child's mental well-being. Nurturing and loving care build a strong foundation, helping your child to develop the social and emotional skills they need to lead a happy, healthy and fulfilled life.  </p>
                     </div>
                    

          </div>)
}

export default Questions;

