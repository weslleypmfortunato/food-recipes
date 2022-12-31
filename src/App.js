import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AllRecipesPage from './pages/AllRecipesPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import NewRecipePage from './pages/NewRecipePage';
import FakeLoginPage from './pages/FakeLoginPage';
import FakeSignupPage from './pages/FakeSignupPage';
import RecipeEditPage from './pages/RecipeEditPage';
import CookiesPage from './pages/CookiesPage';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/recipes' element={ <AllRecipesPage /> }/>
        <Route path='/recipes/:recipeId' element={ <RecipeDetailsPage />}/>
        <Route path='/new-recipe' element={ <NewRecipePage /> }/>
        <Route path='/login' element={ <FakeLoginPage /> }/>
        <Route path='/signup' element={ <FakeSignupPage /> }/>
        <Route path='/edit/:recipeId' element={ <RecipeEditPage /> }/>
        <Route path='/recipes/:categoryGroup' element={ <CookiesPage /> }/>
        <Route path='/about' element={ <AboutUsPage /> }/>
      </Routes>
    </div>
  );
}

export default App;


