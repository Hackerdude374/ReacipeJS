import React, { useState } from 'react';
//the recipe form will take 4 things: name, ingredients, and instructions.
function RecipeForm({ handleAddRecipe }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions: instructions.split('\n').map((instruction) => instruction.trim()),
      image
    };
    //fetch db.json
    const response = await fetch('http://localhost:3000/NewRecipeData',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe)
    });
    const addedRecipe = await response.json();
    handleAddRecipe(addedRecipe);
    setName('');
    setIngredients('');
    setInstructions('');
    setImage('');
  };

  return (
    /*input fields*/
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>Upload a New Recipe</h2>
      <div>
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div>
        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
        <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      </div>

      <div>
     <label htmlFor="instructions">Instructions (one step per line):</label>
        <textarea id="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      </div>

      <div>
     <label htmlFor="image">Image URL (case sensitive):</label>
        <textarea id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>


      <button type="submit">Add your recipe!</button>
    </form>
  );
}

export default RecipeForm;
