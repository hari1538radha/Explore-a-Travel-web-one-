import { configureStore ,combineReducers } from "@reduxjs/toolkit";

import loginReducer from "../loginSlice"
import returndata from "../signupSlice"
const rootReducer = combineReducers({  User:loginReducer, sigupdata:returndata })
const store = configureStore({
   
        reducer:rootReducer,
    
});

export default store;