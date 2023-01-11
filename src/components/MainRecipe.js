import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading4 from '../assets/images/gifs/loading4.gif'
import backgroundImage from '../assets/images/backgroundImage.png'
import logoNoname from '../assets/images/logo-noname.png'
import './MainRecipe.css'

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const MainRecipe = () => {
  const [recipes, setRecipes] = useState([])
  const [chosenRecipe, setChosenRecipe] = useState()

  useEffect(() => {
    axios.get(apiURL)
      .then(response => {
        setRecipes(response.data)
        const randomIndex = Math.floor(Math.random() * response.data.length)
        setChosenRecipe(response.data[randomIndex])
      }).catch(err => console.log(err))
    },[])

  return ( 
    <div className="container-mainrecipe">
      {
        recipes.length === 0 ? 
        <div>
          <p> </p>
          <img src={Loading4} alt="Loading GIF" className="gif" />
        </div> :
        <div className="MainRecipe">
          <img src={ backgroundImage } alt="Background" />
          <div className="child-img">
            <Link to={`/recipes/${ chosenRecipe._id }`}>
              <img src={ chosenRecipe.imageUrl } alt="..." className='main-recipe-img'/>
            </Link>
            <div className="main-recipe-logo">
              <img src={ logoNoname } alt="Logo" />
              <img src={ logoNoname } alt="Logo" id='bottom-logo'/>
              <img src={ logoNoname } alt="Logo" id='top-left-logo'/>
              <img src={ logoNoname } alt="Logo" id='bottom-left-logo'/>
            </div>
            <span id='main-recipe-name' style={{width: "800px", fontWeight: "500"}}>{ chosenRecipe.name }</span>
          </div>
        </div>
      }
    </div>
   );
}
 
export default MainRecipe;