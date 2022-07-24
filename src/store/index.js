import { configureStore, createSlice } from '@reduxjs/toolkit';
const cartItems = JSON.parse(localStorage.getItem('cart'));
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: cartItems ?? [],
    products: [],
    isFormOpen: false,
    isNotification: false,
    isAdding: true,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.isNotification = true;
      state.isAdding = true;
    },
    removeFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      state.isNotification = true;
      state.isAdding = false;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    hideNotification: (state) => {
      state.isNotification = false;
    },
    toggleForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  getProducts,
  addProduct,
  hideNotification,
  toggleForm,
} = cartSlice.actions;
let store;

store = configureStore({
  reducer: cartSlice.reducer,
  middleware: (getDefault) => {
    return getDefault({
      serializableCheck: false,
    });
  },
});

export default store;
