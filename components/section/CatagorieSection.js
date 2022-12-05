import React from 'react';
import SectionHeader from '../SectionHeader';
import SquareCard from '../SquareCard';
import TextCard from '../TextCard';

const CatagorieSection = () => {
    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16'>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
                <div className='custom-border'>
                    <SectionHeader title={'Education'} link="/category/education"/>
                    <SquareCard/>
                    <TextCard/>
                    <TextCard/>
                </div>
            </div>
        </>
    );
};

export default CatagorieSection;