import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useStoreDispatch } from '../../store/hooks/storeHooks';
import { fetchUser } from '../../store/thunks/userThunk';

export function UserPage(): null {
    const { user } = useParams();
    const dispatch = useStoreDispatch();

    useEffect(() => {
        if (user) {
            dispatch(fetchUser(user));
        }
    }, []);

    return null;
}
