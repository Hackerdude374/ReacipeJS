import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteRecipe() {
  const { id } = useParams();
  const history = useNavigate();

  const handleDeleteRecipe = async () => {
    const response = await fetch(`http://localhost:3000/NewRecipeData/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Recipe deleted successfully
      // Perform any necessary action
      history.push('/'); // Redirect to the home page after deleting the recipe
    } else {
      // Handle the error case, e.g., show an error message
      console.error('Error deleting recipe');
    }
  };

  return (
    <div>
      <h2>Delete Recipe</h2>
      <p>Are you sure you want to delete this recipe?</p>
      <button onClick={handleDeleteRecipe}>Delete Recipe</button>
    </div>
  );
}

export default DeleteRecipe;
