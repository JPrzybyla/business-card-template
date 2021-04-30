import React from 'react';
import './PageMobile.css';

const PageThreeMobile = () => (

    <div className={'containerThreeMobile'}>
        <div className={'countContainerMobile'}>
            <div className={'countBox'}>
                <i className="fas fa-coffee"></i>
                <p className={'countContent'}>420</p>
                <p className={'countContent'}>Cups of cofee</p>
            </div>
            <div className={'countBox'}>
                <i className="fas fa-user-friends"></i>
                <p className={'countContent'}>69</p>
                <p className={'countContent'}>Happy customers</p>
            </div>
            <div className={'countBox'}>
                <i className="fas fa-project-diagram"></i>
                <p className={'countContent'}>420</p>
                <p className={'countContent'}>Projects done</p>
            </div>
            <div style={{clear: 'both'}}></div>
        </div>
    </div>
);


export default PageThreeMobile;