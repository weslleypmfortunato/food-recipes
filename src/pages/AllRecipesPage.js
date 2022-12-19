import './AllRecipesPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import SecondNavbar from '../components/SecondNavbar'

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const AllRecipesPage = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get(apiURL)
      .then(response => {
        setRecipes(response.data)
      }).catch(err => console.log(err))
  }, [])

  return ( 
    <div className="AllRecipesPage">
      <MainNavbar />
      <SecondNavbar />
      <h2 style={{color: "black"}}>All recipes in one place</h2>
        <table className="table">
          <tbody>
            <tr className='single-recipe'>
              {
                recipes.map(recipe => {
                  return(
                    <td>
                      <div key={recipe._id} className='recipes'>
                        <h5 style={{fontSize: "1rem", marginTop: "10px", textAlign: "center"}}><b>{ recipe.name }</b></h5>
                        <Link to={`/recipes/${recipe._id}`}><img src={ recipe.imageUrl } alt="The dish ready" className='all-recipes-img'/></Link>
                        <div className="servings-preparation">
                          <p className='servings-nomargin'><b>Servings:</b> { recipe.servings }</p>
                          <p className='preparation-nomargin'><b>Preparation Time:</b> { recipe.prepationTime }</p>
                        </div>
                      </div>
                    </td>
                  )
                  })
                }
            </tr>
          </tbody>
        </table>
    </div>
   );
}
 
export default AllRecipesPage;