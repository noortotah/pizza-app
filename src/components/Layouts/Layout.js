import React, { Fragment } from 'react';
import Footer from './Footer';
import Toolbar from './Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Fragment>
        <Toolbar />
        <main className="mt-5">
            {props.children}
            <Footer />
        </main>
    </Fragment>
);
 
export default Layout;