import React from 'react';
import Faq from './Faq';
import GeneralInfo from './GeneralInfo';
import Hero from './Hero';
import PlayBet from './PlayBet';
import WinSection from './WinSection';

const Main = () => {
    return(
        <>
        <Hero/>
        <PlayBet/>
        <WinSection/>
        <GeneralInfo/>
        <Faq/>
        </>
    )
}



export default Main;