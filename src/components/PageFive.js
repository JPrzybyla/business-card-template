import React from 'react';
import './Page.css';
import './spacer.css';


const PageFive = () => (

    <a name={'contact'}><div className={'containerFive'}>
       <div className={'contentFive'}>
           <p className={'infoHeader contactHeader'}>STAY IN TOUCH</p>
           <div className={'contactBox CBOne'}>
               <p className={'form'}><label htmlFor={'email'}>E-Mail</label></p>
               <input type={'text'} placeholder={'your E-Mail...'} name={'email'}/>
           </div>
           <div className={'contactBox CBTwo'}>
               <p className={'form'}><label htmlFor={'topic'}>Topic</label></p>
               <input type={'text'} placeholder={'Topic'} name={'topic'}/>
           </div>
           <div style={{clear: 'both'}}></div>
           <p className={'form'}>Message</p>
           <input type={'text'} placeholder={'Your message...'} className={'contactMessage'}/>
           <input type={'button'} value={'Send'} className={'sendMessage'}/>
       </div>
    </div></a>
);


export default PageFive;