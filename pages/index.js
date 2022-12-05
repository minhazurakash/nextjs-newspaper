import React from 'react';
import Hero from '../components/Hero';
import BusinessSection from '../components/section/BusinessSection';
import EntertainmentSection from '../components/section/EntertainmentSection';
import LifeStyleSection from '../components/section/LifeStyleSection';
import WorldSection from '../components/section/WorldSection';
import CatagorieSection from '../components/section/CatagorieSection';
import Head from 'next/head';



const Home = () => {
    <Head>
        <title>News Paper</title>
    </Head>
    
    return (
        <div className='container mx-auto'>
            <Hero/>
            <EntertainmentSection/>
            <LifeStyleSection/>
            <WorldSection/>
            <BusinessSection/>
            <CatagorieSection/>
        </div>
    );
};

export default Home;