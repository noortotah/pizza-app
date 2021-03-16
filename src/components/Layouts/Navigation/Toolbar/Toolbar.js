import { Navbar, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import pizzaShopLogo from "../../../../assets/images/logo.png";
const Toolbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Navbar.Brand href="/">
        <Image src={pizzaShopLogo} style={{ height: "40px" }} />
        <strong><i className="text-warning">Healthy</i>  Pizza</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" exact activeClassName="active" className="nav-link">
            Features
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="active"
            to={{
              pathname: "/checkout",
            }}
          >
            Checkout
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="active"
            to={{
              pathname: "/login",
              hash: "#submit",
              search: "?q=myholyLife",
            }}
          >
            Login
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="active"
            to={{
              pathname: "/eyal"
             
            }}
          >
            Eyal
          </NavLink>

        </Nav>
        <Nav>
          <Nav.Link href="/">Login</Nav.Link>
          <Nav.Link eventKey={2} href="/">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Toolbar;
