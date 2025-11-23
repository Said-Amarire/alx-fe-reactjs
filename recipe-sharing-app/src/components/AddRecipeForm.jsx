// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert('Please enter title and description');
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ padding: '5px', width: '300px', marginRight: '10px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ padding: '5px', width: '300px', height: '80px', display: 'block', marginTop: '10px' }}
      />
      <button type="submit" style={{ marginTop: '10px', padding: '5px 15px' }}>Add Recipe</button>
    </form>
  );
}
