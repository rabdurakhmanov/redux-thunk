import { store } from "../store";

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export type ThunkAction = (dispatch: StoreDispatch) => Promise<void>;
export type ThunkDispatch = (action: ThunkAction) => Promise<void>;

export interface Action<Type, Payload> {
    type: Type;
    payload: Payload;
}
