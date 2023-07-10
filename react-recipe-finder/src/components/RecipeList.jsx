import React, { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';

export async function loader({ params }) {
  let url = "http://localhost:3000/NewRecipeData";
  
  const response = await fetch(url);
  const recipes = await response.json();
  return { recipes };
}


function RecipeList({ recipes }) {
  const [recipeList, setRecipeList] = useState(recipes);

  useEffect(() => {
    setRecipeList(recipes.filter((recipe) => recipeExists(recipe.id)));
  }, [recipes]);

  const recipeExists = (recipeId) => {
   
    return true;
  };

  return (
    <div className="recipe-list">
      {recipeList.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
