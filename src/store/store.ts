import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
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

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector = useSelector as TypedUseSelectorHook<StoreState>;
