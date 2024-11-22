import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col md="auto" className="text-center">
            <h6>
              Developed by {' '}
              <a
                href="https://t.me/denischugunov"
                target="_blank"
                className="text-white me-3"
              >
                Denis Chugunov
              </a>
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
