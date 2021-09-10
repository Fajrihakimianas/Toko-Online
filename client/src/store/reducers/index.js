import { combineReducers } from 'redux';
import { userReducer } from "./Auth";
import { cartReducer } from './Cart';
import { categoryReducer } from "./Category";
import { productCategory, productCategoryReducer, productIdReducer, productsReducer } from './Product';

const rootReducers = combineReducers({
    auth: userReducer,
    category: categoryReducer,
    products: productsReducer,
    productId: productIdReducer,
    productCategory: productCategoryReducer,
    cart: cartReducer
});

export default rootReducers