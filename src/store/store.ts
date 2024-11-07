import { configureStore } from "@reduxjs/toolkit";
import accessSlice from "./floorreducer";
import roleSlice from "./Rolereducer";

const store = configureStore({
    reducer: {
        floorAccess: accessSlice.reducer,
        role: roleSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;