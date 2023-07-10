import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Root from "./routes/rootNEW";
import RecipeList,{loader as recipeLoader} from "./components/RecipeList";
import RecipeForm, { action as addRecipeAction } from "./components/RecipeForm.jsx";
//import EditRecipe, {action as editRecipeAction, loader as editRecipeLoader} from "./routes/EditRecipetest";


const router = createBrowserRouter([
   {
     path: "/",
     element: <Root />,
     children: [
       // Other routes...
      /*
       
       {
         path: "NewRecipeData/:id/edit",
         element: <EditRecipe />,
         loader: editRecipeLoader,
         action: editRecipeAction,
       },
       
*/

     ],
   },
 ]);
 

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  
   <App/>
  
 </React.StrictMode>,
)



