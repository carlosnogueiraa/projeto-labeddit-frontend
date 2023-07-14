import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/counterSlice";
import { postSlice } from "../redux/postReducer";
import { commentsSlice } from "../redux/commentsReducer";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        postSlice: postSlice.reducer,
        commentsSlice: commentsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch