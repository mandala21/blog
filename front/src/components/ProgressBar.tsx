import React from "react";
import styled from "styled-components";

type ProgressProps = {
    progress: number
}

type ProgressBarProps = {
    progress: number;
    lvl?: number;
}

const ProgressBarConatiner = styled.div`
    width: 100%;
    height: 0.375rem;
    background: #596275;
    border-radius: 0.375rem;
    margin-top: 0.55rem;
`

const Progress = styled.div<ProgressProps>`
    width: ${props => `${props.progress}%`};
    height: 0.375rem;
    background: #F8A5C2;
    border-radius: 0.375rem;
    position: relative;
    top: -1.125rem;
    left: 0;
`

const LvlContainer = styled.div`
    position: relative;
    width: 1.125rem;
    height: 1.125rem;
    top: -0.35rem;
    z-index: 5;
    background: #596275;
    display: flex;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
`

const ProgressBar: React.FC<ProgressBarProps> = ({progress, lvl}) => {
    return (
        <ProgressBarConatiner>
            {lvl && <LvlContainer>
                {lvl}
            </LvlContainer>}
            <Progress progress={progress} />
        </ProgressBarConatiner>
    )
}

export default ProgressBar;
