// // import { useState } from "react";

// // const SearchRecipePage = (props) => {
// //   const { setQuery } = props
// //   const [search, setSearch] = useState('')

// //   const handleInput = e => {
// //     setQuery(e.target.value)
// //     setSearch(e.target.value)
// //   }

// //   return ( 
// //     <div>
// //       <label htmlFor="searchRecipe">Search</label>
// //       <input
// //         type="text"
// //         placeholder="Search for a recipe"
// //         value={search}
// //         onChange={ handleInput } />
// //     </div>
// //    );
// // }
 
// // export default SearchRecipePage;

// import './SearchRecipePage.css'
// import { useState, useEffect } from "react"

// const SearchRecipePage = ({ searchRecipe }) => {
//   const [search, setSearch] = useState('')
  

//   const handleInput = e => {
//     setSearch(e.target.value)
//     searchRecipe(e.target.value)
//   }

//   return ( 
//     <div className='search'>
//       <input 
//         className="form-control me-2 search-bar" 
//         type="text" 
//         placeholder="Search for a recipe  🥕🧄🌽" 
//         style={{width: "250px"}}
//         value={ search }
//         onChange={ handleInput }/>
//       <button 
//         onClick= { () => searchRecipe(search)}
//         className="btn btn-success search-btn" 
//         type="submit" 
//         style={{color: "black", backgroundColor: "white", borderColor: "lightgray"}}>Search
//       </button>
//       <div>

//       </div>
//     </div>
//    );
// }
 
// export default SearchRecipePage;