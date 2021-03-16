import React, { Component } from 'react';
import { Fragment } from "react";
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {  
        // ingredients : {},
        // totalPrice: 0,
        isLoading: false
    }

    componentDidMount(){
        // console.log('ccheckout omponentwillmount');
        // const query = new URLSearchParams(this.props.location.search);
        // const ingredients = {};
        // let totalPrice = 0;

        // query.forEach( (element,index) => {
        //     console.log(index, element);
        //     if(index === 'price'){
        //         totalPrice = element;
        //     }else{
        //         ingredients[index] = +element;
        //     }

        // });
        // console.log('checkout componentwillmount' , ingredients);
        // this.setState({ingredients : ingredients, totalPrice: totalPrice});
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() { 
        return ( 
            <Fragment>
                <CheckoutSummary 
                        totalPrice={this.props.$totalPrice}
                        ingredients={this.props.$ingredients}
                        cancelCheckout={this.cancelCheckoutHandler}
                        continueCheckout={this.continueCheckoutHandler}
                    />
                
         
            </Fragment>
         );
    }
}

const mapStateToProps = state => {
    return {
        $ingredients : state.pizzaReducer.ingredients,
        $totalPrice : state.pizzaReducer.totalPrice
    }
}
// const mapDispatchToProps = dispatch => {
//     return null;
// }
export default connect(mapStateToProps)(Checkout);