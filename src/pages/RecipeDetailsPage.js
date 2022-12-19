import './RecipeDetailsPage.css'
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const RecipeDetailsPage = () => {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    axios.get(`${apiURL}/${recipeId}`)
      .then(response => {
        setRecipe(response.data)
      }).catch(err => console.log(err))
  }, [recipeId])

  return ( 
    <div className="RecipeDetailsPage_and_btn">
      <div className="RecipeDetailsPage">
        <MainNavbar />
        <SecondNavbar />
        <div className='detailed-recipe'>
          {
            recipe && <>
              <div className='title-img'>
                <h3>{ recipe.name }</h3>
                <img src={ recipe.imageUrl } alt="Recipe Detail" className='detailed-img'/>
              </div>
              <div className='detailed-info'>
                <p><b>Preparation Time:</b> { recipe.prepationTime }</p>
                <p><b>Servings:</b> { recipe.servings }</p>
                <p><b>Prepared by:</b> { recipe.owner }</p>
                <h5 style={{margin: "20px"}}>Ingredients:</h5>
                {
                  recipe.ingredients.map((condiment, condimentIndex) => {
                    return (
                      <div>
                        <p key={condimentIndex}><span>{ condiment.quantity }</span> - { condiment.ingredient }</p>
                      </div>
                    )
                  })
                }
                <h5 style={{margin: "20px"}}>Steps:</h5>
                {
                  recipe.steps.map((stepByStep, stepIndex) => {
                    return (
                      <div>
                        <p key={stepIndex}><span>{ stepByStep.stepNum} - </span> { stepByStep.toDo }</p>
                      </div>
                    )
                  })
                }
      
                <h5 style={{margin: "20px"}}>Nutrition Facts:</h5>
                {
                  recipe.nutrition.map((nutritionInfo, nutritionIndex) => {
                    return (
                      <div>
                        <p key={nutritionIndex}><span>{ nutritionInfo.nutritionQty } </span> { nutritionInfo.nutritionUnit } </p>
                      </div>
                    )
                  })
                }
                <Link to={`/edit/${recipeId}`}>
                  <button type="button" className="btn btn-danger edit-btn">Edit Recipe</button>
                </Link>
              </div>
            </>
          }
        </div>
      </div>
    </div>
   );
}
 
export default RecipeDetailsPage;