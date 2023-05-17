import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AdminHomePage from "./adminHomePage";
import AddQuizTitle from './QuizManagement/admin/addQuizTitle';
import AddQuestions from "./QuizManagement/admin/addQuestion";
import AdminQuizzesPage from "./QuizManagement/admin/adminQuizzesPage";
import AdmminViewQuestions from "./QuizManagement/admin/adminQuestionsViewPage";
import Quiz from "./QuizManagement/user/Quiz";
import AddDoctor from "./DoctorManagement/addDoctor";
import Doctor from "./DoctorManagement/DoctorPreview";
import Home from "./Ui/Home";

//Articles
<<<<<<< HEAD
import AddArticles from "./ArticleManagement/addArticle";
import ViewArticles from "./ArticleManagement/viewArtical";
import UpdateArticles from "./ArticleManagement/updateArticle";

=======
//import AddArticles from "./ArticleManagement/addArticle";
//import ViewArticles from "./ArticleManagement/viewArtical";
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364

//User
import Login from "./user/login";


const page = createBrowserRouter([ 
  { path: "/admin", element: <AdminHomePage/>,  },
  { path: "/addquiztitle", element: <AddQuizTitle/>,  },
  { path: "/addquestions/:quiztitleid/:quiztitle", element: <AddQuestions/>,  },
  { path: "/adminviewquiz", element: <AdminQuizzesPage/>,  },
  { path: "/amminview/:quizid/:quiztitle", element: <AdmminViewQuestions/>,  },

  { path: "/quiz", element: <Quiz/>,  },


  ////Article////////////////
<<<<<<< HEAD
  { path: "/addarticle", element: <AddArticles/>,  },
  { path: "/viewarticle", element: <ViewArticles/>,  },
  { path: "/updatearticle", element: <UpdateArticles/>,  },

=======
 // { path: "/addarticle", element: <AddArticles/>,  },
 // { path: "/viewarticle", element: <ViewArticles/>,  },
>>>>>>> 18fe20f46e331c162e34e68da6efb4e5f224b364


  ///////     User   ////////
  { path: "/", element: <Login/>,  },


  //doctor.//
  {path: "/addDoctor", element: <AddDoctor/>,},
  {path: "/DoctorPreview", element: <Doctor/>,},


  ////// Ui ////////
  { path: "/home", element: <Home/>,  },

]);



function App() {
  return (

    <React.StrictMode>

    <RouterProvider router={page} />

  </React.StrictMode>

  );
}

export default App;
