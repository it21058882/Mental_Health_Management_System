import React from "react";

function Nav() {

  function logout() {
    localStorage.setItem('acctoken', "")

    localStorage.setItem('userID', "")

    window.location.href = '/';
  }



  return (
    <div>
      <nav className="px-2 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <a className="text-xl font-bold text-white" href="/">
              HAPPYlife
            </a>
            <div className="flex items-center">
              <ul className="flex space-x-4">
                <li>
                  <a className="text-white" href="/home">
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
                  <a className="text-white" href="">
                    Fun Games
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/article&book">
                    Articles &amp; Books
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/userprofile">
                    Profile
                  </a>
                </li>
              </ul>
              <form className="flex ml-4">
                <input
                  className="border-2 border-gray-500 rounded-l-lg form-input focus:outline-none focus:border-gray-700"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="px-4 py-2 font-bold text-white bg-gray-700 rounded-r-lg hover:bg-gray-800"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <a href="/">
                <button onClick={logout} className="px-4 py-2 ml-4 font-bold text-white bg-gray-700 rounded-lg hover:bg-gray-800">
                  Logout
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav >
    </div >
  );
}

export default Nav;
