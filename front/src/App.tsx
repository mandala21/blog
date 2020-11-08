import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Content, SideMenu } from './components/Layout';
import SideMenuCotent from "./pages/SideMenuCotent";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Router>
      <SideMenu open={openMenu}>
        <SideMenuCotent />
      </SideMenu>
      <Content>
        <Switch>
          <Route path="/about">
            <p>About me</p>
          </Route>
          <Route path="/users">
            <p>User me</p>
          </Route>
          <Route path="/">
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
            <p>Home Page </p>
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
