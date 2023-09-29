import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"
import movieReducer from "../features/movies/MoviesSlice"

export default configureStore({
    reducer :{
        user:userReducer,
        movie:movieReducer,
    },
    // middleware:getDefaultMiddleware({
    //     serializableCheck:false,
    // }),
})