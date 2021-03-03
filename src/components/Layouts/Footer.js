import { Col, Container, Row } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div className="bg-secondary">
      <Container className="py-3">
        <Row>
          <Col>
            <div className="float-left d-flex align-items-center">
              <ul className="list-inline  d-flex align-items-center p-0 m-0">
                <li className="list-inline-item">
                  <small>Home</small>
                </li>
                <li className="list-inline-item">
                  <small>Pizza</small>
                </li>
                <li className="list-inline-item">
                  <small>Checkout</small>
                </li>
              </ul>
            </div>
            <div className="float-right">
              <small>Noor Totah</small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
