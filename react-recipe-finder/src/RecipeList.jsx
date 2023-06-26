import React from 'react';

const RecipeList = () => {
  const recipes = [
    { title: 'Pasta Carbonara', ingredients: ['spaghetti', 'bacon', 'eggs', 'Parmesan cheese', 'black pepper'] },
    { title: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion', 'garlic'] },
    { title: 'Chocolate Chip Cookies', ingredients: ['flour', 'sugar', 'butter', 'chocolate chips', 'vanilla extract'] },
  ];

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.title}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
