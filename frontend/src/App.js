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
import Questions from "./QuizManagement/user/Questions";
import ResultsView from "./QuizManagement/user/resulsView";
import UserProgress from "./QuizManagement/admin/userProgress";

import AddDoctor from "./DoctorManagement/addDoctor";
import Doctor from "./DoctorManagement/DoctorPreview";
import Home from "./components/Home/Home";
import Updatedoctor from "./DoctorManagement/updateDoctor";
import DoctorPreviewUser from "./DoctorManagement/DoctorPreviewUser";
import ChannelForm from "./DoctorManagement/channelForm";
import DoctorFront from "./DoctorManagement/DoctorFront";
//Articles
import AddArticles from "./ArticleManagement/addArticle";
//import ViewArticles from "./ArticleManagement/viewArtical";
import UpdateArticles from "./ArticleManagement/updateArticle";
//import ClientViewArticles from "./ArticleManagement/ClientViewArticle";
//import ArticleFullView from "./ArticleManagement/ArticleFullView";

//NavBar and Footer
import Nav from "./Ui/nav";
import Footer from "./Ui/footer";


//User
import Login from "./user/login";
import RegisterUser from "./user/registerUser";
import UserProfile from "./user/profile";
import EditProfile from "./user/editProfile";


const page = createBrowserRouter([


  { path: "/admin", element: <AdminHomePage />, },
  { path: "/userprogress", element: <UserProgress />, },
  { path: "/addquiztitle", element: <AddQuizTitle />, },
  { path: "/addquestions/:quiztitleid/:quiztitle", element: <AddQuestions />, },
  { path: "/adminviewquiz", element: <AdminQuizzesPage />, },
  { path: "/amminview/:quizid/:quiztitle", element: <AdmminViewQuestions />, },

  { path: "/quiz", element: <Quiz />, },
  { path: "/questions/:quizid/:quiztitle", element: <Questions />, },
  { path: "/resultsview/:username/:quiztitle/:results", element: <ResultsView />, },

  ////Article////////////////
  { path: "/addarticle", element: <AddArticles />, },
  //{ path: "/viewarticle", element: <ViewArticles />, },
  { path: "/updatearticle/:id", element: <UpdateArticles />, },
  //{ path: "/article&book", element: <ClientViewArticles />, },
  //{ path: "/articlefullview/:id", element: <ArticleFullView />, },


  ///////     User   ////////
  { path: "/", element: <Login />, },
  { path: "/registerUser", element: <RegisterUser />, },
  { path: "/userprofile", element: <UserProfile />, },
  { path: "/editprofile", element: <EditProfile />, },

  //doctor.//
  { path: "/addDoctor", element: <AddDoctor />, },
  { path: "/DoctorPreview", element: <Doctor />, },
  { path: "/updatedoctor/:id", element: <Updatedoctor />, },
  { path: "/doctorpreviewuser/", element: <DoctorPreviewUser />, },
  { path : "DoctorFront" , element : <DoctorFront />,},

  ////// Ui ////////
  { path: "/home", element: <Home />, },
  { path: "/channelForm/:id", element: <ChannelForm />, },

]);



function App() {
  return (

    <React.StrictMode>
      {/* <Nav /> */}
      <RouterProvider router={page} />
      <Footer />

    </React.StrictMode>

  );
}

export default App;
