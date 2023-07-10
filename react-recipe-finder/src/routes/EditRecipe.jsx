import React, { useState, useEffect } from 'react';
import { useParams, useNavigation } from 'react-router-dom';

function EditRecipe() {
  const { id } = useParams();
  const history = useNavigation();
  const [recipe, setRecipe] = useState({});
  const [editedRecipe, setEditedRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    imageURL: '',
  });

  useEffect(() => {
    // Fetch the recipe data using the ID parameter
    async function fetchRecipe() {
      try {
        const response = await fetch(`http://localhost:3000/NewRecipeData/${id}`);
        const data = await response.json();
        setRecipe(data);
        setEditedRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    }

    fetchRecipe();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/NewRecipeData/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedRecipe),
      });

      if (response.ok) {
        // Recipe updated successfully
        // Perform any necessary actions (e.g., show success message)
        history.push('/'); // Redirect to the home page or recipe list
      } else {
        // Handle the error case (e.g., show error message)
        console.error('Error updating recipe');
      }
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={editedRecipe.name} onChange={handleChange} />
        </label>
        <label>
          Ingredients:
          <textarea
            name="ingredients"
            value={editedRecipe.ingredients}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Instructions:
          <textarea
            name="instructions"
            value={editedRecipe.instructions}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageURL"
            value={editedRecipe.imageURL}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}

export default EditRecipe;
