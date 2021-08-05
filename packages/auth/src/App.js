import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

const App = ({ history, onSignIn }) => (
    <div>
        <StylesProvider generateClassName={ generateClassName }>
            <Router history={ history }>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={ onSignIn }/>
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={ onSignIn }/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
);

export default App;
