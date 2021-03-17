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
            <BackButtonWithRouter text="Back To Homepage" />
            <h2 className="header-kicker">Great Places To</h2>
            <h1 className="header-title">VISIT WITH KIDS</h1>
            <SearchBox type="search" value={props.searchQuery} onChange={e => props.updateSearchQuery(e.target.value)} placeholder="Search location" />
        </Container>
    );
}

export { Header };