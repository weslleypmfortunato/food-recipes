import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="RecipeDetailsPage">
      <MainNavbar />
      <SecondNavbar />
      <div>
        {
          recipe && <>
            <div>
              <img src={ recipe.imageUrl } alt="Recipe Detail" />
            </div>
            <div>
              <h3>{ recipe.name }</h3>
              <p><b>Preparation Time:</b> { recipe.prepationTime }</p>
              <p><b>Servings:</b> { recipe.servings }</p>
              <p><b>Prepared by:</b> { recipe.owner }</p>
              <p><b>Ingredients:</b> { `${recipe.ingredients.quantity} ${recipe.ingredients.ingredient}`}</p>
              <p><b>Steps: </b>{ `${recipe.steps.stepNum} ${recipe.steps.toDo}`}</p>
              <p><b>Nutrition:</b> { `${recipe.nutrition.nutritionQty} ${recipe.nutrition.nutritionUnit}`}</p>
            </div>
          </>
        }
      </div>
    </div>
   );
}
 
export default RecipeDetailsPage;