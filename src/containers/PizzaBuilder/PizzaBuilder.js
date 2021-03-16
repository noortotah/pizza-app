import React, { Component, Fragment } from 'react';
import OrderSummary from '../../components/OrderSummery/OrderSummery';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Pizza from "../../components/Pizza/Pizza";
import UIModal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import { add_ingredient, remove_ingredient } from '../../store/actions';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { fetch_ingredients } from '../../store/actions/pizzaActions';


class PizzaBuilder extends Component {
    state = {  
        // ingredients : {},
        // totalPrice: 0,
        // enablePurchase: false,
        modalShow: false
    }

    componentDidMount(){
        console.log('componentDidMount');
        if(!Object.keys(this.props.$ingredients).length)
            this.props.$fetchIngredients()  
    }

    updateEnablePurchase = (ingredients) => {
        console.log(ingredients);
        let sum = Object.keys(ingredients)
                        .map(key => ingredients[key])
                        .reduce( (sum, el) => sum + el ,0);
        // this.setState({enablePurchase: sum > 0 })
        return sum > 0 ? true : false;
    }

    // addIngredientHandler = (ingredientType) => {
    //     const oldCount = this.state.ingredients[ingredientType];
    //     const updatedIngredients = { ...this.state.ingredients};
    //     updatedIngredients[ingredientType] = oldCount + 1;

    //     // this.setState((prevState) => {
    //     //     return {
    //     //         ingredients : updatedIngredients,
    //     //         totalPrice: prevState.totalPrice + PIZZA_INGREDIENTS_PRICES[ingredientType]
    //     //     }
    //     // })
    //     console.log('updatedIngredients',updatedIngredients);
    //     this.updateEnablePurchase(updatedIngredients);
    // }

    // removeIngredientHandler = (ingredientType) => {
    //     const oldCount = this.state.ingredients[ingredientType];
    //     const updatedIngredients = { ...this.state.ingredients};
    //     if(oldCount > 0)
    //         updatedIngredients[ingredientType] = oldCount - 1;

    //     // this.setState((prevState) => {
    //     //     console.log(prevState);
    //     //     return {
    //     //         ingredients : updatedIngredients,
    //     //         totalPrice: oldCount > 0 ? prevState.totalPrice - PIZZA_INGREDIENTS_PRICES[ingredientType] : prevState.totalPrice
    //     //     }
    //     // })
    //     console.log('updatedIngredients',updatedIngredients);
    //     this.updateEnablePurchase(updatedIngredients);
    // }

    getdisabledInfo = () => {
        const disabledInfo = [];
        Object.entries(this.props.$ingredients).forEach(element => {
            disabledInfo[element[0]] = element[1] ;
           
        });
        console.log('disabledInfo', disabledInfo);
        return disabledInfo;
    }

    setModalShow = (value) => {
        this.setState({modalShow: value});
    }

    modalSuccessResponse = () => {
        // let queryParams = [];
        // for (const key in this.props.$ingredients) {
        //     queryParams.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.props.$ingredients[key]))
        // }
        // queryParams.push('price='+ this.props.$totalPrice);
        this.props.history.push({
            pathname: '/checkout',
            // search : '?' + queryParams.join('&')
        });
    }

    render() { 
        return ( 
            <Fragment>

                <UIModal show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                        onOk={() => this.modalSuccessResponse()}
                        title="Order Summary"
                >
                   <OrderSummary ingredients={this.props.$ingredients} totalPrice={this.props.$totalPrice} />
                    
                </UIModal>
                
                <Container className="pt-5">
                    <Row className="row d-flex h-100 justify-content-center align-items-center">
                        { this.props.isLoading && <Spinner/>}
                        {!this.props.isLoading &&
                            <Pizza ingredients={this.props.$ingredients}></Pizza>
                        }

                    {!this.props.isLoading &&
                    <BuildControls  ingredientAdded={this.props.$onAddIngredient} 
                                    totalPrice={this.props.$totalPrice}
                                    ingredientRemoved={this.props.$onRemoveIngredient}
                                    disabledInfo={this.getdisabledInfo()}
                                    enablePurchase={this.updateEnablePurchase(this.props.$ingredients)}
                                    showOrderSummary={() => this.setModalShow(true)}/>
                }
                    </Row>
                </Container>
            </Fragment>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        $ingredients : state.pizzaReducer.ingredients,
        $totalPrice: state.pizzaReducer.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        $onAddIngredient: (ingredient) => dispatch(add_ingredient(ingredient)),
        $onRemoveIngredient: (ingredient) => dispatch(remove_ingredient(ingredient)),
        $fetchIngredients: () => dispatch(fetch_ingredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);