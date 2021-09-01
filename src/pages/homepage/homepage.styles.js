import styled, {css} from 'styled-components';


const Text = css`
    text-align: center;
    color:${props => props.fontColor || "#000"};
`;

export const TitleText = styled.div`
    ${Text};
    font-size: 36px;
`;

export const SubText = styled.div`
    ${Text};
    font-size: 24px;
`;