import { types } from "store/types";

export const setProducts = (products) => {
    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload: products,
    };
};
  
export const selectedProduct = (product) => {
    return {
        type: types.GET_PRODUCT_ID_SUCCESS,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: types.REMOVE_SELECTED_PRODUCT,
    };
}

export const productCategoryy = (productc) => {
    return {
        type: types.GET_PRODUCT_CATEGORY_SUCCESS,
        payload: productc
    }
};