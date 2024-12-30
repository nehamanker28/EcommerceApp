// import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Meeting {
//     id: string;
//     title: string;
//     status: string;
//     date: string;
//     location: string;
//   }
// // Initial state
// const initialState = {
//   products: [
//     { id: 1, name: 'Product A', price: 100 },
//     { id: 2, name: 'Product B', price: 150 },
//     { id: 3, name: 'Product C', price: 200 },
//   ],
//   cart: [],
//  meetings : [
//     { id: '1', title: 'Coffee Meet Austin', status: 'Scheduled', date: 'Wed, 10 Jun 2023', location: 'Kerbey Lane Cafe' },
//     { id: '2', title: 'Coffee Meet Austin', status: 'Pending', date: '--', location: '--' },
//   ],
// };

// // Redux slice
// const meetingsSlice = createSlice({
//     name:'meeting',
//     initialState,
//     reducers :{
//         addMeeting: (state, action: PayloadAction<Meeting>) => {
//             state.meetings.push(action.payload);
//           },
          
//     }
// })
// // const ecommerceSlice = createSlice({
// //   name: 'ecommerce',
// //   initialState,
// //   reducers: {
// //     addToCart: (state:any, action) => {
// //       const product = state.products.find((item:any) => item.id === action.payload);
// //       if (product) {
// //         state.cart.push({ ...product, quantity: 1 });
// //       }
// //     },
// //     removeFromCart: (state, action) => {
// //       state.cart = state.cart.filter((item:any) => item.id !== action.payload);
// //     },
// //     incrementQuantity: (state, action) => {
// //       const item :any= state.cart.find((item:any) => item.id === action.payload);
// //       if (item) {
// //         item.quantity += 1;
// //       }
// //     },
// //     decrementQuantity: (state, action) => {
// //       const item:any = state.cart.find((item:any) => item.id === action.payload);
// //       if (item && item.quantity > 1) {
// //         item.quantity -= 1;
// //       }
// //     },
// //   },
// // });

// // export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = ecommerceSlice.actions;

// export const { addMeeting,  } = meetingsSlice.actions;

// const store = configureStore({
//     reducer: {
//       meetings: meetingsSlice.reducer,
//     },
//   });
  
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default meetingsSlice.reducer;
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import meetingsReducer from './meetingSlice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    meetings: meetingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
