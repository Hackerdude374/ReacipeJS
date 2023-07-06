import React, { useEffect, useState } from 'react';

function RecipeItem({ recipe, handleDeleteRecipe }) {
  console.log(recipe);
  console.log("THE RECIPE ID: " + recipe.id);
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/NewRecipeData/${recipe.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Recipe deleted successfully
       // Update the state or perform any other necessary action
       window.location.reload();

      } else {
        // Handle the error case, e.g., show an error message
        console.error('Error deleting recipe');
      }
    } catch (error) {
      console.error(error);
      // Handle the error case, e.g., show an error message
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
      if (event.key === 'x' || event.key === 'X') {
        handleDelete();
      }
    };

    if (isPopupOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPopupOpen, handleDelete]);

  return (
    <div className="recipe-item" onClick={togglePopup}>
      <button>Delete (Press X) Exit Popup (Press Esc)</button>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3>{recipe.name}</h3>
      {isPopupOpen && (
        <div className="popup">
          <h3>{recipe.name}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions:</h4>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default RecipeItem;
