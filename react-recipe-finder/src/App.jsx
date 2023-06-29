import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeData from './components/RecipeData';
import RecipeForm from './components/RecipeForm';
import RecipeItem from './components/RecipeItem';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState(RecipeData);
  const[NewRecipes, setNewRecipes] = useState([]);
/*db.json*/

useEffect(() => {
  let ignore = false;

async function fetchRecipes() {
  const response = await fetch('http://localhost:3000/NewRecipeData');
  const NewRecipes = await response.json();
  if(!ignore) {
    setNewRecipes(NewRecipes);
  }
  return NewRecipes;
}
fetchRecipes();

return () => {
  ignore = true;
}
}, []);


/*-------------*/


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <div className="App">
      <header> ReacipeJS</header>
      
      <SearchBar handleSearch={handleSearch} />
      <div className = "blue-col">
      <RecipeList recipes={filteredRecipes} />
      </div>
      <RecipeForm handleAddRecipe={handleAddRecipe} />
      


    </div>

    
  );
}

export default App;
