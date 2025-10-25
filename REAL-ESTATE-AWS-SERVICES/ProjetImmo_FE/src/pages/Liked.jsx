import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../css/Liked.css";
import {deleteLike, loadAllMaisonsLike} from "../utils/apiService.js"
 
function Liked() {
  const [tabMaisons, setMaisons] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('currentUser'));
    if (userData) {
      setUserId(userData.id);
    }
  }, []);

  const handleUnlike = async (e, idMaison) => {
    e.preventDefault();
    try {
      await deleteLike(idMaison, userId)
      const maisons = await loadAllMaisonsLike();
      setMaisons(maisons)
    } catch (error) {
      console.error("Erreur enlever like:", error);
    }
  };
  const loadLikedHouses = async () => {
    const maisons = await loadAllMaisonsLike();
    setMaisons(maisons)
  }
  useEffect(() => {
    if (userId) {
      loadLikedHouses()
    }
  }, [userId]);

  return (
    <div className="galerieMainDiv">
      <div className="galerieMessageDic">
        <h1>Maisons Aimées</h1>
      </div>

      <div className="listeMaisonsContainer">
        {tabMaisons.map((maison) => (
          <Link key={maison.idMaison} className="maisonListeItem" to={`/maison~a~vendre/${maison.idMaison}`}>
            <img src={maison.linkImage} alt="maison" className="maisonMiniature" />
            <div className="maisonInfos">
              <div className="ligne1">
                <strong>{maison.price} $</strong> - {maison.address}, {maison.region?.nameRegion}
              </div>
              <div className="ligne2">
                <i className="bx bx-bed"></i> {maison.nbBedroom} 
                <i className="bx bx-shower" style={{ marginLeft: "10px" }}></i> {maison.nbToilet} 
                | {maison.nbRoom} pièces - {maison.area} pc
              </div>
            </div>
            <i 
              className='bx bx-x' 
              onClick={(e) => handleUnlike(e, maison.idMaison)}
            ></i> 
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Liked;