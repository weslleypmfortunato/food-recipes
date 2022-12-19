import './SecondNavbar.css'
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  

  return ( 
    <div className="SecondNav">
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "white"}}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{minWidth: "300px"}}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Cookies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Chicken</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Beef</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Pork</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Health Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Finger Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Drinks</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Salads</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Pasta</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Fish & Sea</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Soup</Link>
              </li>
              <li className="nav-item">
                <Link to={'/recipes'} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>All Recipes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>FLAVORS OF THE WORLD</h1>
    </div>
);
}
 
export default SecondNavbar;