import React, { useState } from "react";
import styled from "styled-components";
import { setSourceMapRange } from "typescript";
import IconSearch from "../assets/icon-search.svg";

interface SearchProps {
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
}

const SearchContainer = styled.div`
    height: 2.625rem;
    background: #FFF;
    width: 90%;
    border-radius: 0.625rem;
    border: 1px solid #cbd5e0;
    box-shadow: 0px 0px 2.625rem rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 0 1rem;
`

const InputSearch = styled.input`
    color: rgba(0,0,0,0.64);
    font-size: 1.25rem;
    outline: none;
    border-radius: 0.625rem;
    flex: 1;
`

const Search: React.FC<SearchProps> = ({ onChange }) => {
    const [open, setOpen] = useState(false)

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        if(onChange){
            onChange(e)
        }
        setOpen(true)
    }

    return (
        <div>
            <SearchContainer>
                <InputSearch placeholder="Porcurando por algo?" onChange={handleOnChange} />
                <img src={IconSearch} alt="pesquise por algo" />
            </SearchContainer>
        </div>
    )
}

export default Search;
