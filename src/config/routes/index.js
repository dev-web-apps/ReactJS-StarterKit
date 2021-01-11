import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PublicRoutes from './publicRoutes/publicRoutes'
import PrivateRoutes from './privateRoutes/privateRoutes'


// Importing Error Screens
import Error404 from '../../screens/errors/error404'


const Navigations = React.memo((props) => {
    return (
        <Router>
            {/* Public Routes */}
            <PublicRoutes />
            {/* Private Routes */}
            <PrivateRoutes />
        </Router>
    );
})


export default Navigations