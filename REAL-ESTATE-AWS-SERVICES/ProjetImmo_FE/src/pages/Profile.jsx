import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "../css/Profile.css";
import { getUser } from "../utils/apiService.js"

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const userData = JSON.parse(sessionStorage.getItem('currentUser'));

      if (userData && userData.id) {
        const resultData = await getUser(userData.id)
        setUser(resultData);
      } else {
        console.error("Aucun utilisateur trouvé dans sessionStorage");
      }
    } catch (error) {
      console.error("Erreur lors du chargement de l'utilisateur :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    window.location.href = "/";
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    return <div>Utilisateur non trouvé.</div>;
  }

  return (
    <div className="profileMainDiv">
      <div className="profileCard">
        <h1>Profil de {user.firstName} {user.lastName}</h1>
        <div className="profileInfo">
          <p><strong>Prénom :</strong> {user.firstName}</p>
          <p><strong>Nom :</strong> {user.lastName}</p>
          <p><strong>Email :</strong> {user.email}</p>
        </div>
        <button onClick={handleLogout} className="logoutBtn">Se déconnecter</button>
      </div>
    </div>
  );
}

export default Profile;
