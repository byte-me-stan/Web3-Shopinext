import { publicRequest } from "../../requestMethod";
import {getOrders, getUserOrders, deleteOrders, updateOrders, addNewOrders} from "../reducers/orderSlice";


export const getOrder = async(dispatch) => {
    try {
        const res = await publicRequest.get('/orders');
        dispatch(getOrders(res.data));
    } catch (error) {
        console.log(error);
    }
}

export const getUserOrder = async(userId, dispatch) => {
    try {
        const res = await publicRequest.get(`/orders/find/${userId}`);
        dispatch(getUserOrders(res.data));
    } catch (error) {
        console.log(error);
    }
}

export const deleteOrder = async(id, dispatch) => {
    try {
        await publicRequest.delete(`/orders/${id}`);
        dispatch(deleteOrders(id));
    } catch (error) {
        console.log(error);
    }
}

export const updateOrder = async(id, order, dispatch) => {
    try {
        const res = await publicRequest.put(`/orders/${id}`, order);
        dispatch(updateOrders(res.data));
    } catch (error) {
        console.log(error);
    }
}

export const addOrder = async(order, dispatch) => {
    try {
        const res = await publicRequest.post('/orders');
        dispatch(addNewOrders(res.data));
    } catch (error) {
        console.log(error);
    }
}