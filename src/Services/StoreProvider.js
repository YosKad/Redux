import { createContext, useState, useEffect } from "react";
import { SERVER_URL, ITEMS_ENDPOINT } from "../constants";

export const StoreContext = createContext([]);

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const setStoreItems = async () => {
    try {

        const response = await fetch(SERVER_URL + "/" + ITEMS_ENDPOINT);
        const data = await response.json();
        setItems(data);
    } catch( error ) {
        console.log(error);
    }

  }

  const addItemToCart = (item) => {
    console.log("Add Item", item);
  }


  useEffect ( () => {
    setStoreItems();
  }, []);
  const value = {
    items,
    cart,
    addItemToCart
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
