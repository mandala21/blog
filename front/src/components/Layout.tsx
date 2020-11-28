import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideMenuCotent from "../pages/SideMenuCotent";
import SideMenuMobileContent from "../pages/SideMenuMobileContent";

type SideMenuProps = {
    open?: boolean
}

interface BaseLayoutProps {
    theme: 'white'|'dark'
} 

export const SideMenu = styled.div<SideMenuProps>`
    width: 24rem;
    position: absolute;
    transition: all .25s ease;
    z-index: 10;
    min-height: 100vh;

    @media(max-width: 800px) {
        left: ${props => props.open ? '0rem' : '-100vw'};
        background: #fff;
        padding-top: 2rem;
        width: 100vw;
    }
`

export const Content = styled.div<SideMenuProps>`
    margin-left: 24rem;
    padding-top: 2rem;

    @media(max-width: 800px) {
        padding-top: 6rem;
        margin-left: 0;
        display: ${props => props.open ? 'none' : 'block'}
    }
`

export const SideMenuMobile = styled.div`
    width: 100vw;
    height: auto;
    padding: 1rem 0.5rem; 
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    display: none;
    z-index: 9;

    @media(max-width: 800px) {
        display: block;
    }
`
export const BaseLayout = createGlobalStyle<BaseLayoutProps>`
    body {
        background: ${props => props.theme === 'white' ? '#EEF0F1' : '#191C36'};
    }
`

export const Layout: React.FC = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <BaseLayout theme="white" />
            <SideMenu open={openMenu}>
                <SideMenuCotent />
                <SideMenuMobileContent openMenuClick={()=>setOpenMenu(!openMenu)} />
            </SideMenu>
            <Content open={openMenu}>
                {children}
            </Content>
        </>
    )
}