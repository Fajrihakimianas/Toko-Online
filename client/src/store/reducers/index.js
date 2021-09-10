import { combineReducers } from 'redux';
import { userReducer } from "./Auth";
import { categoryReducer } from "./Category";

const rootReducers = combineReducers({
    auth: userReducer,
    category: categoryReducer
});

export default rootReducers