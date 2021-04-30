import React from 'react';
import './PageMobile.css';
import '../components/spacer.css';
import profPic from '../components/ProfPic.jpg'

const PageTwoMobile = () => (

    <a name={'about'}><div className={'containerTwo'}>
        <p className={'infoHeader'}>About me</p>
        <div className={'spacer'}>
            <div className={'dots'}></div>
            <div className={'line'}></div>
            <div className={'dots'}></div>
            <div style={{clear: 'both'}}></div>
        </div>
        <div className={'infoContent'}>
            <img src={profPic} className={'ProfPicMobile'}/>
            <p className={'AboutmeName'}>I'm Jakub Przybyła</p>
            <p className={'AboutmeContentMobile'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        </div>
        <div><a href={'#contact'}><input type={'button'} value={'Contact Me'} className={'AboutmeButtonMobile'}/></a></div>
        <div><a href={'#services'}><input type={'button'} value={'My Services'} className={'AboutmeButtonMobile'}/></a></div>
    </div></a>
);


export default PageTwoMobile;