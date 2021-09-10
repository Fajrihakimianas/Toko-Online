import { types } from "store/types";

export const setCategory = (category) => {
    return {
        type: types.GET_CATEGORY_SUCCESS,
        payload: category,
    };
};