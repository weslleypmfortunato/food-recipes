import './NewRecipePage.css'
import MainNavbar from "../components/MainNavbar";
import SecondNavbar from "../components/SecondNavbar";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdSense1 from '../components/AdSense1';
import Footer from '../components/Footer';

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const NewRecipePage = () => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [prepationTime, setPrepationTime] = useState('')
  const [servings, setServings] = useState('')
  const [owner, setOwner] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [quantity, setQuantity] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [steps, setSteps] = useState([])
  const [toDo, setToDo] = useState('')
  const [stepNum, setStepNum] = useState('') 
  const [nutrition, setNutrition] = useState([])
  const [nutritionQty, setNutritionQty] = useState('')
  const [nutritionUnit, setNutritionUnit] = useState('') 

  const navigate = useNavigate()

  const addIngredients = () => {
    const newIngredient = {
      ingredient,
      quantity
    }
    setIngredients([...ingredients, newIngredient])
    setQuantity('')
    setIngredient('')
  }

  const addSteps = () => {
    const newStep = {
      stepNum,
      toDo
    }
    setSteps([...steps, newStep])
    setStepNum("")
    setToDo('')
  }

  const addNutrition = () => {
    const newNutrition = {
      nutritionQty,
      nutritionUnit
    }
    setNutrition([...nutrition, newNutrition])
    setNutritionQty('')
    setNutritionUnit('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newRecipe = {name, imageUrl, prepationTime, servings, owner, category, ingredients, steps, nutrition}

    axios.post(apiURL, newRecipe)
      .then(response => {
        setName('')
        setImageUrl('')
        setPrepationTime('')
        setServings('')
        setOwner('')
        setCategory('')
        setIngredients('')
  
        navigate('/login')
      }).catch(err => console.log(err))
  }


  return ( 
    <div className="NewRecipePage">
      <div class="adsense">
        <MainNavbar />
        <SecondNavbar />
        <AdSense1 />
      </div>
      <h2 style={{color: "black", marginTop: "32px", textAlign: "center"}}>Add a new recipe</h2>
      <form onSubmit={ handleSubmit } className='form'>
        <div className="input-group-sm flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Title: </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Type the recipe's title" 
            aria-label="Title" 
            aria-describedby="addon-wrapping"
            value={name}
            onChange={ e => setName(e.target.value) }
            />
        </div>

        <div className="input-group-sm flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Imagem URL: </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Type the image's URL" 
            aria-label="ImageUrl" 
            aria-describedby="addon-wrapping"
            value={imageUrl}
            onChange={ e => setImageUrl(e.target.value) }
            />
        </div>

        <div className="input-group-sm flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Prep. Time: </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Type the preparation time (eg. 2 h 10 minutes)" 
            aria-label="PreparationTime" 
            aria-describedby="addon-wrapping"
            value={prepationTime}
            onChange={ e => setPrepationTime(e.target.value) }
            />
        </div>

        <div className="input-group-sm flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Servings: </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Type the servings' quantity" 
            aria-label="Servings" 
            aria-describedby="addon-wrapping"
            value={servings}
            onChange={ e => setServings(e.target.value) }
            />
        </div>

        <div className="input-group-sm flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Prepared by: </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Type your name and surname" 
            aria-label="Owner" 
            aria-describedby="addon-wrapping"
            value={owner}
            onChange={ e => setOwner(e.target.value) }
            />
        </div>

        <div className="input-group-sm flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Group: </span>
          <select 
            className="new-recipe-select" 
            aria-label=".form-select-sm example"
            value={category}
            onChange={ e => setCategory(e.target.value) }>
            <option>Choose one category</option>
            <option value="cookies">Cookies</option>
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="pork">Pork</option>
            <option value="health food">Health Food</option>
            <option value="fingerfood">Fingerfood</option>
            <option value="drinks">Drinks</option>
            <option value="salads">Salads</option>
            <option value="pasta">Pasta</option>
            <option value="fish&sea">Fish & Sea</option>
            <option value="soup">Soup</option>
          </select>
        </div>

        <div className="ingredient-step-nutrition-group">
          <div className="input-group-sm flex-nowrap ingredients-steps-nutrition">
            <div className="ingredients-steps-nutrition-align">
              <span className="input-group-text double-line-label" id="addon-wrapping">Ingredients: </span>
              <div>
                <input
                  type="text"
                  className="form-control ingredients-steps-nutrition-input"
                  style={{fontSize: "14px"}}
                  placeholder="Ingredient quantity"
                  aria-label="Quantity"
                  aria-describedby="addon-wrapping"
                  value={quantity}
                  onChange={ e => setQuantity(e.target.value) }/>
                <input
                  type="text"
                  className="form-control ingredients-steps-nutrition-input"
                  style={{fontSize: "14px"}}
                  placeholder="Add ingredient"
                  aria-label="Ingredient"
                  aria-describedby="addon-wrapping"
                  value={ingredient}
                  onChange={ e => setIngredient(e.target.value) }/>
              </div>
              <button onClick={ addIngredients } type="button" className="btn btn-outline-primary btn-sm new-recipe-btn">+</button>
            </div>
            <div className="new-line">
              { ingredients.length > 0 &&
                ingredients.map((item, index) => {
                  return (
                      <p key={index} style={{maxWidth: "400px", marginTop: "5px", borderBottom: "1px dotted lightgray"}}> <span className="input-color">{ item.quantity }</span> - { item.ingredient }</p>
                  )
                })
              }
            </div>
          </div>

          <div className="input-group-sm flex-nowrap ingredients-steps-nutrition">
            <div className="ingredients-steps-nutrition-align">
              <span className="input-group-text double-line-label" id="addon-wrapping">Steps: </span>
              <div>
                <input
                  type="text"
                  className="form-control ingredients-steps-nutrition-input"
                  style={{fontSize: "14px"}}
                  placeholder="Step number"
                  aria-label="StepNum"
                  aria-describedby="addon-wrapping"
                  value={stepNum}
                  onChange={ e => setStepNum(e.target.value) }/>
                <input
                  type="text"
                  className="form-control ingredients-steps-nutrition-input"
                  style={{fontSize: "14px", maxWidth: "550px"}}
                  placeholder="Type instructions"
                  aria-label="Steps"
                  aria-describedby="addon-wrapping"
                  value={toDo}
                  onChange={ e => setToDo(e.target.value) }/>
              </div>
              <button onClick={ addSteps } type="button" className="btn btn-outline-primary btn-sm new-recipe-btn">+</button>
            </div>
            <div className="new-line">
              { steps.length > 0 &&
                steps.map((stepItem, stepIndex) => {
                  return (
                      <p key={stepIndex} style={{maxWidth: "400px", marginTop: "5px", borderBottom: "1px dotted lightgray"}}> <span className="input-color">{ stepItem.stepNum })</span> { stepItem.toDo }</p>
                  )
                })
              }
            </div>
          </div>

          <div className="input-group-sm flex-nowrap ingredients-steps-nutrition">
            <div className="ingredients-steps-nutrition-align">
              <span className="input-group-text double-line-label" id="addon-wrapping">Nutrition Facts: </span>
              <div>
                <input
                  type="text"
                  className="form-control ingredients-steps-nutrition-input"
                  style={{fontSize: "14px"}}
                  placeholder="Nutrition number"
                  aria-label="Nutrition"
                  aria-describedby="addon-wrapping"
                  value={nutritionQty}
                  onChange={ e => setNutritionQty(e.target.value) }/>
                <input
                  type="text"
                  className="form-control ingredients-steps-nutrition-input"
                  style={{fontSize: "14px"}}
                  placeholder="Type nutrition unit"
                  aria-label="Nutrition"
                  aria-describedby="addon-wrapping"
                  value={nutritionUnit}
                  onChange={ e => setNutritionUnit(e.target.value) }/>
              </div>
              <button onClick={ addNutrition } type="button" className="btn btn-outline-primary btn-sm new-recipe-btn">+</button>
            </div>
            <div className="new-line">
              { nutrition.length > 0 &&
                nutrition.map((nutritionItem, nutritionIndex) => {
                  return (
                      <p key={nutritionIndex} style={{maxWidth: "400px", marginTop: "5px", borderBottom: "1px dotted lightgray"}}> <span className="input-color">{ nutritionItem.nutritionQty }</span>  { nutritionItem.nutritionUnit }</p>
                  )
                })
              }
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary btn-sm submit-btn">Add Recipe</button>
        <AdSense1 />
        </div>
      </form>
      <Footer />
    </div>
   );
}
 
export default NewRecipePage;