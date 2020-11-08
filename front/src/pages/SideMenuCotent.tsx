import React from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";

type LinkItemProps = {
    label: string,
    href: string,
    icon: React.ReactNode
}

type TitleMenuProps = {
    title: string,
}

const HastagTitle = styled.span`
    color: #F8A5C2;
    font-weight: bold;
`

const LinkItem: React.FC<LinkItemProps> = ({ label, href, icon }) => {
    return (
        <p>Link</p>
    )
}

const TitleMenu : React.FC<TitleMenuProps>= ({ title }) => {
    return (
        <h2 className="text-xl mb-4">
            <HastagTitle>#</HastagTitle> <span className="font-bold">{title}</span>
        </h2>
    )
}

function SideMenuCotent() {
    return (
        <div className="border border-black px-8 mt-8">
            {/* header */}
            <div className="flex mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-400"></div>
                <div className="flex flex-col leading-4 ml-4 mt-2 flex-1">
                    <strong className="">Lucas Resende</strong>
                    <span className="font-thin">Back/Front Dev</span>
                    <ProgressBar progress={83} lvl={2} />
                </div>
            </div>
            {/* Links */}
            <TitleMenu title="Redes Sociais" />
        </div>
    );
}

export default SideMenuCotent;
