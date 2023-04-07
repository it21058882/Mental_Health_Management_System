import React, { useState } from 'react'
import axios from "axios";


function AddQuizTitle (){

          const [getTitle,setTitle] = useState("");
          
        


          function submitTitle (){
                    const newTitle  = {
                              title : getTitle
                    }

                    console.log(newTitle);

                    axios.post("http://localhost:8050/quiz/quizTile",newTitle).then(function(res){
                              if(res){
                                        
                                  //alert(res.data);
                                  localStorage.setItem('newTitleID',res.data);
                                  window.location.href = '/addquestions/' +res.data ;
                  
                                 
                                
                              }
                           })
                    
          }

          function titleinsert (e){
                    setTitle(e.target.value);
          }

          return(
                   <div>

                              <h1>Add Quiz</h1>
                              <h3>Quiz Name</h3>
                              <input onChange={titleinsert}/>
                              <button onClick={submitTitle}>Create a Quiz</button>



                   </div>
                              
                    
          )
}

export default AddQuizTitle;