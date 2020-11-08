import React from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import  IconGit from "../assets/icon-git.svg";
import  IconGo from "../assets/icon-go.svg";
import  IconInsta from "../assets/icon-insta.svg";
import  IconTwitter from "../assets/icon-twitter.svg";

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
        <a className="flex justify-between border border-gray-400 p-2 rounded-lg bg-white mb-2" href={href} target="_blank mb-8">
            <div className="flex">
                {icon} <span className="ml-4">{label}</span>
            </div>
            <img src={IconGo} />
        </a>
    )
}

const TitleMenu : React.FC<TitleMenuProps>= ({ title }) => {
    return (
        <h2 className="text-xl mb-4">
            <HastagTitle>#</HastagTitle> <span className="font-bold">{title}</span>
        </h2>
    )
}

const links: LinkItemProps[] = [
    {
        href: 'https://github.com/mandala21',
        icon: (<img src={IconGit} />),
        label: 'GitHub'
    },
    {
        href: 'https://www.instagram.com/lucasres1/',
        icon: (<img src={IconInsta} />),
        label: 'Instagram'
    },
    {
        href: 'https://twitter.com/llucasres',
        icon: (<img src={IconTwitter} />),
        label: 'Twitter'
    },
]

function SideMenuCotent() {
    return (
        <div className="px-8 mt-8">
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
            {links.map((el) => (
                <LinkItem {...el} />
            ))}
        </div>
    );
}

export default SideMenuCotent;
