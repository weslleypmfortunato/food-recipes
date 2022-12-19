import './RecipeEditPage.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import SecondNavbar from '../components/SecondNavbar';

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const RecipeEditPage = () => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [prepationTime, setPreparationTime] = useState('')
  const [servings, setServings] = useState('')
  const [owner, setOwner] = useState('')
  const [category, setCategory] = useState('')


  const { recipeId } = useParams()
  const navigate = useNavigate

  useEffect(() => {
    axios.get(`${apiURL}/${recipeId}`)
      .then(response => {
        const {
          name,
          imageUrl,
          prepationTime,
          servings,
          owner,
          category
        } = response.data
        setName(name)
        setImageUrl(imageUrl)
        setPreparationTime(prepationTime)
        setServings(servings)
        setOwner(owner)
        setCategory(category)
      }).catch(err => console.log(err))
  }, [recipeId])

  const handleSubmit = e => {
    e.preventDefault()
    const editRecipe = {
      name, imageUrl, prepationTime, servings, owner, category
    }

    axios.put(`${apiURL}/${recipeId}`, editRecipe)
      .then(response => {
        console.log("Atualizado")
        navigate('/recipes')
      }).catch(err => console.log(err))
  }

  return ( 
    <div className="RecipeEditPage">
      <MainNavbar />
      <SecondNavbar />
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
              style={{width: "100px"}}>Group: </span>
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
      </form>

    </div>
   );
}
 
export default RecipeEditPage;