import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../Ui/nav";

function ResultsView(){
          const {username,quiztitle,results} = useParams();

          const[getstatus,setstatus] = useState('');
          
          
          
          const resu = parseInt(results,10)
          
          function getStatusDis(){
                    if(resu >= 80){
                              setstatus(<div className="h-20 mx-auto bg-green-500 mx-automb-5 w-96 rounded-3xl">
                              <h1 className="p-3 text-4xl font-bold text-center text-white ">Stage 1</h1>
                    </div>)
                    }else if(resu >= 70){
                              setstatus(
                                        <div className="h-20 mx-auto bg-yellow-600 mx-automb-5 w-96 rounded-3xl">
                                        <h1 className="p-3 text-4xl font-bold text-center text-white ">Stage 2</h1>
                              </div>   
                              )
                    }else if(resu >= 50){
                              setstatus(
                                        <div className="h-20 mx-auto bg-amber-700 mx-automb-5 w-96 rounded-3xl">
                                        <h1 className="p-3 text-4xl font-bold text-center text-white ">Stage 3</h1>
                              </div>    
                              )
                    }else{
                              setstatus(
                                        <div className="h-20 mx-auto bg-fuchsia-900 mx-automb-5 w-96 rounded-3xl">
                                        <h1 className="p-3 text-4xl font-bold text-center text-white ">Stage 4</h1>
                              </div>     
                              ) 
                    }

          }
          

          useEffect(()=>{
                    
                    getStatusDis()
                  },[]);

          
          function trynew(){
                    window.location.href = '/quiz'
          }

          function backTohome(){
                    window.location.href = '/home'
          }

      


          
          return(<div className="m-14 shadow-current">
            <Nav />
          <div className="w-[800px] m-auto bg-yellow-50  rounded-3xl ">
          
          
         
          
          <h1 className="pt-16 text-5xl font-bold text-center underline ">{quiztitle} Results</h1>
          <h1 className="font-extrabold text-center text-[170px]">{results}%</h1>

          <h1 className="text-4xl font-bold text-center">Hello {username},</h1>
          <h1 className="mb-4 text-2xl font-bold text-center">You are in</h1>

          
          {getstatus}

         

         

          
          
          
          
           <h1 className="px-20 mx-auto mt-4 text-xs tracking-wider text-center ">Certainly! A mental health quiz is a tool designed to assess and evaluate various aspects of an individual's mental well-being. It typically consists of a series of questions that cover a wide range of topics related to mental health, such as emotions, thoughts, behaviors, and overall psychological functioning. The purpose of a mental health quiz is to provide individuals with insights into their mental health status, identify potential areas of concern, and prompt further exploration or professional help if needed. These quizzes can cover different mental health conditions, including anxiety, depression, stress, self-esteem, and others, and are often used as a preliminary screening tool to gauge one's mental health and offer guidance on potential next steps. It's important to note that while mental health quizzes can provide valuable information, they should not replace a formal diagnosis or consultation with a mental health professional.</h1>
          
           <div className="flex justify-center mt-6">
           <button  className="px-4 py-2 m-6 font-bold text-white bg-yellow-600 rounded-full hover:bg-yellow-900" onClick={trynew}>Try new Quiz <i className="font-bold bi bi-arrow-counterclockwise"></i></button>
           <button  className="px-4 py-2 m-6 font-bold text-white bg-green-600 rounded-full hover:bg-green-900" onClick={backTohome}>Back to Home <i class="bi bi-house"></i></button>
           </div>
         
           </div>
          </div>)
}

export default ResultsView;