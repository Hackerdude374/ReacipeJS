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
      <header> Recipe App </header>
      <SearchBar handleSearch={handleSearch} />
      <RecipeList recipes={filteredRecipes} />
      <RecipeForm handleAddRecipe={handleAddRecipe} />
    </div>
  );
}

export default App;
