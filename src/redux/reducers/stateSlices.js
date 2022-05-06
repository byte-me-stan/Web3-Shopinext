import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name: "states",
    initialState: {
        page: 'home',
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
    }
});

export const {setPage} = stateSlice.actions;

export default stateSlice.reducer;
