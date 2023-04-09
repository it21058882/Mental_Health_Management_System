import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddQuizTitle from './QuizManagement/addQuizTitle';
import AddQuestions from "./QuizManagement/addQuestion";

//Articles
import AddArticles from "./ArticleManagement/addArticle";
import ViewArticles from "./ArticleManagement/viewArtical";

const page = createBrowserRouter([ 
  { path: "/addquiztitle", element: <AddQuizTitle/>,  },
  { path: "/addquestions/:quiztitleid", element: <AddQuestions/>,  },


  ////Article////////////////
  { path: "/addarticle", element: <AddArticles/>,  },
  { path: "/viewarticle", element: <ViewArticles/>,  },


]);



function App() {
  return (

    <React.StrictMode>


    <RouterProvider router={page} />
   




  </React.StrictMode>





  );
}

export default App;
