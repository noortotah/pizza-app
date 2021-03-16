import React from 'react';
import { Col } from 'react-bootstrap';
import classes from './Pizza.module.css';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const Pizza = (props) => {
    let ingredientsArr = [];
    if(Object.keys(props.ingredients).length){
        ingredientsArr = Object.keys(props.ingredients)
                                .map(ingredient => [...Array(props.ingredients[ingredient])].map( (_,i) => 
                                    <PizzaIngredient key={ingredient + i} type={ingredient} /> 
                                ) )
                                .reduce((arr, el) => arr.concat(el) , []);
    }
    
    return ( 
      
                <Col md={8} className="mx-auto">
                    { ingredientsArr.length  ? 
                        <div className={classes.pizza}>
                            {ingredientsArr}
                        </div>
                        : 
                        <h3>Please start adding ingredients!</h3> 
                    } 
                </Col>
 
        
     );
}
 
export default Pizza;