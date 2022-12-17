import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AllRecipesPage from './pages/AllRecipesPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/recipes' element={ <AllRecipesPage /> }/>
        <Route path='/recipes/:recipeId' element={ <RecipeDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
