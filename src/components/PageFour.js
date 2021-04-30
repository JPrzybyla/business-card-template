import React from 'react';
import './Page.css';
import './spacer.css';

const PageFour = () => (

    <a name={'services'}><div className={'containerFour'}>
        <p className={'infoHeader'}>Services</p>
        <div className={'spacer'}>
            <div className={'dots'}></div>
            <div className={'line'}></div>
            <div className={'dots'}></div>
            <div style={{clear: 'both'}}></div>
        </div>
        <div className={'servicesBox'}>
            <div className={'box'}><i className="fab fa-react"></i></div>
            <div className={'box'}>
                <p className={'servicesHeader'}>React</p>
                <p className={'servicesContent'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna ac quam aliquet tincidunt. Duis a congue ante. Donec augue neque, imperdiet non ex in, ultricies sollicitudin risus.</p>
            </div>
            <div style={{clear: 'both'}}></div>
        </div>
        <div className={'servicesBox'}>
            <div className={'box'}>
                <p className={'servicesHeader'}>Seo</p>
                <p className={'servicesContent'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna ac quam aliquet tincidunt. Duis a congue ante. Donec augue neque, imperdiet non ex in, ultricies sollicitudin risus.</p>
            </div>
            <div className={'box'}><i className="fas fa-bullhorn"></i></div>
            <div style={{clear: 'both'}}></div>
        </div>
        <div className={'servicesBox'}>
            <div className={'box'}><i className="fas fa-cogs"></i></div>
            <div className={'box'}>
                <p className={'servicesHeader'}>Support</p>
                <p className={'servicesContent'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna ac quam aliquet tincidunt. Duis a congue ante. Donec augue neque, imperdiet non ex in, ultricies sollicitudin risus.</p>
            </div>
            <div style={{clear: 'both'}}></div>
        </div>

    </div></a>
);


export default PageFour;