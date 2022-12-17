import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import './MainNavbar.css'

const MainNavbar = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return ( 
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#FF0403", width: "100vw"}}>
      <div className="container-fluid MainNavibar">
        <Link to={'/'} className="navbar-brand"><img src={ logo } alt="Logo" className="logo"/></Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{minWidth: "180px"}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse testando" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{backgroundColor: "black"}}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color: "white", backgroundColor: "#FF0403"}}>SEND A RECIPE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color: "white", backgroundColor: "#FF0403"}}>REGISTER</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color: "white", backgroundColor: "#FF0403"}}>LOG IN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color: "white", backgroundColor: "#FF0403"}}>ABOUT US</Link>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="🌶 Search for a recipe" 
              aria-label="Search" 
              style={{width: "250px"}}/>
            <button 
              className="btn btn-success" 
              type="submit" 
              style={{color: "black", backgroundColor: "white", borderColor: "lightgray"}}>Search
            </button>
          </form>
        </div>
      </div>
    </nav>
);
}
 
export default MainNavbar;