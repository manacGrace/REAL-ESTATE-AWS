import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/aboutUs/Manasse.css";

function AboutManasse() {
  return (
    <div className="divManasse">
      <Container>
        <Row>
          <Col>
            <h1 id="titleTextManasse">
              Manassé <br /> Teg <br /> Gbegnohou
            </h1>
            <p id="textManasse">
              Nous développons un site web de vente de maisons. 
              Notre projet permet aux utilisateurs de consulter et explorer 
              différentes propriétés à vendre.  <br /> 
              Nous sommes une équipe de trois étudiants.
            </p>
          </Col>{/* 
          <Col>
            <img
              className="imagesManasse"
              src="https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/picsAboutUs/picsManasse/manasse01.jpg?raw=true"
              alt="Image Manasse"
            />
          </Col> */}
          <Col>
            <img
              className="imagesManasse"
              src="https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/picsAboutUs/picsManasse/manasse07.jpg?raw=true"
              alt="Image Manasse"
            />  
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutManasse;