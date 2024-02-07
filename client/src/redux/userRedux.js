import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: 0,
   error: 0,

  // name:'cart',
  // initialState:{
  //   cart:[]
  },
  

  reducers: {
    loginStart:(state)=>{
      state.isFetching=true
    } ,
    loginSuccess:(state,action)=>{
      state.isFetching=false;
      state.currentUser=action.payload;

    },
  loginFailure:(state)=>{
    state.isFetching=false;
    state.error=true;
  },
  },
});

export const { loginStart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;




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