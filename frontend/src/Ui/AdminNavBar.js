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
                        <div className="flex items-center" >
                            <ul className="flex space-x-4">
                                <li>
                                    <a className="text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="/userprogress">
                                        Quiz Progress
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="/adminviewquiz">
                                        Quiz
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="/">
                                        Doctor
                                    </a>
                                </li>

                                <li >
                                    <a className="text-white" href="/viewarticle">
                                        Articles & Books
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
                </div>
            </nav>
        </div>
    );
}

export default Nav;
