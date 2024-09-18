import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      console.log(JSON.parse(JSON.stringify(state.cart)));
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      //FINISH
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseQuantity(state, action) {
      //FINISH
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        // i've tried to delete item if quantity === 0
        // state.cart.filter((i) => i.id !== item.id);
        return;
      }
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
    //TODO: ADD MORE REDUCERS
  },
});

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const getCart = (state) => state.cart.cart;
export default cartSlice.reducer;
//2 times cart because u access state and state has two slices,
//one of them is called 'cart' and then u access cart property of cart slice
