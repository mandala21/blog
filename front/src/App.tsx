import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Content, SideMenu } from './components/Layout';
import SideMenuCotent from "./pages/SideMenuCotent";
import Router from "./config/Router";
import SideMobileContent from "./pages/SideMenuMobileContent";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
      <SideMenu open={openMenu}>
        <SideMenuCotent />
        <SideMobileContent openMenuClick={()=>setOpenMenu(!openMenu)} />
      </SideMenu>
      <Content>
        <Router />
      </Content>
    </BrowserRouter>
  );
}

export default App;
