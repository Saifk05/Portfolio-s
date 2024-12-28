import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.avif";
import projImg2 from "../assets/img/project-img2.avif";
import projImg3 from "../assets/img/project-img3.avif";
import projImg4 from "../assets/img/project-img4.avif";
import projImg5 from "../assets/img/project-img5.avif";
import projImg6 from "../assets/img/project-img6.avif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Full Stack Projects
  const fullStackProjects = [
    {
      title: "Water - Aid (SDG 6 Clean Water and Sanitation)",
      description: "An end-to-end web application for clean water projects with a real-time donation system for sustainable water access.",
      imgUrl: projImg1,
    },
    {
      title: "Travel Booking App",
      description: "A web app to search and book travel destinations with a user-friendly interface and secure payment integration.",
      imgUrl: projImg2,
    },
  ];

  // Machine Learning Projects
  const machineLearningProjects = [
    {
      title: "Automatic Polyp Detection",
      description: "AI-based system for detecting polyps in medical images, using deep learning models for enhanced diagnostic accuracy.",
      imgUrl: projImg3,
    },
    {
      title: "Google Keyword Cost-Per-Click Analyzer",
      description: "Machine learning model to analyze and predict Google Ads CPC trends based on historical data and keywords.",
      imgUrl: projImg4,
    },
  ];

  // Networking Projects
  const networkingProjects = [
    {
      title: "ML-Powered DDoS Detection and Classification",
      description: "An end-to-end machine learning solution for real-time detection and classification of DDoS attacks based on network traffic.",
      imgUrl: projImg5,
    },
    {
      title: "Hybrid AES and DES Encryption Algorithm",
      description: "A project combining AES and DES encryption algorithms for enhanced security, ensuring data confidentiality and integrity.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="text-center">
                    <h2>Projects</h2>
                    <p>Explore my portfolio of work across Full Stack Development, Machine Learning, and Networking. 
                      Each project reflects my commitment to solving real-world challenges through technology, innovation, and creativity.</p>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Machine Learning Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Networking Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="d-flex justify-content-center">
                          {
                            fullStackProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row className="d-flex justify-content-center">
                          {
                            machineLearningProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row className="d-flex justify-content-center">
                          {
                            networkingProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
