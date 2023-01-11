import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo1.png'
import secondLogo from '../assets/images/logo-noname.png'
import './MainNavbar.css'


const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const MainNavbar = ({setFilteredRecipe}) => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get(apiURL)
    .then(response => {
      setRecipes(response.data)
    }).catch(err => console.log(err))
  })

  return ( 
    <nav style={{backgroundColor: "#FF0403", width: "100vw"}}>
      <div className="mainnavbar" id="navbarSupportedContent">
        <ul className="list">
          <li className="mainnavbar-links">
            <Link to={'/'} ><img src={ logo } alt="Logo" className="logo mainnavbar-links"/></Link>
          </li>
          <li className="mainnavbar-links" id="second-logo">
            <Link to={'/'} ><img src={ secondLogo } alt="Logo" className=" mainnavbar-links"/></Link>
          </li>
          <li className="mainnavbar-links">
            <Link to={'/new-recipe'} style={{color: "white", backgroundColor: "#FF0403"}}>CREATE RECIPE</Link>
          </li>
          <li className="mainnavbar-links">
            <Link to={'/signup'} style={{color: "white", backgroundColor: "#FF0403"}}>SIGN UP</Link>
          </li>
          <li className="mainnavbar-links">
            <Link to={'/login'} style={{color: "white", backgroundColor: "#FF0403"}}>LOG IN</Link>
          </li>
          <li className="mainnavbar-links">
            <Link to={'/about'} style={{color: "white", backgroundColor: "#FF0403"}}>ABOUT US</Link>
          </li>

          <li className="mainnavbar-links">
            <div className="input">
              <input 
                type="text"
                className='form-control search-input'
                id="mysearchbarstyle"
                placeholder="Search for a recipe     🥕🧄🌽"
                aria-label='nutritionQty'
                aria-describedby='basic-addon1'
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
                  
              <div className="search-list">
                { search !== "" &&
                    recipes.filter(recipe => {
                      return (recipe.name.toLowerCase().includes(search.toLowerCase()))
                    }).map((post, index) => (
                      <div className="box" key={index}>
                        <Link to={`/recipes/${post._id}`}>
                          <p style={{color: "black", }} className="search-result">🫑 {post.name}</p>
                        </Link>
                      </div>
                    ))
                  }
              </div>
              </div>
            </li>
          </ul>
       </div>
    </nav>
  );
}
 
export default MainNavbar;
