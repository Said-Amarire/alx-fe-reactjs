import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded"/>
      <p className="mb-4">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Example ingredient 1</li>
        <li>Example ingredient 2</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
      <p>Example cooking instructions...</p>
    </div>
  );
};

export default RecipeDetail;
