import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Photo from "../assets/photo.png";

// Functional component to display the "About Me" section
function AboutMe() {
  return (
    <section className="text-bg-secondary p-3" id="about">
      {/* Container for the entire section */}
      <Container>
        {/* Row to organize the content into two columns */}
        <Row>
          {/* Column for the profile picture */}
          <Col md={4}>
            <img
              src={Photo}
              alt="Your Name"
              className="img-fluid rounded-circle"
            />
          </Col>
          {/* Column for the text content */}
          <Col md={8}>
            <h2>About Me</h2>
            <p>
              Hi, I'm Jorge Montes de Oca! I'm a passionate web developer with a
              keen eye for design and a love for coding. I'm skilled in React,
              JavaScript, HTML, CSS PostgresSQL, Networking and Cloud. I enjoy
              building innovative web applications and solving complex problems.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
