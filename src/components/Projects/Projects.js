import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Currency Conveter"
              description="Experience the convenience of quick currency conversions with our Currency Calculator project. Crafted with a blend of JavaScript for dynamic functionality and HTML/CSS for a sleek user interface, this project simplifies currency conversion tasks with ease. Seamlessly switch between currencies and instantly view accurate conversion rates, empowering users to effortlessly navigate global transactions. Whether you're a seasoned traveler or a savvy investor, our Currency Calculator provides a user-friendly solution for all your currency conversion needs"
              ghLink="https://github.com/Mkhannn/Currency-Converter.git"
              demoLink="https://mkhannn.github.io/Currency-Converter/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Shop-it MERN Project"
              description="Backend development phase: Completed, tested, and ready for integration with the frontend.
              Frontend development: In progress, utilizing ReactJS. API endpoints for fetching data from the backend have been implemented, with focus on enhancing user interface and experience. E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet. Shop-IT is built with this purpose in mind, enabling users to browse, select, and purchase products online."
              ghLink="https://github.com/Mkhannn/Shop-IT-mern.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="About ME - Github"
              description="Welcome to my GitHub profile! I'm passionate about coding and love to explore the endless possibilities of web development. Join me on my coding journey as I continue to learn, innovate, and collaborate with the global developer community. Let's build the future together, one line of code at a time!"
              ghLink="https://github.com/Mkhannn/Mkhannn.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
