import React from 'react';
import '../styles/FilterSortBar.css';

const FilterSortBar = ({ category, setCategory, sort, setSort }) => {
  return (
    <div className="filter-sort-bar">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Electronics">Electronics</option>
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Price (Low to High)</option>
        <option value="rating">Rating (High to Low)</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
