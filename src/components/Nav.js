import React from 'react';
import './Page.css';


const Nav = () => (

    <div className={'nav'}>
        <a href={'#home'}><li>Home</li></a>
        <a href={'#about'}><li>About</li></a>
        <a href={'#services'}><li>Services</li></a>
        <a href={'#contact'}><li>Contact</li></a>
    </div>
);

export default Nav;