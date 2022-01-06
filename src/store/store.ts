import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer
    },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
