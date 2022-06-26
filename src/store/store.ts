import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { StoreDispatch, StoreState, ThunkDispatch } from "./models/store.model";
import { userReducer } from "./reducers/user.reducer";
import { usersReducer } from "./reducers/users.reducer";

export const store = createStore(
    combineReducers({ user: userReducer, users: usersReducer }),
    applyMiddleware(thunk)
);

export const useStoreSelector = useSelector as TypedUseSelectorHook<StoreState>;
export const useStoreDispatch = function () {
    return useDispatch<StoreDispatch>();
};
export const useThunkDispatch = function () {
    return useDispatch<ThunkDispatch>();
};
