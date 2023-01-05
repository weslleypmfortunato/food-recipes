import axios from 'axios'
import { useEffect, useState } from 'react';

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const Cards = () => {
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
    <div className="card" style={{width: "18rem"}}>
      {
        recipes.length === 0 ? <h1> </h1> :
      
      <>
      <img src={ chosenRecipe.imageUrl } alt="..." className="card-img-top" style={{height: "150px"}}/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: "center"}}>{ chosenRecipe.name }</h5>
      </div>
      </>
      }
    </div>
   );
}
 
export default Cards;