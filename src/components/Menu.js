import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="menu">
      {items.map((item) => {
        let testId = '';
        if (item.category === 'Breakfast') testId = 'menu-item-breakfast';
        if (item.category === 'Lunch') testId = 'menu-item-lunch';
        if (item.category === 'Shakes') testId = 'menu-item-shakes';

        return (
          <div key={item.id} className="menu-item" data-test-id={testId}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <small>{item.category}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
