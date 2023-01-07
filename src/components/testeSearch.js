// import axios from "axios";
// import { useState, useEffect } from "react";

// const apiURL = "https://ironrest.cyclic.app/fast-food-recipe-project-II"

// const TestSearch = () => {
//   const [search, setSearch] = useState("")

//   useEffect(() => {
//     axios.get(apiURL)
//       .then(response => {
//         setSearch(response.data)
//       }).catch(err => console.log(err))
//   }, [search])



//   return ( 
//     <div>
//       <input 
//         type="text"
//         className='form-control'
//         style={{width: "72px", textAlign: "center"}}
//         placeholder="Type nutrition quantity"
//         aria-label='nutritionQty'
//         aria-describedby='basic-addon1'
//         onChange={e => setSearch(e.target.value)}
//         />
//         {

//           search.filter(post => {
//           if (post.name.toLowerCase().includes(search.toLowerCase())) {
//               return post;
//             }

//           }).map((post, index) => (
//             <div className="box" key={index}>
//               <p>{post.name}</p>
//             </div>
//           ))
//         }

//     </div>
//    );
// }
 
// export default TestSearch;