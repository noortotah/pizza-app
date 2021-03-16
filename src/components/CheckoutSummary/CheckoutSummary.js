import { Col, Container, Row } from "react-bootstrap";
import { Route, withRouter } from "react-router-dom";
import ContactForm from "../../containers/ContactForm/ContactForm";
import Pizza from "../Pizza/Pizza";

const CheckoutSummary = (props) => {
    return ( 
        
        <Container className="pt-5">
            <Row className="d-flex h-100 justify-content-center align-items-center">
               
                <Pizza className="mt-5 d-flex align-items-center justify-content-center" ingredients={props.ingredients}></Pizza>
                <Col className="my-5 d-flex justify-content-center">
                    <button type="button" className="btn btn-warning mr-2" onClick={props.cancelCheckout}>Back</button>
                    <button type="submit" className="btn btn-primary" onClick={props.continueCheckout}>Continue</button>
                </Col>  
            </Row>
            <Route  path={props.match.path + '/contact-data'} 
                    // render={() => ( <ContactForm /> )}
                    component={ContactForm}
            />
            
        </Container>
     );
}
 
export default withRouter(CheckoutSummary);