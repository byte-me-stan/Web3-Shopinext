import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productEditId: null,
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getSingleProduct: (state, action) => {
      state.products = action.payload;
    },
    updateProduct:(state,action) => {
      state.products[state.products.findIndex((item) => item._id === action.payload.id)]
                = action.payload.products;
   },

    deleteProduct: (state,action) =>{
      state.products.splice (
        state.products.findIndex((item) => item._id === action.payload.id), 1
    );
    },

     addNewProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setProductEditId: (state, action) => {
      state.productEditId = action.payload;
    },
    resetProductEditId: (state) => {
      state.productEditId = null;
    }
  }
  });
  export const {
    updateProduct,
    deleteProduct,
    addProduct,
    getProducts,
    getSingleProduct,
    setProductEditId,
    resetProductEditId
  } = productSlice.actions;

  export default productSlice.reducer;