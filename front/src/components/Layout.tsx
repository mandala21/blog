import styled from "styled-components";

type SideMenuProps = {
    open?: boolean
}

export const SideMenu = styled.div<SideMenuProps>`
    width: 24rem;
    position: absolute;
    transition: all .25s ease;

    @media(max-width: 800px) {
        left: ${props => props.open ? '0rem' : '-24rem'};
    }
`

export const Content = styled.div`
    margin-left: 24rem;

    @media(max-width: 800px) {
        margin-left: 0
    }
`