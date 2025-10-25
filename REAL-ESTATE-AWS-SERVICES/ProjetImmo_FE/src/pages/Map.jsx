import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../css/Map.css";
import {getAllHouses} from "../utils/apiService.js"

mapboxgl.accessToken = "pk.eyJ1IjoiYXltZW5rZXIiLCJhIjoiY204NnN5a3c5MDhibDJucTI1bDB6OWVxYSJ9.tqc4NvYlnClE6JsXQK9zhw";

function Map() {
  const [tabMaisons, setMaisons] = useState([]);

  const loadHouses = async () => {
    const maisons = await getAllHouses();
    setMaisons(maisons);
  }
  
  useEffect(() => {
    loadHouses()
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-73.5673, 45.5017],
      zoom: 10,
    });

    map.addControl(new mapboxgl.NavigationControl());

    const addMarkers = () => {
      if (Array.isArray(tabMaisons)) {
        tabMaisons.forEach((maison) => {
          const marker = new mapboxgl.Marker()
            .setLngLat([maison.longitude, maison.latitude])
            .addTo(map);

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="mapbox-popup-content">
              <a className="linkToMaison" href="/maison~a~vendre/${maison.idMaison}" class="linkToMaison">
                <img src="${maison.linkImage}" alt="maison" style="width: 100%; border-radius: 5px;">
              </a>
              <h4 id="prixMaison">${maison.price} $</h4>
              <p>${maison.address}</p>
              <p>Chambres: ${maison.nbRoom}, Salles de bain: ${maison.nbToilet}</p>
              <p>Région: ${maison.region?.nameRegion}</p> 
            </div>
          `);

          marker.setPopup(popup);
        });
      }
    };

    map.on('load', addMarkers());
  }, [tabMaisons]);

  return (
    <div className="galerieMessageDic">
      <h1 id="textMap">{tabMaisons.length} Maisons Trouvées </h1>
      <div id="map"></div>
    </div>
  );
}

export default Map;