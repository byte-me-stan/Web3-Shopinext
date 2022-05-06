
import { publicRequest } from '../../requestMethod';
import { getProducts, updateProduct,
    deleteProduct,
    addProduct, getSingleProduct } from '../reducers/productSlice';
    
export const getProduct = async (dispatch) => {
    try {
        const res = await publicRequest.get('/products/');
        dispatch(getProducts(res.data));
    } 
    catch (error) {
        console.log(error.message);
    }
}

export const deleteProducts = async(id, dispatch) => {
    try {
        await publicRequest.delete(`/products/${id}`);
        dispatch(deleteProduct(id));
    }
    catch (error) {
        console.log(error);
    }
};

export const addProducts = async(product, dispatch) => {
    try {
        const res = await publicRequest.post('/products', product);
        dispatch(addProduct(res.data));
    }
    catch(error){
        console.log(error);
    }
}


export const updateProducts = async(id, product, dispatch) => {
    try {
        const res = await publicRequest.put(`/products/${id}`, product);
        dispatch(updateProduct(res.data));
    } 
    catch (error) {
        console.log(error);
    }
}

export const getSingleProducts = async(id, dispatch) => {
    try {
        const res = await publicRequest.get(`/products/${id}`);
        dispatch(getSingleProduct(res.data));
    } catch (error) {
        console.log(error);
    }
}