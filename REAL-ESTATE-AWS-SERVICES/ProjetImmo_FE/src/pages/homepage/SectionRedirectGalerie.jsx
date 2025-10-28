import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SectionRedirectGalerie() {
  var listmaison = [
    {
      idMaison: 14,
      photo: "https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/maisonsGalerie/maison14.jpg?raw=true",
      region: "Longueuil",
    },
    {
      idMaison: 15,
      photo: "https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/maisonsGalerie/maison15.jpg?raw=true",
      region: "Montreal",
    },
    {
      idMaison: 20,
      photo: "https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/maisonsGalerie/maison20.jpg?raw=true",
      region: "Laval",
    },
    {
      idMaison: 25,
      photo: "https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/maisonsGalerie/maison25.jpg?raw=true",
      region: "Laval",
    },
  ];

  return (
    <div>
      <div className="divPricipalSectionRedirectGalerie">
        <div className="divSecondaireSectionRedirectGalerie">
          <h1 id="textAVendre">À VENDRE :</h1>

          <div className="galerieMainDiv2">
            <div className="galerieCardsDiv2">
              {listmaison.map((variant) => (
                <Card className="generatedCards2" key={variant.idMaison}>
                  <Link to={`/maison~a~vendre/${variant.idMaison}`}>
                    <Card.Img className="imgRedirectPage" variant="top" src={variant.photo} />
                  </Link>

                  <ListGroup className="list-group-flush2">
                    <ListGroup.Item className="listGoupItemRedirect">
                      {variant.region}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              ))}
            </div>
          </div>

          <center>
            <div className="divBtnAfficherGalerie">
              <button id="boutonAfficherGallerie">
                <Link to="/galerie">Afficher toutes les maisons</Link>
              </button>
            </div>
          </center>

          <div className="sectionPetitText">
            <Container>
              <Row>
                <Col>
                  <h1 id="petitTextTitle">Pourquoi ce projet ?</h1>
                  <p id="petitText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Col>
                <Col>
                  <h1 id="petitTextTitle">Comment ?</h1>
                  <p id="petitText">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab.
                  </p>
                </Col>
                <Col>
                  <h1 id="petitTextTitle">Quels membres d'equipes?</h1>
                  <p id="petitText">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionRedirectGalerie;