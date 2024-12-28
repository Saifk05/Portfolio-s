import { Container, Row, Col, Button } from "react-bootstrap";
import profileImg from "../assets/img/Logo.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Anu = () => {
  return (
    <section className="header" id="cv">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={profileImg} alt="Profile Image" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Saifali Kalkeri</h1>
                  <h3>Computer Science Student | Aspiring Web Developer</h3>
                  <p>
                    📍 Location: Dharwad, Karnataka, India<br />
                    📧 Email: <a href="kalkerisaif@gmail.com">kalkerisaif@gmail.com</a> <br />
                  </p>
                  {/* Add the Download CV Button */}
                  <a href="/CV.pdf" download>
                    <Button variant="primary">Download CV</Button>
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
