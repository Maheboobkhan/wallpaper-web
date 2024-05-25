import { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [design, setDesign] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ category, design });
  };

  return (
    <div className="flex space-x-4 mb-4 mt-10">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        <option value="">Select Category</option>
        <option value="wallpaper">Wallpaper</option>
        <option value="customize">Customize</option>
      </select>
      <select
        value={design}
        onChange={(e) => setDesign(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        <option value="">Select Design</option>
        <option value="nature">Nature</option>
        <option value="milan">Texture</option>
        <option value="kausar">Flower</option>
      </select>
      <button onClick={handleFilterChange} className="px-4 py-2 bg-blue-600 text-white rounded">Apply Filter</button>
    </div>
  );
};

export default Filter;
