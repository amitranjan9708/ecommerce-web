// import {configureStore } from "@reduxjs/toolkit"
// import cartReducer from "./cartRedux"
// import cartSlice from './cartRedux';

// export default configureStore({
//     reducer:{
//         cart:cartReducer,

//     },
// }); 
import {configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartRedux";
import userReducer  from "./userRedux";


const  store= configureStore({
    reducer:{ 
        cart:cartSlice,
        user:userReducer,
    },
}); 


export default store ;
