import axios from 'axios';
import { toast } from 'react-toastify';
import * as actionsTypes from './actionsTypes';

export const authorize_user_success = (userData) => {
    return {
        type: actionsTypes.AUTHORIZATION_SUCCESS,
        userData
    }
}

export const authorize_user_failure = (error) => {
    toast.error('Not Authorized');
    return {
        type: actionsTypes.AUTHORIZATION_FAILURE,
        error
    }
}

export const authorize_user = (userData) => {
    return dispatch => {
        //code for auth
        console.log(userData);
        userData = { ...userData, returnSecureToken: true};
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEWvbCzyIDLzmTyU2FcnQR32cEmM_wkjA', userData)
        .then(response => {
            console.log(response);
            dispatch(authorize_user_success(response.data))
        })
        .catch(error => {
            console.log('in catch');
            console.log(error.data)
            dispatch(authorize_user_failure('error'))
        })
    }
}