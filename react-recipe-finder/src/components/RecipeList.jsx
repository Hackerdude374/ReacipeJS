import React from 'react';

import RecipeItem from './RecipeItem';




function RecipeList({ recipes }) {
  return (
    <div className="recipe-list" >
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
