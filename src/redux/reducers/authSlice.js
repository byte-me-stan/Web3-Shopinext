import { createSlice } from "@reduxjs/toolkit";


 const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authData: localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : null
    },
    reducers: {
        loginWithGoogle: (state, action) => {
            const {result, token} = action?.payload;
            localStorage.setItem('profile', JSON.stringify(action?.payload));
            state.authData = action?.payload;
        },
        login: (state, action) => {
            localStorage.setItem('profile', JSON.stringify(action.payload));
            state.authData = action.payload;
        },
        register: (state, action) => {
            localStorage.setItem('profile', JSON.stringify(action.payload));
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = null,
            localStorage.clear();
        }
    }
});


export const {loginWithGoogle, login, register, logout} = authSlice.actions;

export default authSlice.reducer;

