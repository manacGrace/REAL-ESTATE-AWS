import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/aboutUs/Will.css";

function AboutWill() {
  return (
    <div className="divWill">
      <Container>
        <Row>
          <Col>
            <img className="imagesWill" src="https://github.com/manacGrace/REAL-ESTATE-AWS/REAL-ESTATE-AWS-SERVICES/blob/main/seed/pictures/picsAboutUs/picsWill/gengar.jpg?raw=true" alt="Image Will" />
          </Col>
          <Col xs={8}>
            <div>
              <h1 id="titleTextWill">
                Ha-Vu-William <br /> Nguyen
              </h1>
              <p id="textWill">
              Nous développons un site web de vente de maisons. 
              Notre projet permet aux utilisateurs de consulter et explorer 
              différentes propriétés à vendre.  <br /> 
              Nous sommes une équipe de trois étudiants.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutWill;