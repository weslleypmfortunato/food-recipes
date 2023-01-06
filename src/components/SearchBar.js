// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

// function SearchBar() {
//   const [searchQuery, setSearchQuery] = useState('')

//   useEffect(() => {
//     axios.get(apiURL)
//     .then(response => {
//       setSearchQuery(response.data)
//     }).catch(err => console.log(err))
//   })

//   const handleSearchInput = e => {
//     setSearchQuery(e.target.value)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={searchQuery} onChange={handleSearchInput} />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default SearchBar;