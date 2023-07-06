import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const EditRecipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    image: ''
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/NewRecipeData/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.patch(`http://localhost:3000/NewRecipeData/${id}`, formData);
      history.push('/');
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
        <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleInputChange} required />

        <label htmlFor="instructions">Instructions (one step per line):</label>
        <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleInputChange} required />

        <label htmlFor="image">Image URL (case sensitive):</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange} required />

        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipe;
