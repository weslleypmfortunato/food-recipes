import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './CategoryPage.css'

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const CategoryPage = () => {
  const { categoryGroup } = useParams()
  const [ recipes, setRecipes ] = useState([])
  const [ filteredRecipes, setFilteredRecipes] = useState("")

  useEffect(() => {
    axios.get(apiURL)
      .then(response => {
        setRecipes(response.data)
        

        const cookies = response.data.filter(cookie => {
          return (cookie.category === "cookies")
        })
        setFilteredRecipes(cookies)
      }).catch(err => console.log(err))
  }, [categoryGroup])

  console.log(filteredRecipes)

  return ( 
    <div className="CookiesPage">
      <MainNavbar />
      <SecondNavbar />
      <h2 style={{color: "black"}}>All cookies recipes in one place</h2>
      
    
      <table>
        <tbody>
          <tr className="single-category">
            { filteredRecipes.length > 0 ?
            filteredRecipes.map(filteredCookie => {

                return (
                  <td>
                    <div key={filteredCookie._id} className="category-recipes">
                      <h5 style={{fontSize: "1rem", marginTop: "10px", textAlign: "center"}} className="category-subtitle"><b>{ filteredCookie.name }</b></h5>
                      <Link to={`/recipes/${ filteredCookie._id }`}><img src={ filteredCookie.imageUrl } alt="Cookie" className="category-recipes-img"/></Link>
                      <div className="category-servings-preparation">
                        <p className="category-servings-nomargin"><b>Servings:</b> { filteredCookie.servings }</p>
                        <p className="category-preparation-nomargin"><b>Preparation Time:</b> { filteredCookie.prepationTime }</p>
                      </div>
                    </div>
                  </td>
                )
              }) : "No cookies recipes"
            } 
          </tr>
        </tbody>
      </table>
    </div>
   );
}
 
export default CategoryPage;