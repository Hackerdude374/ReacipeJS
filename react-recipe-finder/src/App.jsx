import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
/*
useEffect(() => {
  let ignore = false;

async function fetchRecipes() {
  const response = await fetch('http://localhost:3000/NewRecipeData');
  const recipes = await response.json();
  if(!ignore) {
    setNewRecipes(recipes);
  }
  return recipes;
}
fetchRecipes();

return () => {
  ignore = true;
}
}, []);
*/
useEffect(() => {
  let ignore = false;

  async function fetchRecipes() {
    try {
      const response = await fetch('http://localhost:3000/NewRecipeData');
      const recipes = await response.json();
      if (!ignore) {
        setNewRecipes(recipes);
      }
      return recipes;
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

  async function saveRecipes() {
    try {
      await fetch('http://localhost:3001/NewRecipeData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(NewRecipes),
      });
    } catch (error) {
      console.error('Error saving recipes:', error);
    }
  }

  fetchRecipes();

  return () => {
    ignore = true;
  };
}, [NewRecipes]);

/*-------------*/


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    setNewRecipes([...NewRecipes, newRecipe]);
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
