import { combineReducers } from 'redux';
import { userReducer } from "./Auth";
import { cartReducer } from './Cart';
import { categoryReducer } from "./Category";
import { productCategoryReducer, productIdReducer, productsReducer } from './Product';
import { searchReducer } from './Search';

const rootReducers = combineReducers({
    auth: userReducer,
    category: categoryReducer,
    products: productsReducer,
    productId: productIdReducer,
    categoryproduct: productCategoryReducer,
    cart: cartReducer,
    search: searchReducer

});

export default rootReducers