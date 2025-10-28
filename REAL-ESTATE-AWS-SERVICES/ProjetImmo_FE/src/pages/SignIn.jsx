import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/SignIn.css';
import { signIn } from '../utils/apiService.js';

function SignIn() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultData = await signIn(credentials);
      if (resultData > 0) {
        sessionStorage.setItem(
          'currentUser',
          JSON.stringify({
            id: resultData,
            email: credentials.email,
          })
        );
        navigate('/Profile');
      } else {
        toast.error('Mauvais mot de passe ou email !', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {}
  };

  return (
    <div className="signin-container">
      <div className="signin-form-wrapper">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              required
              onChange={handleChange}
              value={credentials.email}
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              required
              onChange={handleChange}
              value={credentials.password}
            />
          </div>
          <button type="submit" name="login">
            Se connecter
          </button>
        </form>
        <div className="signin-footer">
          <p>Pas encore de compte ?</p>
          <button onClick={() => navigate('/signUp')}>S'inscrire</button>
        </div>
      </div>
      <div className="signin-image-container">
        <img
          src="https://raw.githubusercontent.com/manacGrace/REAL-ESTATE-AWS/refs/heads/main/REAL-ESTATE-AWS-SERVICES/seed/pictures/maisonsGalerie/maison01.jpg?raw=true"
          alt="Image de login"
        />
      </div>
    </div>
  );
}

export default SignIn;