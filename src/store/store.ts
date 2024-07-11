import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedTodoReducer = persistReducer(persistConfig, todoReducer)

const store = configureStore({
    reducer: {
        todo: persistedTodoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export default store;
export type RootState = ReturnType<typeof store.getState>