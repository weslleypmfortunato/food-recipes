import axios from 'axios'
import { useEffect, useState } from 'react';

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const Cards = () => {
  const [recipes, setRecipes] = useState([])
  const newRecipes = [...recipes]

  const randomIndex = Math.floor(Math.random() * newRecipes.length)
  const chosenRecipe = newRecipes[randomIndex]
  console.log("Até aqui foi", chosenRecipe)
  
  useEffect(() => {
    axios.get(apiURL)
      .then(response => {
        setRecipes(response.data)
      }).catch(err => console.log(err))
    },[])

  return ( 
    <div className="card" style={{width: "18rem"}}>
      <img src={newRecipes.imageUrl} alt="..." className="card-img-top" style={{height: "150px"}}/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign: "center"}}>{ newRecipes.name }</h5>
      </div>
    </div>
   );
}
 
export default Cards;

// após o Return, se eu altero de newRecipes para chosenRecipe a página renderiza o que eu quero
// mas quando atualizo a página some tudo e aparece erros no console informando que não é possivel
// ler a imagem ou os outros valores após o chosenRecipe. 
