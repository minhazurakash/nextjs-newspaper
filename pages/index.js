import Hero from '../components/Hero';
import BusinessSection from '../components/section/BusinessSection';
import EntertainmentSection from '../components/section/EntertainmentSection';
import LifeStyleSection from '../components/section/LifeStyleSection';
import WorldSection from '../components/section/WorldSection';
import CatagorieSection from '../components/section/CatagorieSection';
import Head from 'next/head';



const Home = ({post}) => {
    
    return (
        <div className='container mx-auto px-3 sm:px-0'>
            <Head>
            <title>Prothom Alo</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="Prothom Alo" key="title" />
            <meta property="og:image" content="https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg" key="image" itemProp='image'/>
            </Head>
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

