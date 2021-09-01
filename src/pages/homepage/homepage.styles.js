import styled, { css, keyframes } from 'styled-components';
import { Link } from "react-router-dom";

const Text = css`
    text-align: center;
    color:${props => props.fontColor || "#000"};
`;

export const VerticalCenter = styled.div`
    /* background: red; */
    height: 80vh;
    display: grid;
    grid-template-rows: 1.5fr 1fr;
    align-items: end;
    justify-content: center;
`;

export const TitleText = styled.div`
    ${Text};
    font-size: 36px;
    text-align: center;
    /* background: green; */
    padding: 30px 0;
`;

export const SubText = styled.div`
    ${Text};
    /* background: yellow; */
    font-size: 24px;
    padding: 15px 0;
`;

const upDown = keyframes`
    0%,100%{
        top: 0;
    }

    50%{
        top: 5px;
    }
`;

export const ChevronDown = styled(Link)`
    text-decoration: none;
    color: ${props=>props.color||"#000"};
    /* background: blue; */
    text-align: center;
    padding: 30px 0;
    & > *{
        position: relative;
        animation: ${upDown} 500ms cubic-bezier(.57,.21,.69,1.25) infinite;
    }
`;