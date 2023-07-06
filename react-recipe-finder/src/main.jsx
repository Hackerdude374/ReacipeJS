import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './errorPage';
import RecipeList, { loader as recipeListLoader } from './components/RecipeList';
import RecipeForm, { action as addRecipeAction } from './components/RecipeForm';
import Recipe, { loader as recipeLoader } from './routes/recipe';
import {action as deleteRecipeAction}from "./routes/deleteRecipe";
import EditRecipe, { loader as editRecipeLoader, action as editRecipeAction } from './routes/editRecipe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RecipeList />,
        loader: recipeListLoader,
      },
      {
        path: 'NewRecipeData/new',
        element: <RecipeForm />,
        action: addRecipeAction,
      },
      {
        path: 'NewRecipeData/:recipeId',
        element: <Recipe />,
        errorElement: <ErrorPage />,
        loader: recipeLoader,
      },
      {
        path: 'NewRecipeData/:recipeId/edit',
        element: <EditRecipe />,
        errorElement: <ErrorPage />,
        loader: editRecipeLoader,
        action: editRecipeAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  
  </React.StrictMode>
);
