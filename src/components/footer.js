import React from 'react';
import './Page.css';


const Footer = () => (

    <div className={'Footer'}>
        <div className={'socialsFooter'}>
            <div className={'iconFooter'}><i className="fab fa-facebook-f facebookFooter"></i></div>
            <div className={'iconFooter'}><i className="fab fa-twitter twitterFooter"></i></div>
            <div className={'iconFooter'}><i className="fab fa-linkedin-in linkedinFooter"></i></div>
            <div style={{clear: 'both'}}></div>
        </div>
        <p className={'sign'}>JPDesign 2021 &copy; All Rights Reserved</p>
    </div>
);


export default Footer;