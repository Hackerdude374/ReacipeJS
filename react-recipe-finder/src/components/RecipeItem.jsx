import React, { useEffect, useState } from 'react';

function RecipeItem({ recipe }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
//press escape to leave popup

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };
    if (isPopupOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPopupOpen]);
  
//implemented a popup so when a recipe is clicked on it will  open up ingredients and instructions, videos
  return (
    
    <div className="recipe-item" onClick={togglePopup}>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3>{recipe.name}</h3>
      {/*this is pop up, when recipe cicked on display name and ingredients and instructions*/}
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
