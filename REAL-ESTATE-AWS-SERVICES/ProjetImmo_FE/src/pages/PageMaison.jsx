import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/PageMaison.css";
import { handleLike } from "../utils/likeUtils";
import {loadMaison} from "../utils/apiService.js"

function PageMaison() {
  const { idMaison } = useParams();
  const navigate = useNavigate();

  const [maison, setMaison] = useState({});


  const loadHouse = async () => {
    const maison = await loadMaison(idMaison);
    setMaison(maison)
  }

  useEffect(() => {
    loadHouse();
  }, []);


  return (
    <div className="divPageMaison">
      <Container>
        <Row className="Row01">
          <Col className="ColAddressMaison">
            <h1 id="maisonVendre">Maison à vendre </h1>
            <p id="address">
              {maison.address}, {maison.region?.nameRegion}
            </p>
          </Col>
          <Col className="ColPriceMaison">
            {maison.price} $
            <i 
              className="bx bx-heart" 
              onClick={(e) => handleLike(e, idMaison, navigate)}
              style={{ 
                cursor: 'pointer', 
                color: '#ff0000', 
                fontSize: '30px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#5b0000'}
              onMouseLeave={(e) => e.target.style.color = '#ff0000'}
            ></i>
          </Col>
        </Row>
        <Row className="Row02">
          <Col className="ColImageMaison" xs={8}>
            <Card.Img
              className="pageMaisonImagePrincipalMaison"
              variant="top"
              src={maison.linkImage}
            />
          </Col>
          <Col className="Col2ImageMaison" xs={4}>
            <Row className="RowImageMaisonSecondaire">
              <Card.Img
                className="pageMaisonImageSecondaireMaison"
                variant="top"
                src={maison.linkImage}
              /> 
            </Row>
            <Row className="RowImageMaisonSecondaire">
              <Card.Img
                className="pageMaisonImageSecondaireMaison2"
                variant="top"
                src={maison.linkImage}
              />
            </Row>
          </Col>
        </Row>

        <Row className="Row03">
          <Col className="ColMap" xs={3}>
            <div id="mapIconDiv">
              Carte
              <i className="bx bx-map-alt"></i>
            </div>
          </Col>
        </Row>
        <Row className="Row04">
          <Col className="ColCaracteristiques" xs={3}>
            <h1 id="caracteristiquesDiv">Caractéristiques</h1>
          </Col>
        </Row>
        <Row className="Row05 RowRowsAllRows">
          <Col className="ColMargin">
            <h1>Superficie du terrain</h1>
            <p>{maison.area} pc</p>
          </Col>
          <Col className="ColMargin">
            <h1>Nombre de pieces</h1>
            <p>
              {maison.nbRoom} <i className="bx bxs-package"></i>
            </p>
          </Col>
          <Col className="ColMargin">
            <h1>Nombre de chambres</h1>
            <p>
              {maison.nbBedroom} <i className="bx bx-bed"></i>
            </p>
          </Col>
          <Col className="ColMargin">
            <h1>Nombre de toilettes</h1>
            <p>
              {maison.nbToilet} <i className="bx bx-shower"></i>
            </p>
          </Col>
        </Row>

        <Row className="Row06 RowRowsAllRows">
          <Col className="ColMargin">
            <h1>Temporibus autem</h1>
            <p>
              Praesent suscipit molestie sem, vitae hendrerit tortor semper ut.
            </p>
          </Col>
          <Col className="ColMargin">
            <h1>Praesentium voluptatum</h1>
            <p>Suspendisse ultricies, ante et dictum facilisis.</p>
          </Col>
          <Col className="ColMargin">
            <h1>Reprehenderit qui</h1>
            <p>
              Pellentesque volutpat sem pellentesque nunc euismod malesuada.
            </p>
          </Col>
          <Col className="ColMargin">
            <h1>Dignissimos ducimus</h1>
            <p>Integer faucibus nibh quis ligula consectetur dignissim.</p>
          </Col>
        </Row>

        <Row className="Row07 RowRowsAllRows">
          <Col className="ColMargin" xs={10}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam iaculis lectus, eget commodo lacus eleifend non.
              Suspendisse non nunc dictum, ultricies velit sed, blandit mi. Duis
              massa nibh, ultrices quis rhoncus a, luctus sed nisl. Aliquam et
              magna nibh. Vestibulum egestas metus eu nulla maximus, ac ultrices
              lorem ornare. Aliquam sit amet tellus nec felis maximus iaculis.
              Aenean sollicitudin ante augue, ultrices fermentum enim
              pellentesque feugiat. Suspendisse in molestie purus. Donec
              consectetur rhoncus elit, vitae mattis nunc tempor nec. Etiam non
              nisl molestie, tincidunt purus a, dapibus lacus. Sed rutrum neque
              purus, vitae facilisis ex tincidunt nec. Donec nec justo quis ex
              rhoncus faucibus id et eros. Nunc consectetur viverra sem eleifend
              imperdiet. Cras placerat nisi sapien, cursus tincidunt leo blandit
              eu. Proin quis luctus ex, vitae pulvinar mi. Nullam gravida
              gravida porta. Morbi rutrum sem sit amet diam faucibus vestibulum.
            </p>
          </Col>
        </Row>

        <Row className="Row08 RowRowsAllRows">
          <Col className="ColMargin"></Col>
          <Col className="ColMargin"></Col>
          <Col className="ColMargin"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageMaison;