import { types } from "store/types";

const intialState = {
    category: [],
  };
  
export const categoryReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case types.GET_CATEGORY_SUCCESS:
            return { ...state, category: payload };
        default:
            return state;
    }
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//     console.log(type);
//     switch (type) {
//         case ActionTypes.SELECTED_PRODUCT:
//             return { ...state, ...payload };
//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//             return {};
//         default:
//             return state;
//     }
// };