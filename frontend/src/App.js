import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddQuizTitle from './QuizManagement/addQuizTitle';
import AddQuestions from "./QuizManagement/addQuestion";

//Articles
import AddArticles from "./ArticleManagement/addArticle";

const page = createBrowserRouter([ 
  { path: "/addquiztitle", element: <AddQuizTitle/>,  },
  { path: "/addquestions/:quiztitleid", element: <AddQuestions/>,  },


  ////Article////////////////
  { path: "/addarticle", element: <AddArticles/>,  },


]);



function App() {
  return (

    <React.StrictMode>


    <RouterProvider router={page} />
   




  </React.StrictMode>





  );
}

export default App;
