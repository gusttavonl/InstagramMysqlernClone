import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home"
import Publicacao from "./pages/Publicacao/Publicacao"

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/publicacao" exact component={Publicacao} />
            </Switch>
        </BrowserRouter>
    )
}