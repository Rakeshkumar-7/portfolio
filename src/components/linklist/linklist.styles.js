import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const List = styled.div`
    align-self: center;
`;

export const PageLink = styled(Link)`
    margin: 0 10px;
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: all ease-in-out 300ms;

    &:hover{
        text-shadow: 0 2px 10px rgba(77,77,77,0.2);
    }
`;