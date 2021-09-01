import React from 'react'
import {List,PageLink} from './linklist.styles'

const LinkList = (props) => {

    const {links} = props;

    return (
        <List>
            {
                links.map(link =>( 
                    <PageLink to={link.to}>{link.text}</PageLink>
                ))
            }
        </List>
    )
}

export default LinkList;
