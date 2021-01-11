import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";

//Importing Screens

import Login from '../../../screens/public/auth/login/login'

function PublicRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
        </Switch>
    )
}

export default PublicRoutes