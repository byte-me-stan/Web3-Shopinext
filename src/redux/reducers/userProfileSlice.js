import {createSlice} from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userProfile: [],
        userEditId: null,
    },
    reducers: { 
        getUserProfile:(state, action) => {
            state.userProfile = action.payload;
        },
        
        deleteUserProfile:(state, action) =>  {
            state.userProfile.splice (
                state.userProfile.findIndex((item) => item._id === action.payload.id), 1
            );
        },
        updateUserProfile: (state, action) => {
            state.userProfile[state.userProfile.findIndex((item) => item._id === action.payload.id)]
                = action.payload.userProfile;
        },
        addUserProfile: (state, action) => {
            state.userProfile.push(action.payload);
        },
        setUserEditId: (state, action) => {
            state.userEditId = action.payload;
        },
        resetUserEditId: (state) => {
            state.userEditId = null;
        }
    }
});

export const { getUserProfile, addUser, deleteUserProfile, setUserEditId, resetUserEditId, updateUserProfile, addUserProfile} = userProfileSlice.actions;
export default userProfileSlice.reducer;