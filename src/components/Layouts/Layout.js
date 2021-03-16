import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Checkout from "../../containers/Checkout/Checkout";
import Eyal from "../../containers/eyal/eyal";
import PizzaBuilder from "../../containers/PizzaBuilder/PizzaBuilder";
import LoginForm from "../Form/LoginForm";
import Footer from "./Footer";
import Toolbar from "./Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Fragment>
    <Toolbar />
    <ToastContainer />
    <main >
      {/* {props.children} */}
      
      <div style={{ minHeight: '680px' }}>
      <Switch>
        <Route path="/pizza" component={PizzaBuilder} />
        {/* <Route path="/vip" render={() => <Actor actorName="a" />} /> */}
        <Route path="/login" component={LoginForm} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/eyal/:id" component={Eyal} />
        <Route path="/eyal" component={Eyal} />
        
        {/* <Route path="/not-found" component={NotFound} /> */}
        <Redirect from="/" exact to="/pizza" />
        <Redirect to="/not-found" />
      </Switch>
      </div>
      <Footer/>
    </main>
  </Fragment>
);

export default Layout;
