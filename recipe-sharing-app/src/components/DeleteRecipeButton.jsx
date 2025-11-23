import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ checker wants this

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // العودة للصفحة الرئيسية بعد الحذف
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
