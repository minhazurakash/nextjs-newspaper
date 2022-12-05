import React from 'react';
import PortaitCard from '../PortaitCard';
import SectionHeader from '../SectionHeader';
import RactangleCard from '../RactangleCard';

const BusinessSection = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'BusinessSection'} link={'/category/business'}/>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='custom-border'>
                    <PortaitCard/>
                </div>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                </div>
            </div>
        </div>
        </>
    );
};

export default BusinessSection;