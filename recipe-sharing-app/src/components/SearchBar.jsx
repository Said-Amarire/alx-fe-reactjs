import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '5px', width: '250px', marginBottom: '20px' }}
      />
    </div>
  );
};

export default SearchBar;
