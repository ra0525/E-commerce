import React from 'react';
import '../styles/FilterSortBar.css';

const FilterSortBar = ({ category, setCategory, sort, setSort }) => {
  return (
    <div className="filter-sort-bar">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Electronics">Electronics</option>
        <option value="Home and Kitchen">Home and Kitchen</option>
        <option value="Smart Watches">Smart Watches</option>
        <option value="Video Games">Video Games</option>
        <option value="Computers and Accessories">Computers and Accessories</option>
      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="lowToHigh">Price (Low to High)</option>
        <option value="highToLow">Price (High to Low)</option>
        <option value="rating">Rating (High to Low)</option>
        <option value="ratinglowtohigh">Rating (Low to High)</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
