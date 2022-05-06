import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import productSlice from './reducers/productSlice';
import cartSlice from './reducers/cartSlice';
import authSlice from './reducers/authSlice';
import userProfileSlice from './reducers/userProfileSlice';
import orderSlice from './reducers/orderSlice';
import stateSlice from './reducers/stateSlices';
import { apiSlice } from './services/apiSlice';


export const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        auth: authSlice,
        userProfile: userProfileSlice,
        order: orderSlice,
        states: stateSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),

});

setupListeners(store.dispatch);