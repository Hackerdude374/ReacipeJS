import React, { useState } from 'react';
import { Form, redirect, useParams } from 'react-router-dom';

export async function loader({ params }) {
  const recipeResponse = await fetch(`http://localhost:3000/NewRecipeData/${params.recipeId}`);
  const recipe = await recipeResponse.json();
  return { recipe };
}

export async function action({ request, params }) {
  const { name, ingredients, instructions, image } = request.body;
  const updatedRecipe = {
    name,
    ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
    instructions: instructions.split('\n').map((instruction) => instruction.trim()),
    image,
    status: 1,
  };

  await fetch(`http://localhost:3000/NewRecipeData/${params.recipeId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedRecipe),
  });

  return redirect(`/NewRecipeData/${params.recipeId}`);
}

function EditRecipe() {
  const { recipe } = useLoaderData();
  const { recipeId } = useParams();
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '));
  const [instructions, setInstructions] = useState(recipe.instructions.join('\n'));
  const [image, setImage] = useState(recipe.image);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedRecipe = {
      name,
      ingredients,
      instructions,
      image,
    };

    await action({
      request: {
        body: updatedRecipe,
      },
      params: {
        recipeId,
      },
    });
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Recipe Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients (comma-separated):</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="instructions">Instructions (one step per line):</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit">Update Recipe</button>
      </Form>
    </div>
  );
}

export default EditRecipe;
