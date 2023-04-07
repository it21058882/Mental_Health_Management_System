import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddQuizTitle from './QuizManagement/addQuizTitle';
import AddQuestions from "./QuizManagement/addQuestion";
import AdminQuizzesPage from "./QuizManagement/adminQuizzesPage";
import AdmminViewQuestions from "./QuizManagement/adminQuestionsViewPage";

const page = createBrowserRouter([ 
  { path: "/addquiztitle", element: <AddQuizTitle/>,  },
  { path: "/addquestions/:quiztitleid", element: <AddQuestions/>,  },
  { path: "/adminviewquestions", element: <AdminQuizzesPage/>,  },
  { path: "/amminview/:quizid", element: <AdmminViewQuestions/>,  },

]);



function App() {
  return (

    <React.StrictMode>


    <RouterProvider router={page} />
   




  </React.StrictMode>





  );
}

export default App;
