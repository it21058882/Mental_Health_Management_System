import { useState } from "react";


function Question(props){

          const qusId = props.question._id;
          
          const question = props.question.question;
          const aun1 = props.question.answer1;
          const aun2 = props.question.answer2;
          const aun3 = props.question.answer3;
          const aun4 = props.question.answer4;

          const aun1Ma = props.question.answer1Mark;
          const aun2Ma = props.question.answer2Mark;
          const aun3Ma = props.question.answer3Mark;
          const aun4Ma = props.question.answer4Mark;

      

          function aun1cli(){
                   
                   const marks = {
                    id :qusId,
                    mark : aun1Ma
                   }
                   props.getMarkFormQuistion(marks);
          }
          function aun2cli(){
                    const marks = {
                              id :qusId,
                              mark : aun2Ma
                             }
                             props.getMarkFormQuistion(marks);
          }
          function aun3cli(){
                    const marks = {
                              id :qusId,
                              mark : aun3Ma
                             }
                             props.getMarkFormQuistion(marks);
          }
          function aun4cli(){
                    const marks = {
                              id :qusId,
                              mark : aun4Ma
                             }
                             props.getMarkFormQuistion(marks);
          }

          return(<div className="w-[1000px] m-auto " >

                    <div className="bg-white rounded-md m-7 p-7">
                    
                   <h2 name={qusId} className="p-2 mb-3 text-lg font-semibold rounded-md bg-slate-200" >{question}</h2>
                    
                    <div className="pt-1 pb-1 pl-5 mb-2 rounded-md bg-slate-50" >
                    <input type="radio" id="aun1" name={qusId} onClick={aun1cli}  />
                     <label for="aun1" >{aun1}</label><br/>
                   </div>

                   <div className="pt-1 pb-1 pl-3 mb-2 rounded-md bg-slate-100">

                     <input type="radio" id="aun2" name={qusId} value={aun2} onClick={aun2cli}/>
                     <label for="aun2">{aun2}</label><br/>

                    </div>

                    <div className="pt-1 pb-1 pl-3 mb-2 rounded-md bg-slate-50">
                     <input type="radio" id="aun3" name={qusId} value={aun3} onClick={aun3cli}/>
                     <label for="aun3">{aun3}</label> <br/>

                   </div>
                   <div className="pt-1 pb-1 pl-5 mb-2 rounded-md bg-slate-100">
                   <input type="radio" id="aun4" name={qusId} value={aun4} onClick={aun4cli}/>
                     <label for="aun4">{aun4}</label> <br/>
                   </div>
                   </div>
          </div>)
}

export default Question;