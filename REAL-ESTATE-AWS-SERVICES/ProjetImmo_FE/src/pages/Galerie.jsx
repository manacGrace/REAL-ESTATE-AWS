import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/Galerie.css';
import { handleLike } from '../utils/likeUtils';
import { getAllHouses } from '../utils/apiService.js';

function Galerie() {
  const [tabMaisons, setMaisons] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(null);
  const [filterByRegion, setFilterByRegion] = useState(null);
  const [minBedrooms, setMinBedrooms] = useState(1);
  const [minToilets, setMinToilets] = useState(1);
  const navigate = useNavigate();

  const loadHouses = async () => {
    const maisons = await getAllHouses();
    setMaisons(maisons);
  };

  useEffect(() => {
    loadHouses();
  }, []);

  const resetFilters = () => {
    setSortByPrice(null);
    setFilterByRegion(null);
    setMinBedrooms(1);
    setMinToilets(1);
  };

  let filteredMaisons = [...tabMaisons];

  if (filterByRegion) {
    filteredMaisons = filteredMaisons.filter(
      (maison) => maison.region?.nameRegion === filterByRegion
    );
  }

  filteredMaisons = filteredMaisons.filter(
    (maison) =>
      (minBedrooms === 1 || maison.nbBedroom === minBedrooms) &&
      (minToilets === 1 || maison.nbToilet === minToilets)
  );

  if (sortByPrice === 'asc') {
    filteredMaisons.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === 'desc') {
    filteredMaisons.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="galerieMainDiv">
      <div className="galerieMessageDic">
        <h1>Galerie</h1>
      </div>
      <Row id="dropdown-filter-row">
        <Dropdown data-bs-theme="dark" className="dropdown-filter">
          <Dropdown.Toggle id="dropdown-filter" variant="success">
            Filtre et Trie
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="dropdown-item">
              <label>Chambres: </label>
              <input
                type="number"
                min="1"
                max="5"
                value={minBedrooms}
                onChange={(e) => setMinBedrooms(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className="dropdown-item">
              <label>Toilettes: </label>
              <input
                type="number"
                min="1"
                max="5"
                value={minToilets}
                onChange={(e) => setMinToilets(parseInt(e.target.value) || 0)}
              />
            </div>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setFilterByRegion('Montreal')}>
              Montreal
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterByRegion('Terrebonne')}>
              Terrebonne
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterByRegion('Longueuil')}>
              Longueuil
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterByRegion('Boucherville')}>
              Boucherville
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterByRegion('Varrennes')}>
              Varennes
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setSortByPrice('desc')}>
              Prix décroissant
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortByPrice('asc')}>
              Prix croissant
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={resetFilters}>
              Toutes les maisons
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>

      <div className="divToCenter">
        <div className="galerieCardsDiv">
          <Container>
            <Row>
              {filteredMaisons.map((maison) => (
                <Col key={maison.idMaison} md={3} className="mb-4">
                  <Link className="linkToMaison" to={`/maison~a~vendre/${maison.idMaison}`}>
                    <Card className="generatedCards">
                      <Card.Img variant="top" src={maison.linkImage} />
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item className="listGoupItemGalerie">
                          {maison.price} $
                          <i
                            className="bx bx-heart"
                            onClick={(e) => handleLike(e, maison.idMaison, navigate)}
                            style={{ cursor: 'pointer' }}
                          ></i>
                        </ListGroup.Item>
                        <ListGroup.Item className="textRegionEtchambres">
                          {maison.address}, {maison.region?.nameRegion}
                        </ListGroup.Item>
                        <ListGroup.Item className="textRegionEtchambres">
                          <i className="bx bx-bed"></i> {maison.nbBedroom}
                          <i className="bx bx-shower"></i> {maison.nbToilet} | {maison.area}pc | {maison.nbRoom}{' '}
                          <i className="bx bxs-package"></i>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Galerie;