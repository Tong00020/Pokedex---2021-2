import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PaginaInicial from "./PaginaInicial";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <PaginaInicial />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;