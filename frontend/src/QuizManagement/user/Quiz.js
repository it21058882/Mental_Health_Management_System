import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Ui/nav";

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
           
          return(<div className="h-full">
               <Nav />


                            <div class="input-group w-[700px] pr-52 pt-12 float-right">
                            <input type="text" class="form-control" onChange={searchfun} placeholder= "Search Quiz name" aria-label="Search Quiz name" aria-describedby="basic-addon2"/>
                            
                            </div>

                            <div className="clear-right"><h1 className="text-6xl font-bold text-center underline">Quiz Time</h1></div>

<div className="w-8/12 py-10 mx-auto my-10 bg-white rounded-2xl shadow-current">
                    <div  class="row1">
                    {
                              getTitles .filter(items=>

                              items.title.toLowerCase().includes(serQuery)
                              ).map(function(item,index){
                                        return(
                                                   
                                                     <div class="card col-md-3 !bg-green-200 border-4">
                                                            <div class="card-body">
                                                            {/* <h4 class="card-title"  onClick={e=>selectQuiz(item)}>{item.title}</h4> */}
                                                            <h4 class="card-title text-lg font-semibold" onClick={e=>selectQuiz(item)}>{item.title}</h4>
                                                                
                                                             </div>
                                                            

                                                   </div>
                                        )
  
                              })
                    }
                    
                    </div>
                    </div>
                    <div className="w-8/12 h-1 mx-auto bg-white"></div>
                    <div className="mt-12 mb-12">
                     <p className="m-auto text-xs text-center w-50">Our mental health is a fundamental part to our overall health and well-being. As a parent, you play a huge role in supporting your child's mental well-being. Nurturing and loving care build a strong foundation, helping your child to develop the social and emotional skills they need to lead a happy, healthy and fulfilled life.  </p>
                     </div>
                     <div className="w-8/12 h-1 mx-auto mb-12 bg-white"></div>
                     
          </div>)
}
export default Quiz;