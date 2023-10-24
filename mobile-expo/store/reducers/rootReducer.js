import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import categoryReducer from "./categoryReducer";
import locationReducer from "./locationReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  location: locationReducer,
  projectReducer: projectReducer,
  user: userReducer,
});

export default rootReducer;
