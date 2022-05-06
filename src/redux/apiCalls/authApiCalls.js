import { publicRequest } from "../../requestMethod";
import { login, register } from "../reducers/authSlice";


export const loginUser = async(dispatch, user) => {
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(login(res.data));
    } catch (err) {
        console.log(err)
    }
}

export const registerUser =  async (dispatch, user) => {
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(register(res.data));
    } catch(err) {
        console.log(err);
    }
}