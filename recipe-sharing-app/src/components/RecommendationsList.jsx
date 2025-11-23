import { useRecipeStore } from '../stores/recipeStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(s => s.recommendations);
  const generateRecommendations = useRecipeStore(s => s.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h3>Recommendations</h3>
      {recommendations.length === 0 ? <p>No recommendations.</p> :
        recommendations.map(r => (
          <div key={r.id}>
            <Link to={`/recipes/${r.id}`}><strong>{r.title}</strong></Link>
            <p>{r.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default RecommendationsList;
