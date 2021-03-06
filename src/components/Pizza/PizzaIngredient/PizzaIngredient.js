import React, { Component } from 'react';
import PropsType from 'prop-types';

import classes from './PizzaIngredient.module.css';

class PizzaIngredient extends Component {
    
    render() { 
        let ingredient = null;
        switch (this.props.type) {
            case 'bread':
                ingredient = <div className={classes.crust}></div>
                break;
            case 'cheese':
                ingredient = <div className={classes.cheese}></div>
                break;
            case 'sauce':
                ingredient = <div className={classes.sauce}></div>
                break;
            case 'mushrooms':
                let mushrooms = []
                for (let index = 0; index < 8; index++) {
                    mushrooms.push( 'n' + Math.floor(Math.random() * (32 - 1) + 1));
                }
                // console.log('mushrom', mushrooms);

                ingredient = mushrooms.map( (mushroom,index) => (
                    <div key={index} className={[classes.mushroom, classes[mushroom] ].join(' ')}>
                                <div className={classes.cap}></div>
			                    <div className={classes.stem}></div>
                    </div>
                ));
                
                
                    break;
                case 'pepperonis':
                    let pepperonis = []
                    for (let index = 0; index < 8; index++) {
                        pepperonis.push( 'n' + Math.floor(Math.random() * (32 - 1) + 1));
                    }
                
                    ingredient = pepperonis.map( (pepperoni,index) => (
                        <div key={index} className={[classes.pepperoni, classes[pepperoni] ].join(' ')}>
                          
                        </div>
                    ));
                    break;

                    case 'green-pepper':
                        let peppers = []
                        for (let index = 0; index < 8; index++) {
                            peppers.push( 'n' + Math.floor(Math.random() * (32 - 1) + 1));
                        }
                    
                        ingredient = peppers.map( (pepper,index) => (
                            <div key={index} className={[classes.greenPepper, classes[pepper] ].join(' ')}>
                              
                            </div>
                        ));
                        break;
                    
        
            default:
                break;

            
        }

        return ( ingredient );
    }
}

PizzaIngredient.propsType = {
    type: PropsType.string.isRequired
};
 
export default PizzaIngredient;