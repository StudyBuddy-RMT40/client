import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import projectReducer from "./projectReducer";
import locationReducer from "./locationReducer";
import dashboardReducer from "./dashboardReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    location: locationReducer,
    projectReducer: projectReducer,
    dashboard: dashboardReducer,
    user: userReducer
});

export default rootReducer;
