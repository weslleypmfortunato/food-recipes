import './SecondNavbar.css'
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  
  return ( 
    <nav className='SecondNav'>
      <input type="checkbox" id="toggler" />
      <label for="toggler"><i className="ri-menu-line"></i></label>
      <div className='menu'>
        <ul className='second-nav-list'>
          <li className="nav-item">
            <Link to={"/recipes/category/cookies"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Cookies</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/chicken"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Chicken</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/beef"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Beef</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/pork"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Pork</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/health food"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Health Food</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/fingerfood"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Finger Food</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/drinks"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Drinks</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/salad"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Salads</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/pasta"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Pasta</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/fish&sea"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Fish & Sea</Link>
          </li>
          <li className="nav-item">
            <Link to={"/recipes/category/soup"} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>Soup</Link>
          </li>
          <li className="nav-item">
            <Link to={'/recipes'} className="second-nav-link" aria-current="page" style={{backgroundColor: "white"}}>All Recipes</Link>
          </li>
        </ul>
      </div>
    </nav>
);
}
 
export default SecondNavbar;