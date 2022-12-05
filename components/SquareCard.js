import React from 'react';
import Link from 'next/link';

const SquareCard = ({link='/category/cricket/id'}) => {


    return (
        <div className='mb-5 pb-5 custom-card custom-border-bottom'>
            <Link href={link}>
                <div className="">
                    <figure className='w-full overflow-hidden'>
                        <img className='w-full transition-all' src="https://images.prothomalo.com/prothomalo-bangla%2F2022-12%2F1f8c0ec1-a86b-42c5-aab0-da20a6eb8fce%2F694822_01_02.jpg?rect=0%2C0%2C5490%2C3088&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.0" alt="Movie"/>
                    </figure>
                    <div className="">
                        <h2 className="text-xl lg:text-2xl font-semibold my-3 transition-all">আসছে ব্রুস লির বায়োপিক, লি চরিত্রে অভিনয় করবেন  আরেক আরেক লি</h2>
                        <div className="footer mt-3 text-gray-500">
                        <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
                </Link>
        </div>
    );
};

export default SquareCard;