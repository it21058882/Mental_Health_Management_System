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
import AddDoctor from "./DoctorManagement/addDoctor";
import Doctor from "./DoctorManagement/DoctorPreview";
import UpdateDoctor from "./DoctorManagement/updateDoctor";

//Articles
import AddArticles from "./ArticleManagement/addArticle";
import ViewArticles from "./ArticleManagement/viewArtical";
import UpdateArticles from "./ArticleManagement/updateArticle";
//import AddArticles from "./ArticleManagement/addArticle";
//import ViewArticles from "./ArticleManagement/viewArtical";

//User
import Login from "./user/login";


const page = createBrowserRouter([ 
  { path: "/", element: <AdminHomePage/>,  },
  { path: "/addquiztitle", element: <AddQuizTitle/>,  },
  { path: "/addquestions/:quiztitleid/:quiztitle", element: <AddQuestions/>,  },
  { path: "/adminviewquestions", element: <AdminQuizzesPage/>,  },
  { path: "/amminview/:quizid/:quiztitle", element: <AdmminViewQuestions/>,  },


  ////Article////////////////
  { path: "/addarticle", element: <AddArticles/>,  },
  { path: "/viewarticle", element: <ViewArticles/>,  },
  { path: "/updatearticle", element: <UpdateArticles/>,  },
 // { path: "/addarticle", element: <AddArticles/>,  },
 // { path: "/viewarticle", element: <ViewArticles/>,  },

 {path: "/updateDoctor", element: <UpdateDoctor/>,},
  ///////     User   ////////
  { path: "/login", element: <Login/>,  },


  //doctor.//
  {path: "/addDoctor", element: <AddDoctor/>,},
  {path: "/DoctorPreview", element: <Doctor/>,},

]);



function App() {
  return (

    <React.StrictMode>

    <RouterProvider router={page} />

  </React.StrictMode>

  );
}

export default App;
