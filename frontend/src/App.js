import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AdminHomePage from "./adminHomePage";
import AddQuizTitle from './QuizManagement/addQuizTitle';
import AddQuestions from "./QuizManagement/addQuestion";
import AdminQuizzesPage from "./QuizManagement/adminQuizzesPage";
import AdmminViewQuestions from "./QuizManagement/adminQuestionsViewPage";

//Articles
import AddArticles from "./ArticleManagement/addArticle";
import ViewArticles from "./ArticleManagement/viewArtical";

const page = createBrowserRouter([ 
  { path: "/", element: <AdminHomePage/>,  },
  { path: "/addquiztitle", element: <AddQuizTitle/>,  },
  { path: "/addquestions/:quiztitleid/:quiztitle", element: <AddQuestions/>,  },
  { path: "/adminviewquestions", element: <AdminQuizzesPage/>,  },
  { path: "/amminview/:quizid/:quiztitle", element: <AdmminViewQuestions/>,  },


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
