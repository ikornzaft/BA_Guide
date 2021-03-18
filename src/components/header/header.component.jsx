import React, { useState, useEffect } from 'react';

import { Container } from './header.styles';
import { BackButtonWithRouter, SearchBox } from '../';

const Header = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset= window.scrollY;
        offset > 200 ? setScrolled(true) : setScrolled(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <Container className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <BackButtonWithRouter scroll={scrolled ? 'back-button scrolled' : 'back-button'} text="Back To Homepage" />
            <h2 className="header-kicker">{props.kicker}</h2>
            <h1 className="header-title">{props.title}</h1>
            <SearchBox scroll={scrolled ? 'back-button scrolled' : 'back-button'} type="search" value={props.searchQuery} onChange={e => props.updateSearchQuery(e.target.value)} placeholder="Search location" />
        </Container>
    );
}

export { Header };