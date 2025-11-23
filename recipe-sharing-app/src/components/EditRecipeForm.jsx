import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(s => s.recipes.find(r => String(r.id) === id));
  const updateRecipe = useRecipeStore(s => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || '');
      setDescription(recipe.description || '');
      setIngredients((recipe.ingredients || []).join(', '));
      setTime(recipe.time || '');
    }
  }, [recipe]);

  if (!recipe) return <div>Recipe not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...recipe,
      title, description,
      ingredients: ingredients.split(',').map(i => i.trim()).filter(Boolean),
      time: Number(time) || 0
    };
    updateRecipe(updated);
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <input value={ingredients} onChange={e => setIngredients(e.target.value)} />
      <input value={time} onChange={e => setTime(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
