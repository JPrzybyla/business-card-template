import React from 'react';
import './Page.css';
import Nav from "./Nav";


const PageOne = () => (

    <a name={'home'}><div>
        <div className={'container'}>
            <Nav/>
            <div className={'content'}>
                <h1>I'm Web Developer.</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis urna ac quam aliquet tincidunt. Duis a congue ante. Donec augue neque, imperdiet non ex in, ultricies sollicitudin risus.</h2>
                <i className="fab fa-linkedin-in POicon"></i>
                <i className="fab fa-facebook-f POicon"></i>
                <i className="fab fa-twitter POicon"></i>
            </div>
        </div>
    </div></a>
);

window.addEventListener('scroll',()=>{
    document.querySelector('.nav').style.transition = 'background-color 0.5s';
    document.querySelector('.nav').classList.toggle('navScrolled', window.scrollY > 0);

})
export default PageOne;