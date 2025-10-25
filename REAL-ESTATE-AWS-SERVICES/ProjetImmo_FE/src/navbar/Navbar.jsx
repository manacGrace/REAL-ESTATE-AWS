import { Link, useNavigate} from "react-router-dom";
import "../css/Navbar.css";

function Navbar({ toggleDarkMode, isDarkMode }) {

  const navigate = useNavigate();
  const isAuthenticated = !!sessionStorage.getItem("currentUser");

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ padding: "8px 128px" }}
      >
        <div className="container-fluid">
          <Link className="logo" to="/">
            ProjetImmo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/galerie">
                  Galerie
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">
                  Carte
                </Link>
              </li>
                 {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/liked">
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                </>
              )}
            </ul>
            
            <button
              onClick={toggleDarkMode}
              className="btn btn-outline-secondary ms-3"
            >
              {isDarkMode ? "Mode Clair" : "Mode Sombre"}
            </button>

            {!isAuthenticated && (
              <i
                className="bx bx-user-circle"
                onClick={() => navigate('/signIn')}
              ></i>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;