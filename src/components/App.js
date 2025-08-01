import React, { useState } from 'react';
import "./styles.css";
import Menu from './Menu';
import menuData from './data';

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState('All');

  const filterMenu = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setMenuItems(menuData);
    } else {
      const filtered = menuData.filter(item => item.category === category);
      setMenuItems(filtered);
    }
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>
      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterMenu('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterMenu('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterMenu('Shakes')}>Shakes</button>
      </div>
      <Menu items={menuItems} />
    </div>
  );
};

export default App;
