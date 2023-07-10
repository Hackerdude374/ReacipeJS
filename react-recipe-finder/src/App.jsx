import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeItem from './components/RecipeItem';
import EditRecipe from './routes/EditRecipe';
import DeleteRecipe from './routes/DeleteRecipeNEW';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [newRecipeData, setNewRecipeData] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch('http://localhost:3000/NewRecipeData');
      const data = await response.json();
      setRecipes(data);
      setNewRecipeData(data);
    }

    fetchRecipes();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    setNewRecipeData([...newRecipeData, newRecipe]);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    
      <div className="App">
        <header>ReacipeJS</header>
        <SearchBar handleSearch={handleSearch} />
        <div className="blue-col">
          <RecipeList recipes={filteredRecipes} />
        </div>
        <RecipeForm handleAddRecipe={handleAddRecipe} />
      </div>
   
  );
}

export default App;
