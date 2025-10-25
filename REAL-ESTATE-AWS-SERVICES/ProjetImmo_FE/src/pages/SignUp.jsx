import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";
import {signUp} from "../utils/apiService.js"

function SignUp() {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    const resultData = signUp(user);
    if (resultData) {
      navigate("/SignIn")
    }
    // axios
    //   .post(`http://localhost:8888/user/signUp`, user)
    //   .then(() => {
    //     navigate("/SignIn");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Prénom</label>
            <input
              type="text"
              name="firstName"
              placeholder="Entrez votre prénom"
              required
              onChange={handleChange}
              value={user.firstName}
            />
          </div>

          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="lastName"
              placeholder="Entrez votre nom"
              required
              onChange={handleChange}
              value={user.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              required
              onChange={handleChange}
              value={user.email}
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
              value={user.password}
            />
          </div>

          <div className="form-group">
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              required
              onChange={handleChange}
              value={user.confirmPassword}
            />
          </div>

          <button className="buttonSingUp" type="submit">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;