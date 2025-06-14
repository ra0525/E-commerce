import React, { useState } from 'react';
import products from '../data/productsData';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import FilterSortBar from './FilterSortBar';
import '../styles/ProductList.css';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('');

  const filteredProducts = products
    .filter(p => 
      (category === 'All' || p.category === category) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterSortBar 
        category={category} 
        setCategory={setCategory} 
        sort={sort} 
        setSort={setSort} 
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
