import React, { useState } from 'react';
import { Form, Link, redirect } from 'react-router-dom';

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/NewRecipeData/${params.id}`);
  const recipe = await response.json();
  return { recipe };
}



export async function action({ handleUpdateRecipe, params }) {
  const { recipe } = useLoaderData();
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '));
  const [instructions, setInstructions] = useState(recipe.instructions.join('\n'));
  const [image, setImage] = useState(recipe.image);

  const handleSubmit = async () => {
    const updatedRecipe = {
      id: params.id,
      name,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions: instructions.split('\n').map((instruction) => instruction.trim()),
      image,
    };

    const response = await fetch(`http://localhost:3000/NewRecipeData/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedRecipe),
    });

    if (response.ok) {
      const editedRecipe = await response.json();
      handleUpdateRecipe(editedRecipe);
      return redirect('/');
    } else {
      // Handle the error case, e.g., show an error message
      console.error('Error updating recipe');
    }
  };
}


  function editRecipeForm(){

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to={`/recipes/${params.id}`}>{"<"} Back</Link>
      <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
        <h1 className="text-white">Edit Recipe</h1>
        <fieldset className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-4 focus:outline-none p-2"
            defaultValue={name}
            onChange={(event) => setName(event.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            name="ingredients"
            id="ingredients"
            className="border-4 focus:outline-none p-2"
            defaultValue={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            className="border-4 focus:outline-none p-2"
            defaultValue={instructions}
            onChange={(event) => setInstructions(event.target.value)}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            className="border-4 focus:outline-none p-2"
            defaultValue={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </fieldset>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer">
          Save Changes
        </button>
      </Form>
    </div>
  );
}



export default EditRecipe;
