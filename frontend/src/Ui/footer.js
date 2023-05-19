function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-dark text-light bg-dark">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem"></i>Box Movies
                                </h6>
                                <p>
                                    Box movies are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Search Term
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Quality:</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Genre:</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Rating:</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Year:</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Language
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">English</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Korean</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Japanese</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">French</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="bi bi-whatsapp"></i> +94 11 241 3901</p>
                                <p><i className="bi bi-telephone-fill"></i> +94 11 754 4801</p>
                                <p>
                                    <i className="bi bi-envelope-fill"></i> info@boxmovies.lk
                                </p>
                                <p><i className="bi bi-geo-alt-fill"></i> SLIIT Malabe Campus, Malabe 10115</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0)" }}>
                    &copy; 2023 Box Movies.com
                </div>
            </footer>
        </div>
    );
}

export default Footer;
