import styled from "styled-components";

type SideMenuProps = {
    open?: boolean
}

export const SideMenu = styled.div<SideMenuProps>`
    width: 24rem;
    position: absolute;
    transition: all .25s ease;
    z-index: 10;
    min-height: 100vh;

    @media(max-width: 800px) {
        left: ${props => props.open ? '0rem' : '-24rem'};
        background: #fff;
        padding-top: 2rem;
    }
`

export const Content = styled.div`
    margin-left: 24rem;
    padding-top: 2rem;

    @media(max-width: 800px) {
        padding-top: 6rem;
        margin-left: 0
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
