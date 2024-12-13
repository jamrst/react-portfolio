import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-5 bg-dark rounded">
      {/* Container for overall footer layout */}
      <Container>
        <Row>
          {/* Column for copyright information */}
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} jamrst</p>
          </Col>
          {/* Column for social media links (right-aligned on medium screens) */}
          <Col md={6} className="text-md-end">
            {/* Link to GitHub profile */}
            <a href="https://github.com/jamrst">
              <img src="../../git.png" alt="GitHub" width="24" height="24" />
            </a>{" "}
            {/* Add a space between icons */}
            {/* Add space between icons */}
            <a href="https://www.linkedin.com/in/jorge-montes-de-oca-ba42b0a1/">
              <img
                src="../../linkedin.png"
                alt="LinkedIn"
                width="24"
                height="24"
              />
            </a>{" "}
            {/* Add a space between icons */}
            {/* Link to Twitter profile (replace x.png with the actual Twitter icon) */}
            <a href="https://twitter.com/jamrst">
              <img src="../../x.png" alt="Twitter" width="24" height="24" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
