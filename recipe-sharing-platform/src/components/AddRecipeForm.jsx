import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // errors state

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map(item => item.trim()),
      steps: steps.split("\n").map(item => item.trim()),
    };

    console.log("New Recipe:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg mt-6"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Recipe title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="e.g., flour, sugar, eggs"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Write each step on a new line"
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
