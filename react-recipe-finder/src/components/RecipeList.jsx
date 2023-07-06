import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import './recipeList.css';
export async function loader() {
  const response = await fetch('http://localhost:3000/NewRecipeData');
  const recipes = await response.json();
  return { recipes };
}

/*

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list" >
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} />
      ))}
    </div>
  );
}
*/
function RecipeList() {
  const { recipes } = useLoaderData();

  return (
    <div className ="recipe-list">
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/NewRecipeData/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/NewRecipeData/new">Add New Recipe</Link>
    </div>
  );
}
export default RecipeList;
