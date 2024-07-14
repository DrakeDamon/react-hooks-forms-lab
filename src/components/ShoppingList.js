import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterItems, setFilterItems] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const onItemFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setItemName("");
    setItemCategory("Produce");
  };

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleInput(event) {
    setFilterItems(event.target.value);
  }

  const displayedItems = items.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const nameMatch = item.name.toLowerCase().includes(filterItems.toLowerCase());
    return categoryMatch && nameMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        itemName={itemName}
        setItemName={setItemName}
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        formSubmit={onItemFormSubmit}
      />
      <Filter search={filterItems} onCategoryChange={handleCategoryChange} onSearchChange={handleInput} />
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
