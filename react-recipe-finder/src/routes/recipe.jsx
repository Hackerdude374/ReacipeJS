import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';

export async function loader({ params }) {
  const recipeResponse = await fetch(`http://localhost:3000/NewRecipeData/${params.recipeId}`);
  const recipe = await recipeResponse.json();
  return { recipe };
}

function Recipe() {
  const { recipe } = useLoaderData();
  const { id, name, ingredients, instructions, image, status } = recipe;

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{name}</h1>
      <div>
        <img src={image} alt={name} />
      </div>
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <div>
        <Link to={`/recipes/${id}/edit`}>
          <FaPencilAlt /> Edit
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
