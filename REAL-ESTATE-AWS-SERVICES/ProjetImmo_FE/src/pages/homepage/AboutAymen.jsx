import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/aboutUs/Aymen.css";

function AboutAymen() {
  return (
    <div className="divAymen">
      <Container>
        <Row>
          <Col xs={10}>
            <img className="imagesAymen" src="https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/picsAboutUs/picsAymen/image_projetweb.jpg?raw=true"
              alt="Image Aymen" />
          </Col>
          <Col xs={10}>
            <h1 id="titletextAymen">
              Aymen <br /> Kermezli
            </h1>
            <p id="textAymen">
              Nous développons un site web de vente de maisons.
              Notre projet permet aux utilisateurs de consulter et explorer
              différentes propriétés à vendre.  <br />
              Nous sommes une équipe de trois étudiants.

            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutAymen;