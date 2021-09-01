import styled from 'styled-components';

export const NavBarContainer = styled.div`
    /* background:red; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    padding: 30px 15px;
`;

export const Title = styled.div`
    font-size: 28px;
    font-weight: 800;
    text-align: center;
    justify-self: start;

    & > *{
        text-decoration: none;
        color: ${props=>props.color||"#000"}
    }
`;

export const SocialIconsList = styled.div`
    position: relative;
    height: 100%;
    justify-self: end;
    align-content:center;
    top: 5px;

    & > a{
        /* background: blue; */
        vertical-align: middle;
        margin: 0 10px;
        text-decoration: none;
        color: ${props => props.color || "#000"}
    }
`;