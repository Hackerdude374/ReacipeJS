export async function action({ params }) {
    const response = await fetch(`http://localhost:3000/NewRecipeData/${params.recipeId}`, {
      method: "DELETE",
    });
    return null;
  }