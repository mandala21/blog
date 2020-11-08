import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Content, SideMenu } from './components/Layout';
import SideMenuCotent from "./pages/SideMenuCotent";
import Router from "./config/Router";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
      <SideMenu open={openMenu}>
        <SideMenuCotent />
      </SideMenu>
      <Content>
        <Router />
      </Content>
    </BrowserRouter>
  );
}

export default App;
