import React from "react";
import styled from "styled-components";
import IconShared from "../assets/icon-shared.svg";
import { parseDateToBr } from "../utils/date";

type CardPostProps = {
    created_at: string,
    title: string,
    labels: string[],
    preview: string,
    time: string
}

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
        text-transform: capitalize;
    }
`

const LabelPost = styled.span`
    margin-right: 0.5rem;
    background:  #F8A5C2;
    padding: 0 0.5rem;
    color: #fff;
    border-radius: 0.5rem;
`

const CardPost: React.FC<CardPostProps> = ({ title, created_at, labels, preview, time }) => {
    let date = new Date(created_at)
    const month = parseDateToBr(date, 'MMM')
    const day = parseDateToBr(date, 'dd')
    return (
        <div className="p-8 bg-white rounded-lg border hover:shadow-lg">
            <div className="flex mb-4">
                <DateDisplay>
                    <span>{day}</span>
                    <span>{month}</span>
                </DateDisplay>
                <div className="ml-4">
                    <p className="text-gray-800 font-bold">{title}</p>
                    {labels.map((el, i) => (
                        <LabelPost key={i}>
                            {el}
                        </LabelPost>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                {preview}
            </div>
            <div className="flex justify-between">
                <span className="text-gray-500">Tempo total de leitura {time}</span>
                <div className="cursor-pointer">
                    <img alt="comparilhar link" src={IconShared} />
                </div>
            </div>
        </div>
    );
}

export default CardPost;
