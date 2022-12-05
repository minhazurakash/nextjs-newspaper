import React from 'react';
import PortaitCard from '../PortaitCard';
import RactangleCard from '../RactangleCard';
import SectionHeader from '../SectionHeader';

const WorldSection = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'WorldSection'} link={'/category/world'}/>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className='custom-border'>
                    <PortaitCard/>
                    <RactangleCard/>
                </div>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                </div>
                <div className='custom-border'>
                    <PortaitCard/>
                    <RactangleCard/>
                </div>
            </div>
        </div>
        </>
    );
};

export default WorldSection;