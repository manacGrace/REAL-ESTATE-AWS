import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import ProjetImmo from "./pages/homepage/ProjetImmo";
import Galerie from "./pages/Galerie";
import Map from "./pages/Map";
import NotFound from "./pages/NotFound";
import PageMaison from "./pages/PageMaison";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Initialiser l'état en fonction de la valeur dans localStorage
  const savedMode = localStorage.getItem("dark-mode") === "true";
  const [isDarkMode, setIsDarkMode] = useState(savedMode);

  // Mettre à jour le mode sombre et enregistrer dans localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      // Sauvegarder la préférence dans localStorage
      localStorage.setItem("dark-mode", newMode);
      return newMode;
    });
  };

  // Appliquer le mode sombre ou clair au chargement initial
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div>
        <Routes>
          <Route path="/" element={<ProjetImmo />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/map" element={<Map />} />
          <Route path="/maison~a~vendre/:idMaison" element={<PageMaison/>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Liked" element={<Liked/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;