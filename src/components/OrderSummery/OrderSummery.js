const OrderSummary = (props) => {
    return ( 
        <div>
            <h3>You have ordered Our delicous Pizza </h3>
            <p>You added these ingredients: </p>
            {Object.keys(props.ingredients).map( (el, index) => (
                <small key={el}> {el} - {props.ingredients[el]}</small>
            ))}
            <h6>Total Price: {props.totalPrice}</h6>
        </div>
     );
}
 
export default OrderSummary;