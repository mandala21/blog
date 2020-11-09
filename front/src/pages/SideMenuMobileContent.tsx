import React from "react";
import { SideMenuMobile } from "../components/Layout";
import IconMenu from "../assets/icon-menu.svg";

interface SideMenuMobileContentProps {
    openMenuClick?: () => void
}

const SideMenuMobileContent: React.FC<SideMenuMobileContentProps> = ({ openMenuClick }) => {
    return(
        <SideMenuMobile>
            <div className="flex">
                <img src={IconMenu} alt="ativar menu" onClick={openMenuClick} />
                <span className="block ml-8">LucasResende.dev</span>
            </div>
        </SideMenuMobile>
    )
}

export default SideMenuMobileContent;
