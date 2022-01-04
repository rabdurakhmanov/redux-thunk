import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '../store';

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
