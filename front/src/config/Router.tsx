import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

export const RoutesDefinitations = {
    HOME: { title: 'Home', path: '/', link: '/' },
}

const Router = () => {
    return (
        <Switch>
            <div className="mx-4 md:mx-32">
                <Route path={RoutesDefinitations.HOME.path} component={Home}  />
            </div>
        </Switch>
    )
}

export default Router;
