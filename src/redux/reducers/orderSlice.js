import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
    },
    reducers: {
        getOrders: (state, action) => {
            state.orders = action.payload;
        },
        getUserOrders: (state, action)=>{
            state.orders = action.payload;
        },
        updateOrders:(state,action) => {
            state.orders[state.orders.findIndex((item) => item._id === action.payload.id)]
                      = action.payload.orders;
         },
      
          deleteOrders: (state,action) =>{
            state.orders.splice (
              state.orders.findIndex((item) => item._id === action.payload.id), 1
          );
          },
      
           addNewOrders: (state, action) => {
            state.orders.push(action.payload);
          }
    }
});

export const {getOrders, getUserOrders, deleteOrders, updateOrders, addNewOrders} = orderSlice.actions;

export default orderSlice.reducer;