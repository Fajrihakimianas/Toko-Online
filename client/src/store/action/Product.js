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
  
// export const detailProductReducer = (state = {}, { type, payload }) => {
//     console.log(type);
//     switch (type) {
//         case types.GET_PRODUCT_ID_SUCCESS:
//             return { ...state, ...payload };
//         // case ActionTypes.REMOVE_SELECTED_PRODUCT:
//         //     return {};
//         default:
//             return state;
//     }
// };