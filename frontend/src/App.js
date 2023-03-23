import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddQuizTitle from './QuizManagement/addQuizTitle';
import AddQuestions from "./QuizManagement/addQuestion";

const page = createBrowserRouter([ 
  { path: "/addquiztitle", element: <AddQuizTitle/>,  },
  { path: "/addquestions/:quiztitleid", element: <AddQuestions/>,  },


]);



function App() {
  return (

    <React.StrictMode>


    <RouterProvider router={page} />
   




  </React.StrictMode>





  );
}

export default App;
