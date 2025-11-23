import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(s => s.recipes.find(r => String(r.id) === id));
  const deleteRecipe = useRecipeStore(s => s.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients?.join(', ')}</p>
      <p>Time: {recipe.time} minutes</p>
      <Link to={`/recipes/${id}/edit`}><button>Edit</button></Link>
      <button onClick={() => { deleteRecipe(recipe.id); navigate('/'); }}>Delete</button>
      <br/>
      <Link to="/">Back</Link>
    </div>
  );
};

export default RecipeDetails;
