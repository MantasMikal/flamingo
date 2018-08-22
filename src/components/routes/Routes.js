import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Facts from '../facts/Facts'
import About from '../about/About'
import './Routes.css'


function Routes({location}) {
    return(
        <React.Fragment>
            <Switch location={location}>
                <Route exact path='/' component={Facts} />
                <Route path='/about' component={About} />
            </Switch>
        </React.Fragment>
    )
}

export default withRouter(Routes);