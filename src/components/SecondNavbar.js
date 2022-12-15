import { Link } from "react-router-dom";

const SecondNavbar = () => {
  

  return ( 
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "white"}}>
      <div className="container-fluid">
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{minWidth: "300px"}}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Cookies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Chicken</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Beef</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Health Food</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Finger Food</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Drinks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Salads</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Pasta</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Fish & Sea</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">Soup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">All Recipes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);
}
 
export default SecondNavbar;