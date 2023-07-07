import React, { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';

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
