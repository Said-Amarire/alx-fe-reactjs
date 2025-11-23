import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(s => s.favorites);
  const recipes = useRecipeStore(s => s.recipes);

  const favRecipes = favorites.map(id => recipes.find(r => r.id === id)).filter(Boolean);

  return (
    <div>
      <h3>Favorites</h3>
      {favRecipes.length === 0 ? <p>No favorites yet.</p> :
        favRecipes.map(r => (
          <div key={r.id}>
            <Link to={`/recipes/${r.id}`}><strong>{r.title}</strong></Link>
            <p>{r.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default FavoritesList;
