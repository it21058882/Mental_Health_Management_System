import { useEffect, useState } from "react";
import axios from "axios";

function Quiz(){

          const[getTitles,setTitles] = useState([])
          const[serQuery,serSerQuery] = useState("");

          function quizTitle(){
                    axios.get("http://localhost:8050/quiz/titles").then((res)=>{
                                        console.log(res.data);
                                        setTitles(res.data);
                              }).catch((err)=>{
                                        console.log(err)
                              })
          }
          

          useEffect(()=>{
                    quizTitle(); 
          },[])


          
                    console.log(getTitles)



           function searchfun(e){
                     console.log(e.target.value)
                     serSerQuery(e.target.value);
           }

           function selectQuiz(e){
                console.log(e._id);
                window.location.href = '/questions/'+e._id+"/"+e.title ;
           }
           
          return(<div>


                            <div class="input-group mb-3">
                            <input type="text" class="form-control" onChange={searchfun} placeholder= "Search Quiz name" aria-label="Search Quiz name" aria-describedby="basic-addon2"/>
                            
                            </div>


                    <div  class="row1">
                    {
                              getTitles .filter(items=>

                              items.title.toLowerCase().includes(serQuery)
                              ).map(function(item,index){
                                        return(
                                                   
                                                     <div class="card col-md-3">
                                                            <div class="card-body">
                                                            {/* <h4 class="card-title"  onClick={e=>selectQuiz(item)}>{item.title}</h4> */}
                                                            <h4 class="card-title" onClick={e=>selectQuiz(item)}>{item.title}</h4>
                                                                
                                                             </div>
                                                            

                                                   </div>
                                        )
  
                              })
                    }
                    </div>
          </div>)
}
export default Quiz;