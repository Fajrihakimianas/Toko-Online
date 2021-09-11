import { types } from "store/types";

const intialState = {
    products: [],
};
  
export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case types.GET_PRODUCT_SUCCESS:
            return { ...state, products: payload };
        default:
            return state;
    }
};
  
export const productIdReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case types.GET_PRODUCT_ID_SUCCESS:
            return { ...state, ...payload };
        case types.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const productCategoryReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case types.GET_PRODUCT_CATEGORY_SUCCESS:
            return { ...state, ...payload };
        default:
            return state;
    }
};