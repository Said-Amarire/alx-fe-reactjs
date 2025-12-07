import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === parseInt(id));
        setRecipe(found);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p className="mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
