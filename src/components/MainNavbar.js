import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo1.png'
import './MainNavbar.css'
import ReactSearchBox from "react-search-box";
import React, { Component } from "react";

const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

const MainNavbar = ({setFilteredRecipe}) => {
  const [recipes, setRecipes] = useState('')

  useEffect(() => {
    axios.get(apiURL)
    .then(response => {
      setRecipes(response.data)
    }).catch(err => console.log(err))
  })

  // const searchRecipe = (word) => {
  //   let filteredResults = [...recipes].filter(recipe => {
  //     return (recipe.name.toLowerCase().includes(word.toLowerCase()))
  //   })
  //   setFilteredRecipe(filteredResults)
  // }

  return ( 
    <nav style={{backgroundColor: "#FF0403", width: "100vw"}}>
      <div className="MainNavibar">
        <div className="mainnavbar-items" id="navbarSupportedContent">
          <Link to={'/'} ><img src={ logo } alt="Logo" className="logo"/></Link>
          <ul className="list">
            <li className="mainnavbar-links">
              <Link to={'/new-recipe'} style={{color: "white", backgroundColor: "#FF0403"}}>SEND A RECIPE</Link>
            </li>
            <li className="mainnavbar-links">
              <Link to={'/signup'} style={{color: "white", backgroundColor: "#FF0403"}}>SIGN UP</Link>
            </li>
            <li className="mainnavbar-links">
              <Link to={'/login'} style={{color: "white", backgroundColor: "#FF0403"}}>LOG IN</Link>
            </li>
            <li className="mainnavbar-links">
              <Link to={'/about'} style={{color: "white", backgroundColor: "#FF0403"}}>ABOUT US</Link>
            </li>
          </ul>

          {/* <ReactSearchBox
      placeholder="Search for John, Jane or Mary"
      data={[
        {
          key: "john",
          value: "John Doe"
        },
        {
          key: "jane",
          value: "Jane Doe"
        },
        {
          key: "mary",
          value: "Mary Phillips"
        },
        {
          key: "robert",
          value: "Robert"
        },
        {
          key: "karius",
          value: "Karius"
        }
      ]}
      onSelect={(record) => console.log(record)}
      onFocus={() => {
        console.log("This function is called when is focussed");
      }}
      onChange={(value) => console.log(value)}
      autoFocus
      leftIcon={<>🎨</>}
      iconBoxSize="48px"
    /> */}

      
        </div>
      </div>
    </nav>
);
}
 
export default MainNavbar;
