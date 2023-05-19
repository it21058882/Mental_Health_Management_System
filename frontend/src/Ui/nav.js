<<<<<<< HEAD
function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2 ">
                <div class="container-fluid navpadding">
                    <a class="navbar-brand" href="#">Box Movies</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse px-2" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="viewerHome.jsp">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/quiz">Quiz</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/doctorpreviewUser">Doctor Channel</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Fun Games</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/article&book">Articles & Books</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-light" type="submit"style={{ marginRight: "40px" }} >Search</button>
                                <a href="#">
                                    <button class="btn btn-light navpaddingli" type="boutton">Logout</button>
                                </a>
                        </form>
                    </div>
                </div>
            </nav>
=======
import React from "react";

function Nav() {
  return (
    <div>
      <nav className="bg-gray-900 px-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <a className="text-white text-xl font-bold" href="/">
              HAPPYlife
            </a>
            <div className="flex items-center">
              <ul className="flex space-x-4">
                <li>
                  <a className="text-white" href="/viewerHome.jsp">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/quiz">
                    Quiz
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/doctorpreviewUser">
                    Doctor 
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/">
                    Fun Games
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/article&book">
                    Articles &amp; Books
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    Profile
                  </a>
                </li>
              </ul>
              <form className="ml-4 flex">
                <input
                  className="form-input rounded-l-lg border-2 border-gray-500 focus:outline-none focus:border-gray-700"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-r-lg"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <a href="#">
                <button className="ml-4 py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg">
                  Logout
                </button>
              </a>
            </div>
          </div>
>>>>>>> 8e8547aa5df582e84df60d91312bd0d2c5bb16cf
        </div>
      </nav>
    </div>
  );
}

export default Nav;
