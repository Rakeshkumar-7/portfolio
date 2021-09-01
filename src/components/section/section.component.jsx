import React from 'react'
import { SectionStyled } from './section.styles';

function Section({color="#FFF", children}) {
    return (
        <SectionStyled color={color}>
            {children}
        </SectionStyled>
    )
}

export default Section
