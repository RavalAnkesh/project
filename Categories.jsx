/* eslint-disable no-unused-vars */

// Categories.js

import React from 'react';
import './Categories.css';
import categories from './CategoriesList';

function Categories(props) {
  return (
    <div className="cat-container">
      <div>
        <span>All Categories</span>
        {categories && categories.length > 0 &&
          categories.map((item, index) => (
            // eslint-disable-next-line react/prop-types
            <span onClick={() => props.handleCategory && props.handleCategory(item)} key={index} className="category">{item}</span>
          ))}
      </div>
    </div>
  );
}

export default Categories;
