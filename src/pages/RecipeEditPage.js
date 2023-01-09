import './RecipeEditPage.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import SecondNavbar from '../components/SecondNavbar';
import AdSense1 from '../components/AdSense1';
import Footer from '../components/Footer'

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const RecipeEditPage = () => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [prepationTime, setPreparationTime] = useState('')
  const [servings, setServings] = useState('')
  const [owner, setOwner] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [nutrition, setNutrition] = useState('')
  const [loading, setLoading] = useState(true)

  const { recipeId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${apiURL}/${recipeId}`)
      .then(response => {
        const {
          name,
          imageUrl,
          prepationTime,
          servings,
          owner,
          category,
          ingredients,
          steps, 
          nutrition
        } = response.data
        setName(name)
        setImageUrl(imageUrl)
        setPreparationTime(prepationTime)
        setServings(servings)
        setOwner(owner)
        setCategory(category)
        setIngredients(ingredients)
        setSteps(steps)
        setNutrition(nutrition)
        setLoading(false)
      }).catch(err => console.log(err))
  }, [recipeId])

  const changeIngredient = (i, newIngredient) => {
    let copyIngredients = [...ingredients]
    const updatedIngredient = copyIngredients[i]
    updatedIngredient.ingredient = newIngredient
    setIngredients(copyIngredients)
  }

  const changeIngredientQty = (i, newIngredientQty) => {
    let copyIngredients = [...ingredients]
    const updatedIngredientQty = copyIngredients[i]
    updatedIngredientQty.quantity = newIngredientQty
    setIngredients(copyIngredients)
  }

  const changeStepNum = (i, newStepNum) => {
    let copySteps = [...steps]
    const updatedSteps = copySteps[i]
    updatedSteps.stepNum = newStepNum
    setSteps(copySteps)
  }

  const changeToDo = (i, newToDo) => {
    let copySteps = [...steps]
    const updatedToDo = copySteps[i]
    updatedToDo.toDo = newToDo
    setSteps(copySteps)
  }

  const changeNutritionQty = (i, newNutritionQty) => {
    let copyNutrition = [...nutrition]
    const updatedNutritionQty = copyNutrition[i]
    updatedNutritionQty.nutritionQty = newNutritionQty
    setNutrition(copyNutrition)
  }

  const changeNutritionUnit = (i, newNutritionUnit) => {
    let copyNutrition = [...nutrition]
    const updatedNutritionUnit = copyNutrition[i]
    updatedNutritionUnit.nutritionUnit = newNutritionUnit
    setNutrition(copyNutrition)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const editRecipe = {
      name, imageUrl, prepationTime, servings, owner, category, ingredients, steps, nutrition}

    axios.put(`${apiURL}/${recipeId}`, editRecipe)
      .then(response => {
        navigate(`/recipes/${recipeId}`)
      }).catch(err => console.log(err))
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return ( 
    <div className="RecipeEditPage">
      <div className="adsense">
        <MainNavbar />
        <SecondNavbar />
        <AdSense1 />
      </div>
      <h2 style={{color: "black", marginTop: "32px", marginBottom: "32px", textAlign: "center"}}>Edit Recipe</h2>

      <form onSubmit={ handleSubmit }>
        <div className="input-group-sm mb-3">
          <span className="input-group-text" id="basic-addon1" style={{width: "100px"}} >Title</span>
          <input 
            type="text"
            className='form-control'
            placeholder="Type the recipe's title"
            aria-label='Title'
            aria-describedby='basic-addon1'
            value={name}
            onChange={ e => setName(e.target.value) } />
        </div>

        <div className="input-group-sm mb-3">
          <span className="input-group-text" id="basic-addon1" style={{width: "100px"}} >Image</span>
          <input 
            type="text"
            className='form-control'
            placeholder="Type image URL"
            aria-label='ImageUrl'
            aria-describedby='basic-addon1'
            value={imageUrl}
            onChange={ e => setImageUrl(e.target.value) } />
        </div>

        <div className="input-group-sm mb-3">
          <span className="input-group-text" id="basic-addon1" style={{width: "100px"}} >Prep time</span>
          <input 
            type="text"
            className='form-control'
            placeholder="Preparation time (eg. 2 h 10 minutes)"
            aria-label='PreparationTime'
            aria-describedby='basic-addon1'
            value={prepationTime}
            onChange={ e => setPreparationTime(e.target.value) } />
        </div>

        <div className="input-group-sm mb-3">
          <span className="input-group-text" id="basic-addon1" style={{width: "100px"}} >Servings</span>
          <input 
            type="text"
            className='form-control'
            placeholder="Add servings' quantity"
            aria-label='Servings'
            aria-describedby='basic-addon1'
            value={servings}
            onChange={ e => setServings(e.target.value) } />
        </div>

        <div className="input-group-sm mb-3">
          <span className="input-group-text" id="basic-addon1" style={{width: "100px"}} >Prepared by</span>
          <input 
            type="text"
            className='form-control'
            placeholder="Add creator's name"
            aria-label='Owner'
            aria-describedby='basic-addon1'
            value={owner}
            onChange={ e => setOwner(e.target.value) } />
        </div>

        <div className="input-group-sm flex-nowrap">
          <span 
            className="input-group-text" 
              id="addon-wrapping"
              style={{width: "100px", marginBottom: "10px"}}>Group: </span>
          <select 
            className="new-recipe-select" 
            style={{marginBottom: "10px"}}
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

        <h5 className='sub-title'>--- INGREDIENTS ---</h5>
        <div className="edit-ingredients">
          {
            ingredients.map((condiment, condimentIndex) => {
              return (
                <div key={condimentIndex} className="input-group-sm mb-3">
                  <span 
                    className="input-group-text" 
                    id="basic-addon1" 
                    style={{width: "75px"}} >Quantity</span>
                  <input 
                    type="text"
                    className='form-control'
                    style={{width: "72px", textAlign: "center", marginRight: "8px"}}
                    placeholder="Add ingredient"
                    aria-label='Ingredient'
                    aria-describedby='basic-addon1'
                    value={condiment.quantity}
                    onChange={ e => changeIngredientQty(condimentIndex, e.target.value) } />
                    <span 
                    className="input-group-text ingredients-steps-nutrients" id="basic-addon1" 
                    style={{width: "100px"}} >Ingredient</span>
                  <input 
                    type="text"
                    className='form-control'
                    style={{width: "445px"}}
                    placeholder="Add ingredient"
                    aria-label='Ingredient'
                    aria-describedby='basic-addon1'
                    value={condiment.ingredient}
                    onChange={ e => changeIngredient(condimentIndex, e.target.value) } />
                </div>
              )
            })
          }
        </div>

        <h5 className='sub-title'>--- STEPS ---</h5>
        <div className="edit-ingredients">
          {
            steps.map((step, stepIndex) => {
              return (
                <div key={stepIndex} className="input-group-sm mb-3">
                  <span 
                    className="input-group-text ingredients-steps-nutrients" id="basic-addon1" 
                    style={{width: "80px"}} >Step Num</span>
                  <input 
                    type="text"
                    className='form-control'
                    style={{width: "72px", textAlign: "center"}}
                    placeholder="Type step number"
                    aria-label='StepNum'
                    aria-describedby='basic-addon1'
                    value={step.stepNum}
                    onChange={ e => changeStepNum(stepIndex, e.target.value) } />
                  <span 
                    className="input-group-text" 
                    id="basic-addon1" 
                    style={{width: "100px", marginLeft: "8px"}} >Description</span>
                  <input 
                    type="text"
                    className='form-control'
                    style={{width: "440px"}}
                    placeholder="Step description"
                    aria-label='ToDo'
                    aria-describedby='basic-addon1'
                    value={step.toDo}
                    onChange={ e => changeToDo(stepIndex, e.target.value) } />
                </div>
              )
            })
          }
        </div>

        <h5 className='sub-title'>--- NUTRITION FACTS ---</h5>
        <div className="edit-ingredients">
          {
            nutrition.map((nutrient, nutrientIndex) => {
              return (
                <div key={nutrientIndex} className="input-group-sm mb-3">
                  <span 
                    className="input-group-text ingredients-steps-nutrients" id="basic-addon1" 
                    style={{width: "100px"}} >Nutrition Qty</span>
                  <input 
                    type="text"
                    className='form-control'
                    style={{width: "72px", textAlign: "center"}}
                    placeholder="Type nutrition quantity"
                    aria-label='nutritionQty'
                    aria-describedby='basic-addon1'
                    value={nutrient.nutritionQty}
                    onChange={ e => changeNutritionQty(nutrientIndex, e.target.value) } />
                  <span 
                    className="input-group-text" 
                    id="basic-addon1" 
                    style={{width: "100px", marginLeft: "8px"}} >Nutrition Info</span>
                  <input 
                    type="text"
                    className='form-control'
                    style={{width: "420px"}}
                    placeholder="Nutrition Unit"
                    aria-label='nutritionUnit'
                    aria-describedby='basic-addon1'
                    value={nutrient.nutritionUnit}
                    onChange={ e => changeNutritionUnit(nutrientIndex, e.target.value) } />
                </div>
              )
            })
          }
        </div>
      <button 
        type="submit" 
        className="btn btn-outline-primary save"
        style={{fontWeight: "700"}}
        >SAVE
      </button>
      </form>
      <Footer />
    </div>
   );
}
 
export default RecipeEditPage;