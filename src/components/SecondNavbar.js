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
      {/* <h2 className='site-title' >FLAVORS OF THE WORLD</h2> */}
    </nav>






    // {/* <div className="SecondNav">
    //   <nav className="navbar navbar-expand-lg" style={{backgroundColor: "white"}}>
    //     <div className="container-fluid">
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //         style={{minWidth: "300px"}}>
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/cookies"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Cookies</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/chicken"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Chicken</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/beef"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Beef</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/pork"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Pork</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/health food"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Health Food</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/fingerfood"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Finger Food</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/drinks"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Drinks</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/salad"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Salads</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/pasta"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Pasta</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/fish&sea"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Fish & Sea</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={"/recipes/category/soup"} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>Soup</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link to={'/recipes'} className="nav-link active" aria-current="page" style={{backgroundColor: "white"}}>All Recipes</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    //   <h1 className='site-title' >FLAVORS OF THE WORLD</h1>
    // </div> */}
);
}
 
export default SecondNavbar;