import React from 'react';
import ReactDOM from 'react-dom'
import './PageMobile.css';

window.onload = () =>{
    let container = document.querySelector('.containerFiveMobile');
    //Otwieranie okienka kontaktowego
    container.addEventListener('click',()=>{
        window.location.replace('#home');
        ReactDOM.render(
            <ContactMobile/>, document.querySelector('.rolldown')
        )
        //Zamykanie okienka
        document.querySelector('.iconCrossMobile').addEventListener('click',()=>{
            document.querySelector('.windowContactMobile').style.visibility = 'hidden';
        })
        //Wysylanie
        document.querySelector('.buttonMobile').addEventListener('click',()=>{
            document.querySelector('.windowContactMobile').write = '';
            ReactDOM.render(
                <Error/>, document.querySelector('.windowContactMobile')
            )
        })
    });
}


const PageFiveMobile = () => (

    <a name={'contact'}><div className={'containerFiveMobile'}>
        <p className={'ContactHeaderMobile'}>STAY IN TOUCH</p>
        <div className={'rolldown'}></div>
    </div></a>
);

const ContactMobile = () => (
    <div className={'windowContactMobile'}>
        <div className={'iconCrossMobile'}><i className="fas fa-times"></i></div>
        <p className={'formMobile'}>E-mail</p>
        <textarea className={'ShortMessageMobile'}/>
        <p className={'formMobile'}>Your Name</p>
        <textarea className={'ShortMessageMobile'}/>
        <p className={'formMobile'}>Message</p>
        <textarea className={'MessageMobile'}/>
        <input type={'button'} value={'Send'} className={'buttonMobile'}/>
    </div>
)
const Error = () => (
    <div>
        <div className={'iconCrossMobile'}><i className="fas fa-times"></i></div>
        <div className={'errorContainerMobile'}>
            <i className="far fa-times-circle iconWrongMobile"></i>
            <p className={'errorMessageMobile'}>Sorry something went wrong!</p>
        </div>
    </div>
)
export default PageFiveMobile;