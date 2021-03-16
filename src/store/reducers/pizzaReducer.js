import * as actionTypes from '../actions/actionsTypes';

const PIZZA_INGREDIENTS_PRICES = {
    'green-pepper': 3,
    pepperonis: 4,
    cheese: 2,
    mushrooms: 3,
    pepper: 4,
    sauce: 2,
    bread: 2
};


const initialState = {
    ingredients : {},
    totalPrice: 0,
    isLoading: false
};


const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            console.log(action);
            return {
                ...state,
                ingredients : { 
                    ...state.ingredients, 
                    [action.ingredient]: state.ingredients[action.ingredient] ? state.ingredients[action.ingredient] + 1 : 1
                },
                totalPrice: state.totalPrice + PIZZA_INGREDIENTS_PRICES[action.ingredient]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients : { 
                    ...state.ingredients, 
                    [action.ingredient]: state.ingredients[action.ingredient] - 1
                },
                totalPrice: state.totalPrice - PIZZA_INGREDIENTS_PRICES[action.ingredient]
            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {...action.ingredients},
                isLoading: false
            }
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.ENABLE_IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            break;
    }
    return state;
}

export default pizzaReducer;