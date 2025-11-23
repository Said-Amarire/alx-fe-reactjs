import { useRecipeStore } from '../stores/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(s => s.setSearchTerm);
  return (
    <input placeholder="Search recipes..." onChange={(e) => setSearchTerm(e.target.value)} />
  );
};

export default SearchBar;
