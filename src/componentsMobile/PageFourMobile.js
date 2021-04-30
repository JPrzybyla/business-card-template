import React from 'react';
import './PageMobile.css';
import '../components/spacer.css';

const PageFourMobile = () => (

    <a name={'services'}><div className={'containerFour'}>
        <p className={'infoHeader'}>Services</p>
        <div className={'spacer'}>
            <div className={'dots'}></div>
            <div className={'line'}></div>
            <div className={'dots'}></div>
            <div style={{clear: 'both'}}></div>
        </div>
            <div className={'boxMobile'} style={{marginTop: '10%'}}><i className="fab fa-react"></i></div>
            <div className={'boxMobile'}>
                <p className={'servicesHeader'}>React</p>
                <p className={'servicesContentMobile'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna ac quam aliquet tincidunt. Duis a congue ante. Donec augue neque, imperdiet non ex in, ultricies sollicitudin risus.</p>
            </div>
            <div className={'boxMobile'} style={{marginTop: '10%'}}><i className="fas fa-bullhorn"></i></div>
            <div className={'boxMobile'}>
                <p className={'servicesHeader'}>Seo</p>
                <p className={'servicesContentMobile'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna ac quam aliquet tincidunt. Duis a congue ante. Donec augue neque, imperdiet non ex in, ultricies sollicitudin risus.</p>
            </div>
            <div className={'boxMobile'} style={{marginTop: '10%'}}><i className="fas fa-cogs"></i></div>
            <div className={'boxMobile'}>
                <p className={'servicesHeader'}>Support</p>
                <p className={'servicesContentMobile'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna ac quam aliquet tincidunt. Duis a congue ante. Donec augue neque, imperdiet non ex in, ultricies sollicitudin risus.</p>
            </div>

    </div></a>
);


export default PageFourMobile;