import React, { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes }) {
  const [recipeList, setRecipeList] = useState(recipes);

  useEffect(() => {
    setRecipeList(recipes.filter((recipe) => recipeExists(recipe.id)));
  }, [recipes]);

  const recipeExists = (recipeId) => {
    // Check if the recipeId exists in the db.json file or any other data source
    // Return true if the recipe exists, otherwise false
    // You can implement your own logic here based on how you store and retrieve data
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
