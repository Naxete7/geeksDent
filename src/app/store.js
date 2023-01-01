import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../containers/User/userSlice";
import AuthSlice from "../Slices/AuthSlice";


const store = configureStore({
    reducer: {
        user: AuthSlice
    },
});

//export default configureStore({
//    reducer: {
//        user: userReducer,
//    }
//})

export default store;