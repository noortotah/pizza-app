import { firebaseInstance } from '../../axios';
import * as actionTypes from './actionsTypes';

export const add_ingredient = ingredient => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: ingredient
    }

}

export const remove_ingredient = ingredient => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient: ingredient
    }

}

export const set_ingredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetch_ingredients_failed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}

export const enable_is_loading = () => {
    return {
        type: actionTypes.ENABLE_IS_LOADING,
    }
}

export const fetch_ingredients = () => {
    return dispatch => {
        dispatch(enable_is_loading())
        firebaseInstance.get('/ingredients.json')
                        .then(response => {
                            const {data} = response;
                            dispatch( set_ingredients(data));
                            console.log(data);
                        }).catch(error => {
                            dispatch( fetch_ingredients_failed());
                        });
    }
}