import { configureStore ,combineReducers } from "@reduxjs/toolkit";

import loginReducer from "../loginSlice"
import returndata from "../signupSlice"
import Display from "../DisplayData";
const rootReducer = combineReducers({  User:loginReducer, sigupdata:returndata, Displaydata:Display})
const store = configureStore({
   
        reducer:rootReducer,
    
});

export default store;