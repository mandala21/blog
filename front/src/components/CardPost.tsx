import React from "react";
import styled from "styled-components";
import IconShared from "../assets/icon-shared.svg";

const DateDisplay = styled.div`
    span {
        display: block;
    }

    span:first-child{
        background: #F8A5C2;
        padding: 0.5rem;
        color: #fff;
        font-weight: bold;
    }

    span:nth-child(2){
        color: #F8A5C2;
        font-weight: bold;
    }
`

const LabelPost = styled.span`
    margin-right: 0.5rem;
    background:  #F8A5C2;
    padding: 0 0.5rem;
    color: #fff;
    border-radius: 0.5rem;
`

const CardPost: React.FC = () => {
    return (
        <div className="p-8 bg-white rounded-lg border">
            <div className="flex mb-4">
                <DateDisplay>
                    <span>25</span>
                    <span>DEZ</span>
                </DateDisplay>
                <div className="ml-4">
                    <p className="text-gray-800 font-bold">Titulo porra</p>
                    <LabelPost>
                        Historia
                    </LabelPost>
                </div>
            </div>
            <div className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum...
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500">Tempo total de leitura 5 min</span>
                <div className="cursor-pointer">
                    <img alt="comparilhar link" src={IconShared} />
                </div>
            </div>
        </div>
    );
}

export default CardPost;
