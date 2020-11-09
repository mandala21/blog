import React from "react";
import ProgressBar from "../components/ProgressBar";
import styled from "styled-components";
import  IconGit from "../assets/icon-git.svg";
import  IconGo from "../assets/icon-go.svg";
import  IconInsta from "../assets/icon-insta.svg";
import  IconTwitter from "../assets/icon-twitter.svg";
import  SkillCert from "../assets/skill-cert.svg";
import  SkillPhp from "../assets/skill-php.svg";
import  SkillPython from "../assets/skill-python.svg";
import  SkillTs from "../assets/skill-ts.svg";
import SkillItem, { SkillItemProps } from "../components/SkillItem";

type LinkItemProps = {
    label: string,
    href: string,
    icon: React.ReactNode
}

type TitleMenuProps = {
    title: string,
}

const links: LinkItemProps[] = [
    {
        href: 'https://github.com/mandala21',
        icon: (<img src={IconGit} alt="perfil github" />),
        label: 'GitHub'
    },
    {
        href: 'https://www.instagram.com/lucasres1/',
        icon: (<img src={IconInsta} alt="perfil instragram" />),
        label: 'Instagram'
    },
    {
        href: 'https://twitter.com/llucasres',
        icon: (<img src={IconTwitter} alt="perfil twitter" />),
        label: 'Twitter'
    },
]

const skills: SkillItemProps[] = [
    {
        icon: (<img src={SkillCert} alt="formação em ciencia da computação" />),
        description: 'Graduado pela UESPI em 2018',
        title: 'Cientista da computação'
    },
    {
        icon: (<img src={SkillPhp} alt="php com framework laravel" />),
        title: 'PHP/Laravel',
        description: 'PHP selvagem foi minha primera linguagem, 3 anos com laravel',
    },
    {
        icon: (<img src={SkillPython} alt="python com o framework django" />),
        title: 'Python/Django',
        description: 'Python me segue desde a universidade',
    },
    {
        icon: (<img src={SkillTs} alt="typescript com o framework react" />),
        title: 'React/Typescript',
        description: 'Usei muito jquery, mas chegou a hora de mudar',
    },
]


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
            <img src={IconGo} alt="visitar link" />
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
            <TitleMenu title="Skills" />
            <div>
                {skills.map((el) => (
                    <SkillItem {...el} />
                ))}
            </div>
        </div>
    );
}

export default SideMenuCotent;
