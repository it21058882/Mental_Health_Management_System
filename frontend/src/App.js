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
import AddArticles from "./ArticleManagement/addArticle";
import ViewArticles from "./ArticleManagement/viewArtical";
import UpdateArticles from "./ArticleManagement/updateArticle";
import ClientViewArticles from "./ArticleManagement/ClientViewArticle";
import ArticleFullView from "./ArticleManagement/ArticleFullView";

//NavBar and Footer
import Nav from "./Ui/nav";
import Footer from "./Ui/footer";


//User
import Login from "./user/login";


const page = createBrowserRouter([

  { path: "/admin", element: <AdminHomePage />, },
  { path: "/addquiztitle", element: <AddQuizTitle />, },
  { path: "/addquestions/:quiztitleid/:quiztitle", element: <AddQuestions />, },
  { path: "/adminviewquiz", element: <AdminQuizzesPage />, },
  { path: "/amminview/:quizid/:quiztitle", element: <AdmminViewQuestions />, },

  { path: "/quiz", element: <Quiz />, },


  ////Article////////////////
  { path: "/addarticle", element: <AddArticles />, },
  { path: "/viewarticle", element: <ViewArticles />, },
  { path: "/updatearticle/:id", element: <UpdateArticles />, },
  { path: "/article&book", element: <ClientViewArticles />, },
  { path: "/articlefullview/:id", element: <ArticleFullView />, },



  ///////     User   ////////
  { path: "/", element: <Login />, },


  //doctor.//
  { path: "/addDoctor", element: <AddDoctor />, },
  { path: "/DoctorPreview", element: <Doctor />, },


  ////// Ui ////////
  { path: "/home", element: <Home />, },

]);



function App() {
  return (

    <React.StrictMode>
      <Nav />
      <RouterProvider router={page} />
      <Footer />
    </React.StrictMode>

  );
}

export default App;
