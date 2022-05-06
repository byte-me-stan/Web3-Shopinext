import { publicRequest } from "../../requestMethod";

import { getUserProfile, addUser, deleteUserProfile, updateUserProfile, addUserProfile} from "../reducers/userProfileSlice";
const userId = JSON.parse(localStorage.getItem('profile'))?.result?.googleId;


export const getUsersProfile = async(dispatch) => {
    try {
        const res  = await publicRequest.get(`/userProfiles/${userId}`)
        dispatch(getUserProfile(res.data));
    } catch (error) {
        console.log(error.message);
    }
}

export const getUsersProfiles = async(dispatch) => {
    
    try {
        const res = await publicRequest.get('/userProfiles/');
        dispatch(getUserProfile(res.data));
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUsersProfile = async(id, dispatch) => {
    try {
        await publicRequest.delete(`/userProfiles/${id}`);
        dispatch(deleteUserProfile(id));
    } catch (error) {
        console.log(error);
    }
}

export const updateUsersProfile = async(id, userProfile, dispatch) => {
    try {
        const res = publicRequest.put(`/userProfiles/${id}`, userProfile);
        dispatch(updateUserProfile(res.data));
    } catch (error) {
        console.log(error);
    }
}

export const addUsersProfile = async(userProfile, dispatch) => {
    try {
        const res = publicRequest.post('/userProfiles', {userId, ...userProfile});
        dispatch(addUserProfile(res.data));
    } catch (error) {
        console.log(error);
    }
}

export const addUserByAdminProfile = async(userProfile, dispatch) => {
    try {
        const res = publicRequest.post('/userProfiles', userProfile);
        dispatch(addUser(res.data));
    } catch (error) {
        console.log(error);
    }
}