import * as actionsTypes from '../actions/actionsTypes';

const inintialState = {
    orders: [],
    isLoading: false
};


const ordersReducer = (state = inintialState, action) => {
    switch (action.type) { 
        case actionsTypes.PURCHASE_PIZZA_SUCCESS:
            console.log('PURCHASE_PIZZA_SUCCESS', action);
            return {
                ...state,
                isLoading: false,
                orders: state.orders.concat({ id:action.id, ...action.order })
            }
        case actionsTypes.PURCHASE_PIZZA_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case actionsTypes.ENABLE_IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        
    
        default:
            return state;
    }
}

export default ordersReducer;