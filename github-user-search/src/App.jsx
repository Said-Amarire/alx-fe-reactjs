import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;
