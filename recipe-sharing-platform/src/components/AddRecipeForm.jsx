import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

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

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg mt-6 md:mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 md:text-3xl md:mb-8">Add a New Recipe</h2>

      <div className="mb-4 md:mb-6">
        <label className="block mb-1 font-semibold md:text-lg">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded md:p-3 md:text-base"
          placeholder="Recipe title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1 md:text-base">{errors.title}</p>
        )}
      </div>

      <div className="mb-4 md:mb-6">
        <label className="block mb-1 font-semibold md:text-lg">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded md:p-3 md:text-base"
          placeholder="e.g., flour, sugar, eggs"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1 md:text-base">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4 md:mb-6">
        <label className="block mb-1 font-semibold md:text-lg">Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded md:p-3 md:text-base"
          placeholder="Write each step on a new line"
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1 md:text-base">{errors.steps}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition md:px-6 md:py-3 md:text-lg"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
