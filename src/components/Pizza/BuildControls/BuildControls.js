import { Col } from "react-bootstrap";
import BuildControl from "./BuildControl/BuildControl";
import classes from './BuildControls.module.scss';
import { getControls } from '../../../helpers/controls';

import PropsType from 'prop-types';

const BuildControls = (props) => {
    const controls = getControls();
    let classesArr = ['list-group-flush' ,'pl-0' ,classes['list-group-box-shadow']];
    return (     
                <Col md={4} className="mx-auto">
                    <h3 className="text-center text-primary mb-4">Add Toppings</h3>
                        <ul className={classesArr.join(' ')}>
                            {controls.map( ingredient => (
                                <BuildControl
                                key={ingredient.label}
                                label={ingredient.label}
                                added={() => props.ingredientAdded(ingredient.type)}
                                removed={() => props.ingredientRemoved(ingredient.type)}
                                count={props.disabledInfo[ingredient.type]}
                                disabled={props.disabledInfo[ingredient.type] > 0 ? false : true}
                                />
                            ))}

                            <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    <h6>Total Price:</h6>
                                    <h3 className="mr-5 pr-3">{props.totalPrice}</h3>
                                    <button className="btn btn-outline-primary" type="button" disabled={!props.enablePurchase} onClick={props.showOrderSummary}>Order Now</button>
                            </li>                       
                        </ul> 
                </Col>
     
     );
}

BuildControls.propsType = {
    totalPrice: PropsType.number,
    disabledInfo: PropsType.array,
    ingredientAdded: PropsType.func,
    ingredientRemoved: PropsType.func,
    enablePurchase: PropsType.bool
}

export default BuildControls;