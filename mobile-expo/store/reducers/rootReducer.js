import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    location: locationReducer
})


export default rootReducer