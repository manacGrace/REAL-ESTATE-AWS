import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/aboutUs/Manasse.css";

function AboutManasse() {
  return (
    <div className="divManasse">
      <Container>
        <Row className="rowManasse">
          <Col xs={12} md={6}>
            <h1 id="titleTextManasse">
              Manassé <br /> Teg <br /> Gbegnohou
            </h1>
            <p id="textManasse">
              Nous développons un site web de vente de maisons. 
              Notre projet permet aux utilisateurs de consulter et explorer 
              différentes propriétés à vendre.  <br /> 
              Nous sommes une équipe de trois étudiants.
            </p>
          </Col>
          <Col xs={12} md={6} className="colImageManasse">
            <div className="image-wrapper-manasse">
              <img
                className="imagesManasse"
                src="https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/picsAboutUs/picsManasse/manasse07.jpg?raw=true"
                alt="Image Manasse"
              />
              <div className="github-link-container">
                <i className="bx bxl-github"></i>
                <a href="https://github.com/manacGrace" target="_blank" rel="noopener noreferrer" className="github-username">
                  @manacGrace
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutManasse;