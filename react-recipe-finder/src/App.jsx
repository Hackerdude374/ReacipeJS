import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeData from './components/RecipeData';
import RecipeForm from './components/RecipeForm';
import RecipeItem from './components/RecipeItem';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState(RecipeData);

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
      <header> Recipe Finder!</header>
      
      <SearchBar handleSearch={handleSearch} />
      <div >
      <RecipeList recipes={filteredRecipes} />
      </div>
      <RecipeForm handleAddRecipe={handleAddRecipe} />
      


    </div>

    
  );
}

export default App;
