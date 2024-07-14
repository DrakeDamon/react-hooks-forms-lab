import React from "react";

function ItemForm({ itemName, setItemName, itemCategory, setItemCategory, formSubmit }) {
  return (
    <form className="NewItem" onSubmit={formSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)} 
        />      
      </label>

      <label>
        Category:
        <select 
          name="category" 
          value={itemCategory} 
          onChange={(e) => setItemCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
