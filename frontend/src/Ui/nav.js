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
        </div>
    )
}
export default Nav;