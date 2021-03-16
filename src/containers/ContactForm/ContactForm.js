import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrors from '../../hoc/withErrors/withErrors';
import { useForm } from "react-hook-form";
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { purchase_pizza } from '../../store/actions/ordersAction';

const ContactForm = (props) => {
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm();

    const orderHandler = (data) => {
        const order  = {
            ingredients: props.$ingredients,
            totalPrice: props.$totalPrice,
            contactInfo : {...data}
        }

        props.$onPurchasePizza(order, history);
    }

    return ( 
        <Row>
            <Col>
                <h3>Contact Data</h3>
                {props.isLoading && <Spinner />}
                {/* onSubmit={this.orderHandler} */}
                {!props.isLoading && <form onSubmit={handleSubmit(orderHandler)} >
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Name" defaultValue="" ref={register({ required: true })} />
                                {errors.name && <small className="form-text text-muted">This field is required</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" placeholder="Email" defaultValue="" ref={register({ required: true })}/>
                                {errors.email && <small className="form-text text-muted">This field is required</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="tel">Tel</label>
                                <input type="text" className="form-control" name="tel" placeholder="Tel" defaultValue="" ref={register({ required: true })}/>
                                {errors.tel && <small className="form-text text-muted">This field is required</small>}
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" name="city" placeholder="City" defaultValue="" ref={register({ required: true })}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <input type="text" className="form-control" name="street" placeholder="Street" defaultValue="" ref={register({ required: true })} />
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="">&nbsp;</label>
                            <button type="submit" className="d-block btn btn-success">Order</button>
                            </div>
                            
                        </Col>
                    </Row>
                </form>}    
            </Col>
        </Row>
        
     );
}

const mapStateToProps = state => {
    return {
        $ingredients : state.pizzaReducer.ingredients,
        $totalPrice: state.pizzaReducer.totalPrice,
        $isLoading: state.ordersReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        $onPurchasePizza : (order, history) => dispatch(purchase_pizza(order, history))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactForm));
