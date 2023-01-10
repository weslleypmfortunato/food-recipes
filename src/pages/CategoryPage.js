import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './CategoryPage.css'
import AdSense1 from "../components/AdSense1";
import Footer from "../components/Footer";
import Loading4 from '../assets/images/gifs/loading4.gif'

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const CategoryPage = () => {
  const { categoryGroup } = useParams()
  const [ recipes, setRecipes ] = useState([])
  const [ filteredRecipes, setFilteredRecipes] = useState("")

  useEffect(() => {
    axios.get(apiURL)
      .then(response => {
        setRecipes(response.data)
        const categoryRecipes = response.data.filter(recipe => {
          return (recipe.category === categoryGroup)
        })
        setFilteredRecipes(categoryRecipes)
      }).catch(err => console.log(err))
  }, [categoryGroup])

  return ( 
    <div className="CookiesPage">
      <MainNavbar />
      <SecondNavbar />
      <AdSense1 />
      <h2 style={{color: "black"}}>All {categoryGroup} recipes in one place</h2>
      
      <table>
        <tbody>
          <tr className="single-category">
            { filteredRecipes.length === 0 ? 
              <div>
                <p>Working to bring you the most delicious recipes</p>
                <img src={Loading4} alt="Loading GIF" className="gif" />
              </div>
              :         
            filteredRecipes.map(filteredCookie => {
                return (
                  <td key={filteredCookie._id} className="divisor">
                    <div className="category-recipes">
                      <h5 style={{fontSize: "1rem", marginTop: "10px", textAlign: "center"}} className="category-subtitle"><b>{ filteredCookie.name }</b></h5>
                      <Link to={`/recipes/${ filteredCookie._id }`}><img src={ filteredCookie.imageUrl } alt="..." className="category-recipes-img"/></Link>
                      <div className="category-servings-preparation">
                        <p className="category-servings-nomargin"><b>Servings:</b> { filteredCookie.servings }</p>
                        <p className="category-preparation-nomargin"><b>Preparation Time:</b> { filteredCookie.prepationTime }</p>
                      </div>
                    </div>
                  </td>
                )
              }) 
            } 
          </tr>
        </tbody>
      </table>
      <AdSense1 />
      <Footer />
    </div>
   );
}
 
export default CategoryPage;