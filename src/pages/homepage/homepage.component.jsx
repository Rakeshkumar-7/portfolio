import React from 'react';
import { VscChevronDown } from "react-icons/vsc";

import Section from '../../components/section/section.component';

import { VerticalCenter, TitleText, SubText, ChevronDown } from './homepage.styles';


function HomePage() {
    return (
        <div>

            <Section id="#landing">
                <VerticalCenter>
                    <div className="content">
                        <TitleText>
                            Hey there! 😃
                        </TitleText>
                        <SubText>
                            I'm Rakesh, 19, Primarily web dev
                        </SubText>
                    </div>
                    <ChevronDown to='/#about'>
                        <VscChevronDown/>
                    </ChevronDown>
                </VerticalCenter>
            </Section>

        </div>
    )
}

export default HomePage;
