import React, { useState } from "react";
import styled from "styled-components";
import IconSearch from "../assets/icon-search.svg";

interface ResultItemProps {
    title: string,
    description?: string,
}

const SearchContainer = styled.div`
    height: 2.625rem;
    background: #FFF;
    width: 90%;
    border-radius: 0.625rem;
    border: 1px solid #cbd5e0;
    box-shadow: 0px 0px 2.625rem rgba(0, 0, 0, 0.25);
    display: flex;
    position: relative;
    padding: 0 1rem;
    z-index: 5;
`

const InputSearch = styled.input`
    color: rgba(0,0,0,0.64);
    font-size: 1.25rem;
    outline: none;
    border-radius: 0.625rem;
    flex: 1;
`

const ResultContainer = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    background: #ffffff;
    z-index: 5;
    top: 2.1rem;
    left: 0;
    border-radius: 0px 0px 10px 10px;
    border: solid 1px #e2e8f0;
    border-top: 0;
    padding: 0.5rem 1rem;
    box-shadow: 0px 1rem 1rem rgba(0, 0, 0, 0.25);
`;

const BackgroundShadown = styled.div`
    position:fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background: rgba(101, 108, 133, 0.8);
    opacity: 0.24;
    width: 100vw;
    height: 100vh;
`;

const ResultItem: React.FC<ResultItemProps> = ({ title, description }) => {
    return (
        <a href="#">
            <div className="p-4 hover:bg-gray-300 rounded-lg last:border-b-0">
                <span className="block font-bold color-gray-600">{title}</span>
                <span>
                   {description}
                </span>
            </div>
        </a>
    )
}

const Search: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        if(e.target.value){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const handleCloseSearch = () => {
        setSearch('')
        setOpen(false)
    }

    return (
        <div>
            {open && <BackgroundShadown onClick={handleCloseSearch} />}
            <SearchContainer>
                <InputSearch placeholder="Porcurando por algo?" onChange={handleOnChange} value={search} />
                <img src={IconSearch} alt="pesquise por algo" />
                {open && <ResultContainer>
                    <ResultItem title="Lorem ipsun bla bla bla..." />
                    <ResultItem title="Teste" />
                    <ResultItem title="Teste" />
                </ResultContainer>}
            </SearchContainer>
        </div>
    )
}

export default Search;
