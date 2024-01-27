import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice.reducer";
import animeSlice from "./reducers/animeSlice.reducer";

const store = configureStore({
    reducer: {
        userSlice,
        animeSlice,


    },
});

export default store;
