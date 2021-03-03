import React, { Component, Fragment } from 'react';
import OrderSummary from '../../components/OrderSummery/OrderSummery';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Pizza from "../../components/Pizza/Pizza";
import UIModal from '../../components/UI/Modal/Modal';

const PIZZA_INGREDIENTS_PRICES = {
    cheese: 2,
    mushrooms: 3,
    pepper: 4,
    sauce: 2,
    bread: 2
};

class PizzaBuilder extends Component {
    state = {  
        ingredients : {
            mushrooms: 3,
            sauce: 1,
            cheese: 1,
            bread : 1
             
        },
        totalPrice: 19,
        enablePurchase: false,
        modalShow: false,
    }

    componentDidMount(){
        this.updateEnablePurchase({...this.state.ingredients});
    }

    updateEnablePurchase = (ingredients) => {
        console.log(ingredients);
        let sum = Object.keys(ingredients)
                        .map(key => ingredients[key])
                        .reduce( (sum, el) => sum + el ,0);
        this.setState({enablePurchase: sum > 0 })
        console.log('sum', sum);
    }

    addIngredientHandler = (ingredientType) => {
        const oldCount = this.state.ingredients[ingredientType];
        const updatedIngredients = { ...this.state.ingredients};
        updatedIngredients[ingredientType] = oldCount + 1;

        this.setState((prevState) => {
            return {
                ingredients : updatedIngredients,
                totalPrice: prevState.totalPrice + PIZZA_INGREDIENTS_PRICES[ingredientType]
            }
        })
        console.log('updatedIngredients',updatedIngredients);
        this.updateEnablePurchase(updatedIngredients);
    }

    removeIngredientHandler = (ingredientType) => {
        const oldCount = this.state.ingredients[ingredientType];
        const updatedIngredients = { ...this.state.ingredients};
        if(oldCount > 0)
            updatedIngredients[ingredientType] = oldCount - 1;

        this.setState((prevState) => {
            console.log(prevState);
            return {
                ingredients : updatedIngredients,
                totalPrice: oldCount > 0 ? prevState.totalPrice - PIZZA_INGREDIENTS_PRICES[ingredientType] : prevState.totalPrice
            }
        })
        console.log('updatedIngredients',updatedIngredients);
        this.updateEnablePurchase(updatedIngredients);
    }

    getdisabledInfo = () => {
        const disabledInfo = [];
        Object.entries(this.state.ingredients).forEach(element => {
            disabledInfo[element[0]] = element[1] ;
           
        });
        return disabledInfo;
    }

    setModalShow = (value) => {
        this.setState({modalShow: value});
    }

    modalSuccessResponse = () => {}

    render() { 
        return ( 
            <Fragment>

                <UIModal show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                        onSuccess={() => this.modalSuccessResponse()}
                        title="Order Summary"
                >
                    <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
                </UIModal>
                
                
                <Pizza ingredients={this.state.ingredients}></Pizza>

                <BuildControls  ingredientAdded={this.addIngredientHandler.bind(this)} 
                                totalPrice={this.state.totalPrice}
                                ingredientRemoved={this.removeIngredientHandler.bind(this)}
                                disabledInfo={this.getdisabledInfo()}
                                enablePurchase={this.state.enablePurchase}
                                showOrderSummary={() => this.setModalShow(true)}/>
            </Fragment>
         );
    }
}
 
export default PizzaBuilder;