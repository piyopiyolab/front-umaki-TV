import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice.reducer";


const store = configureStore({
    reducer: {
        userSlice,


    },
});

export default store;
