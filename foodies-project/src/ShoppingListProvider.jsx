import React, { createContext, useState } from 'react';

const ShoppingListContext = createContext();

function ShoppingListProvider({ children }) {
  const [shoppingList, setShoppingList] = useState([]);

  function addToShoppingList(ingredient) {
    setShoppingList([...shoppingList, ingredient]);
  }

  function removeFromShoppingList(ingredient) {
    setShoppingList(shoppingList.filter((item) => ingredient !== item));
  }

  return (
    <ShoppingListContext.Provider value={{shoppingList, addToShoppingList, removeFromShoppingList}}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export { ShoppingListProvider, ShoppingListContext };