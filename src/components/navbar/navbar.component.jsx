import React from 'react';
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";

import LinkList from '../linklist/linklist.component';

import {NavBarContainer, Title, SocialIconsList} from './navbar.styles';


const NavBar = () => {

    const links = [
        {
            text: 'Home',
            to: '/'
        },
        {
            text: 'Projects',
            to: '/projects'
        },
        {
            text: 'Contact',
            to: '/#contact'
        }
    ]

    return (
        <NavBarContainer>
            <Title>
                Rakesh Kumar
            </Title>
            <LinkList links={links} />
            <SocialIconsList>
                <a href="https://twitter.com/rakeshks" target="_blank" rel="noreferrer">
                    <VscTwitter/>
                </a>
                <a href="https://github.com/Rakeshkumar-7" target="_blank" rel="noreferrer">
                    <VscGithub/>
                </a>
                <a href="https://www.instagram.com/rakesh._.ks/" target="_blank" rel="noreferrer">
                    <FaInstagram/>
                </a>
            </SocialIconsList>
        </NavBarContainer>
    )
}

export default NavBar;
