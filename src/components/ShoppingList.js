import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, category) => {
    const newItem = { name, category };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            addToCart={addToCart}
          />
        ))}
      </ul>
      <div className="Cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} ({item.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;

