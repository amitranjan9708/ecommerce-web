import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,

  // name:'cart',
  // initialState:{
  //   cart:[]
  },
  

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price*action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";



// cart initialState ={
//   cart:[],
//   items: productData,
//   totalQuantity : 0,
//   totalPrice :0,

// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },

//   reducers: {
//     addProduct: (state, action) => {
//       state.quantity += 1;
//       state.products = [...state.products, action.payload.product];
//       state.total += action.payload.price;
//     },
//   },
// });

// export const { addProduct } = cartSlice.actions;
// export default cartSlice.reducer;