export async function action({ handleDeleteRecipe }) {
    const response = await fetch(`http://localhost:3000/NewRecipeData/${recipe.id}`, {
        method: 'DELETE',
      });
      return null;
  }