import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITEMS_ENDPOINT, SERVER_URL } from "../constants";

const initialState = {
  items: [],
  cart: [],
};

export const fetchStoreItems = createAsyncThunk(
  "store/fetchStoreItems",
  async (_, thunkAPI) => {
    const response = await fetch(SERVER_URL + "/" + ITEMS_ENDPOINT);
    const data = await response.json();
    return data;
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemId = action.payload;
      const storeItem = state.items.find((element) => element.id === itemId);
      if (storeItem.quantity === 0) return;

      storeItem.quantity--;

      let cartItem = state.cart.find((element) => element.id === itemId);

      if (!cartItem) {
        cartItem = { ...storeItem, quantity: 0 };
        state.cart = [...state.cart, cartItem];
      }

      cartItem.quantity++;
    },

    reduceCartItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === itemId
      );
      const storeItem = state.items.find((element) => element.id === itemId
      );

      existingItem.quantity--;
      storeItem.quantity++;

      if (existingItem.quantity === 0) {
        const newCartItems = state.cart.filter((element) => element.id !== existingItem.id);
        state.cart = newCartItems;
      }
    },

    checkout: (state, action) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addItemToCart, checkout , reduceCartItem } = storeSlice.actions;

export default storeSlice.reducer;
