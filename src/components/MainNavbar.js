import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo1.png'
import SearchRecipePage from "../pages/SearchRecipePage";
import './MainNavbar.css'

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const MainNavbar = () => {
  const [recipes, setRecipes] = useState('')
  const [searchRecipes, setSearchRecipes] = ['']

  useEffect(() => {
    axios.get(apiURL)
    .then(response => {
      setRecipes(response.data)
    }).catch(err => console.log(err))
  })

  const searchRecipe = () => {
    axios.get(apiURL)
      .then(response => {
        searchRecipes.filter(recipe => {
          return (recipe.name.toLowerCase().includes(searchRecipes.toLowerCase()))
      })
    })
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

          <SearchRecipePage searchRecipe={ searchRecipe }/>

        </div>
      </div>
    </nav>
);
}
 
export default MainNavbar;