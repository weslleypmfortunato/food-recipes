import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo1.png'
import './MainNavbar.css'
import './testeSearch'


const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const MainNavbar = ({setFilteredRecipe}) => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios.get(apiURL)
    .then(response => {
      setRecipes(response.data)
    }).catch(err => console.log(err))
  })

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
              <Link to={'/about'} style={{color: "white", backgroundColor: "#FF0403"}}>ABOUT US</Link>
            </li>

            <li className="mainnavbar-links">
              <div>
                <input 
                  type="text"
                  className='form-control'
                  style={{width: "72px", textAlign: "center"}}
                  placeholder="Type nutrition quantity"
                  aria-label='nutritionQty'
                  aria-describedby='basic-addon1'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  />
                  
                  { search !== "" &&
                    recipes.filter(recipe => {
                    return (recipe.name.toLowerCase().includes(search.toLowerCase())) 
                    }).map((post, index) => (
                      <div className="box" key={index}>
                        <Link to={`/recipes/${post._id}`}>
                          <p>{post.name}</p>
                        </Link>
                      </div>
                    ))
                  }

              </div>
            </li>

          </ul>
       </div>
      </div>
    </nav>
);
}
 
export default MainNavbar;
