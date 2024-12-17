import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// Function to load cart items from local storage
const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    return JSON.parse(storedCart); // Return the cart items directly
  }
  return []; // Return an empty array if cart items are not found
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: loadCartFromStorage(), // Initialize with cart items from local storage
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { id } = action.payload;
      // Check if the product with the same ID already exists in the cart
      if (!state.products.some(product => product.id === id)) {
        state.products.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(state.products));
      
        toast('Added in Cart!',
          {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#FFCBCB',
              color: 'black',
            },
            position: 'top-center'
          }
        );
      } else {
        console.log('Product with ID', id, 'already exists in the cart.');
      }
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      // Filter out the product with the specified ID from the state
      state.products = state.products.filter(product => product.id !== id);
      // Update local storage with the updated products array
      localStorage.setItem('cart', JSON.stringify(state.products));
      console.log('Product Removed from cart with ID:', id);
      console.log('Cart Items:', state.products);
      toast('Removed From Cart!',
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#FFCBCB',
          color: 'black',
        },
        position: 'top-center'
      }
    );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;