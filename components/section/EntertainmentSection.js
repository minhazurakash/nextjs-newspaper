import React from 'react';
import PortaitCard from '../PortaitCard';
import RactangleCard from '../RactangleCard';
import SectionHeader from '../SectionHeader';

const EntertainmentSection = () => {
    return (
        <>
        <div className='entertainment'>
            <SectionHeader title={'EntertainmentSection'} link={'/category/entertainment'}/>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard />
                    <RactangleCard />
                </div>
                <div>
                    <PortaitCard/>
                </div>
                <div className='custom-border'>
                    <RactangleCard/>
                    <RactangleCard/>
                    <RactangleCard/>
                </div>
            </div>
        </div>
        </>
    );
};

export default EntertainmentSection;