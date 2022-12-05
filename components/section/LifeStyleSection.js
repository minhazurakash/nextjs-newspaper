import React from 'react';
import PortaitCard from '../PortaitCard';
import SectionHeader from '../SectionHeader';

const LifeStyleSection = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'LifeStyleSection'} link={'/category/life-style'}/>
            <div className='grid md:grid-cols-4 gap-5'>
                <PortaitCard link='/ok'/>
                <PortaitCard/>
                <PortaitCard/>
                <PortaitCard/>
            </div>
        </div>
        </>
    );
};

export default LifeStyleSection;