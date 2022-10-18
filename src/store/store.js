import { configureStore } from "@reduxjs/toolkit";
import { activitiesSlice } from "./activities";
import { authSlice } from "./auth";
import { usersSlice } from "./users";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: usersSlice.reducer,
        activities: activitiesSlice.reducer,

    },
})