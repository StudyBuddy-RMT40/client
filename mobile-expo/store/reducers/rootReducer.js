import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import categoryReducer from "./categoryReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    location: locationReducer,
    projectReducer: projectReducer,
})


export default rootReducer