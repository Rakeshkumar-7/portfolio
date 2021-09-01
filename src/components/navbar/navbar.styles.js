import styled from 'styled-components';

export const NavBarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    padding: 30px 15px;
    /* background:red; */
`;

export const Title = styled.div`
    font-size: 28px;
    font-weight: 800;
    text-align: center;
    justify-self: start;
    /* grid-column-start: auto; */
`;

export const SocialIconsList = styled.div`
    align-self: center;
    position: relative;
    height: 100%;
    justify-self: end;

    & > a{
        align-self: center;
        height: 100%;
        margin: 0 5px;
        text-decoration: none;
        color: ${props => props.color || "#000"}
    }
`;