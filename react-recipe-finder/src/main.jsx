import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const RecipeContainer = styled.div`
  margin-bottom: 20px;
`;

const RecipeTitle = styled.h2`
  color: #333;
`;

const IngredientList = styled.ul`
  list-style: disc;
  margin-left: 20px;
`;

const IngredientItem = styled.li`
  color: #666;
`;

const RecipeList = () => {
  const recipes = [
    { title: 'Pasta Carbonara', ingredients: ['spaghetti', 'bacon', 'eggs', 'Parmesan cheese', 'black pepper'] },
    { title: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion', 'garlic'] },
    { title: 'Chocolate Chip Cookies', ingredients: ['flour', 'sugar', 'butter', 'chocolate chips', 'vanilla extract'] },
  ];

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe, index) => (
        <RecipeContainer key={index}>
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <IngredientList>
            {recipe.ingredients.map((ingredient, index) => (
              <IngredientItem key={index}>{ingredient}</IngredientItem>
            ))}
          </IngredientList>
        </RecipeContainer>
      ))}
    </div>
  );
};
