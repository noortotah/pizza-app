import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const Pizza = (props) => {
    let ingredientsArr = Object.keys(props.ingredients)
                                .map(ingredient => [...Array(props.ingredients[ingredient])].map( (_,i) => 
                                    <PizzaIngredient key={ingredient + i} type={ingredient} /> 
                                ) )
                                .reduce((arr, el) => arr.concat(el) , []);
    if(ingredientsArr.length === 0) {
        ingredientsArr = <h3>Please start adding ingredients!</h3>
    }
    // console.log(ingredientsArr);
    return ( 
        <Container>
            <Row>
                <Col md={8} className="mx-auto">
                    {ingredientsArr}
                </Col>
            </Row>
        </Container>
        
     );
}
 
export default Pizza;