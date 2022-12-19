import { Link } from "react-router-dom";
import logo from '../assets/images/logo1.png'
import './MainNavbar.css'

const MainNavbar = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return ( 
    <nav style={{backgroundColor: "#FF0403", width: "100vw"}}>
      <div className="MainNavibar">
        <div className="mainnavbar-items" id="navbarSupportedContent">
          <Link to={'/'} ><img src={ logo } alt="Logo" className="logo"/></Link>
          <ul className="list">
            <li className="mainnavbar-links">
              <Link to={'/new-recipe'} style={{color: "white", backgroundColor: "#FF0403"}}>SEND A RECIPE</Link>
            </li>
            <li className="mainnavbar-links">
              <Link to={'/signup'} style={{color: "white", backgroundColor: "#FF0403"}}>SIGN UP</Link>
            </li>
            <li className="mainnavbar-links">
              <Link to={'/login'} style={{color: "white", backgroundColor: "#FF0403"}}>LOG IN</Link>
            </li>
            <li className="mainnavbar-links">
              <Link style={{color: "white", backgroundColor: "#FF0403"}}>ABOUT US</Link>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="search-group" role="search">
            <input 
              className="form-control me-2 search-bar" 
              type="search" 
              placeholder="Search for a recipe  🥕🧄🌽" 
              aria-label="Search" 
              style={{width: "250px"}}/>
            <button 
              className="btn btn-success search-btn" 
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