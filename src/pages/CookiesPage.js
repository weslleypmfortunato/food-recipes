import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const CookiesPage = () => {
  const { categoryGroup } = useParams()
  const [ recipes, setRecipes ] = useState([])

  useEffect(() => {
    axios.get(`${apiURL}/${categoryGroup}`)
      .then(response => {
        setRecipes(response.data)
      }).catch(err => console.log(err))
  }, [categoryGroup])

  return ( 
    <div className="CookiesPage">
      <MainNavbar />
      <SecondNavbar />
      <h2 style={{color: "black"}}>All cookies recipes in one place</h2>
    
      <table>
        <tbody>
          <tr className="single-cookie">
            { recipes.category === "cookies" ?
            recipes.map(cookie => {

              {/* fez a consulta, faz um filter, pega todas as categorias cookies e guarda num novo estado */}
                return (
                  <td>
                    <div key={cookie._id} className="cookies-recipes">
                      <h5><b>{ cookie.name }</b></h5>
                      <Link to={`/recipes/${ cookie._id }`}><img src={ cookie.imageUrl } alt="Cookie" className="all-cookies-img"/></Link>
                      <div className="cookies-servings-preparation">
                        <p className="cookies-servings-nomargin"><b>Servings:</b> { cookie.servings }</p>
                        <p className="cookies-preparation-nomargin"><b>Preparation Time:</b> { cookie.prepationTime }</p>
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
 
export default CookiesPage;