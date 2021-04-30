import React from 'react';
import PageOne from "./componentsMobile/PageOne";
import PageTwoMobile from "./componentsMobile/PageTwoMobile";
import PageThreeMobile from "./componentsMobile/PageThreeMobile";
import PageFourMobile from "./componentsMobile/PageFourMobile";
import PageFiveMobile from "./componentsMobile/PageFiveMobile";
import Footer from "./components/footer";

const AppMobile = () => (
    <div>
        <PageOne/>
        <PageTwoMobile/>
        <PageThreeMobile/>
        <PageFourMobile/>
        <PageFiveMobile/>
        <Footer/>
    </div>
);

export default AppMobile;