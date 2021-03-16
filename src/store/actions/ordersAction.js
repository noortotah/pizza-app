
import { toast } from 'react-toastify';
import { firebaseInstance } from '../../axios';
import * as actionsTypes from './actionsTypes';
import { enable_is_loading } from './pizzaActions';

export const purchase_pizza_success = (order, id, history) => {
    toast.success('Your order was submitted successfuly');
    history.push({
        pathname: '/pizza'
    });
    return {
        type: actionsTypes.PURCHASE_PIZZA_SUCCESS,
        id,
        order
    }
}

export const purchase_pizza_failure = (error) => {
    toast.error('Your order was not submitted');
    return {
        type: actionsTypes.PURCHASE_PIZZA_FAILURE
    }
}

export const purchase_pizza = (order, history) => {
    return dispatch => {
        dispatch(enable_is_loading());
        firebaseInstance.post('/orders.json', order)
                        .then( response => {
                            console.log('purchasesuccess',response)
                            dispatch( purchase_pizza_success(order, response.data.name, history) );
                        })
                        .catch(error => {
                            dispatch( purchase_pizza_failure(error) );
                        });
    }
}