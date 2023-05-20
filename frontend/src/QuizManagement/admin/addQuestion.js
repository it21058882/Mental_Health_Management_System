import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import Nav from "../../Ui/AdminNavBar";
function AddQuestions() {

  const [getQuestions, setQuestions] = useState([]);
  const [getTableState, setTableState] = useState(true);

  const { quiztitleid, quiztitle } = useParams();

  useEffect(() => {


    axios.get("http://localhost:8050/quiz/titles/ViewQuestionsAdmin/" + quiztitleid).then((res) => {

      setQuestions(res.data);
    }).catch((err) => {
      console.log(err)
    })


  }, [submitQuestion]);


  console.log(getQuestions);





  function submitQuestion(e) {
    e.preventDefault();



    const newQuestion = {
      question: e.target[0].value,
      answer1: e.target[1].value,
      answer1Mark: e.target[2].value,
      answer2: e.target[3].value,
      answer2Mark: e.target[4].value,
      answer3: e.target[5].value,
      answer3Mark: e.target[6].value,
      answer4: e.target[7].value,
      answer4Mark: e.target[8].value,
      quizTitleId: quiztitleid
    }



    axios.post("http://localhost:8050/quiz/addquestion", newQuestion).then(function (res) {
      if (res) {


        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data,
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res.data)
        setTableState(false);

        e.target[0].value ="";
        e.target[1].value ="";
       e.target[2].value ="";
      e.target[3].value ="";
      e.target[4].value ="";
      e.target[5].value ="";
      e.target[6].value ="";
      e.target[7].value ="";
      e.target[8].value ="";


      }
    })




  }

  function publishquiz() {
    window.location.href = '/adminviewquiz';
  }


  return (
    <div>
       <Nav />

      {/* {quiztitleid} */}

      
      <div className="mt-12 mb-8"><h1 className="text-6xl font-bold text-center underline">{quiztitle}</h1></div>


      {getTableState || <section class="vh-50 gradient-custom">
        <div class="container py-5 h-50">
          <div class="row justify-content-center align-items-center h-100">
            <div class=" col-xl-12">
              <div class="card shadow-2-strong card-registration" style={{ borderRadius: 15 + "px" }}>
                <div class="card-body p-4 p-md-5">
                  <table class="table table-striped">

                    <thead>
                      <tr>
                        <th scope="col">Q No</th>
                        <th scope="col">Question</th>
                        <th scope="col">Answer 1</th>
                        <th scope="col">A1 Mark</th>
                        <th scope="col">Answer 2</th>
                        <th scope="col">A2 Mark</th>
                        <th scope="col">Answer 3</th>
                        <th scope="col">A3 Mark</th>
                        <th scope="col">Answer 4</th>
                        <th scope="col">A4 Mark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getQuestions.map(function (item, index) {
                        return (<tr scope="row">
                          <td>{index + 1}</td>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
      {/* <br/> <br/> <br/>
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
                    <br/>
                    <button onClick={publishquiz}>Publish  Quiz</button> */}



      <section class="vh-100 gradient-custom">
        <div class="container ">
          <div class="row justify-content-center align-items-center h-10">
            <div class="col-xl-7">
              <div class="card shadow-2-strong card-registration" style={{ borderRadius: 15 + "px" }}>
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 font-medium text-xl underline">Add Questions</h3>
                  <form onSubmit={submitQuestion}>
                    <div class="row">
                      <div class="col-md-12 mb-4 d-flex align-items-center">

                        <div class="form-outline datepicker w-100">
                          <input type="text" class="form-control form-control-lg" id="Question" required />
                          <label for="Question" class="form-label font-medium text-gray-600">Question</label>
                        </div>
                      </div>

                    </div>


                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="Answers1" class="form-control form-control-lg " required/>
                          <label class="form-label font-medium text-gray-600" for="Answers1 ">Answers 1</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="number" id="Marks1" class="form-control form-control-lg" required />
                          <label class="form-label font-medium text-gray-600" for="Marks1">Mark</label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="Answers2" class="form-control form-control-lg" required/>
                          <label class="form-label font-medium text-gray-600" for="Answers2">Answers 2</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="number" id="Marks2" class="form-control form-control-lg" required/>
                          <label class="form-label font-medium text-gray-600" for="Marks2">Mark</label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="Answers3" class="form-control form-control-lg" required/>
                          <label class="form-label font-medium text-gray-600" for="Answers3">Answers 3</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="number" id="Marks3" class="form-control form-control-lg" required />
                          <label class="form-label font-medium text-gray-600" for="Marks3">Mark</label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="Answers4" class="form-control form-control-lg" required/>
                          <label class="form-label font-medium text-gray-600" for="Answers4">Answers 4</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="number" id="Marks4" class="form-control form-control-lg" required/>
                          <label class="form-label font-medium text-gray-600" for="Marks4">Mark</label>
                        </div>
                      </div>
                    </div>





                    <div class="mt-4 pt-2">
                      <input class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit" value="Add Question" />

                      <input className='float-right px-4 py-2 font-bold text-white bg-yellow-500 border border-yellow-600 rounded hover:bg-yellow-700' type="button" onClick={publishquiz} value="Publish  Quiz" />

                    </div>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>


  )
}

export default AddQuestions;