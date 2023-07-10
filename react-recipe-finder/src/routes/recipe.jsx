import {
    Form,
    useLoaderData,
    Link
  } from "react-router-dom";
  import { FaPencilAlt } from "react-icons/fa";
  import { RiSave3Fill } from "react-icons/ri";

  export async function loader({ params }) {
    const response = await fetch(`http://localhost:3000/NewRecipeData/${params.id}`);
    const recipe = await response.json();
    return { recipe };
  }
  export async function action({ handleAddRecipe }) {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
      const [image, setImage] = useState('');
  
    const newRecipe = {
      name,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
      instructions: instructions.split('\n').map((instruction) => instruction.trim()),
      image,
      status: 1,
    };
  
    const response = await fetch('http://localhost:3000/NewRecipeData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });
    const addedRecipe = await response.json();
     
    handleAddRecipe(addedRecipe);
    setName('');
    setIngredients('');
    setInstructions('');
    setImage('');
    return redirect('/');
  }
  
  