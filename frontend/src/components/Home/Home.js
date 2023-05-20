import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../../Assets/mental.png";
//import homeLogo from "../../Assets/Images";
import Nav from "../../Ui/nav";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Carousel from "./Carousels";


function Home() {
  return (
    <section>

      <Nav />
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <br />
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                We are
                <strong className="main-name"> Help to Recover Your Mental</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", fontSize: 45 }}>
                <Type />
              </div>
              <div style={{ padding: 50, textAlign: "left", fontSize: 45 }}>
                <Carousel />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
