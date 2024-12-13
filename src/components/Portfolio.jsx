import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  // Array of project objects containing details
  const projects = [
    {
      title: "Employee Tracker",
      image: "../../ET.jpeg",
      description:
        " a command-line application that helps organizations manage their workforce efficiently.",
      liveLink:
        "https://drive.google.com/file/d/1H4HPtGM7olsPCSUDbb62cCBbm-GtuPWF/view",
      githubLink: "https://github.com/jamrst/Employee_Tracker.git",
    },

    {
      title: "Vehicle Builder",
      image: "../../VB.jpeg",
      description:
        " Create and manage different types of vehicles: Car, Truck, Motorbike",
      liveLink:
        "https://drive.google.com/file/d/1FBBcH3khccfE0KorcjSKWYqaJB07PVKG/view",
      githubLink: "https://github.com/jamrst/Vehicle_Builder.git",
    },
    {
      title: "ReadMe Generator",
      image: "../../RMG.jpeg",
      description: "Generates a Professional README.md",
      liveLink:
        "https://drive.google.com/file/d/1Ebcy1afssWTK1yZUZUicZQtkSEgLs7Mv/view",
      githubLink: "https://github.com/jamrst/Professional-ReadMe-Generator.git",
    },
  ];

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col md={12}>
            <h2>Portfolio</h2>
            {/* Display projects in a grid layout */}
            <div className="row">
              {projects.map((project, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      {/* Link to live demo */}
                      <a href={project.liveLink} className="btn btn-primary">
                        Live Demo
                      </a>
                      {/* Link to GitHub repository */}
                      <a
                        href={project.githubLink}
                        className="btn btn-secondary"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
