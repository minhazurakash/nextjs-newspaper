import React from 'react';
import Link from 'next/link';

const MainCard = ({link="/category/school/id"}) => {
    return (
        <>
        <Link href={link}>
            <div className='w-full relative custom-card overflow-hidden'>
                <img className='w-full transition-all' src='https://images.prothomalo.com/prothomalo-bangla%2F2022-12%2Fe4441a45-5676-4d7d-a39c-70cbfbf057ab%2Ff6db3a52-faa7-43ed-90d3-05998319121a.jpg?rect=59%2C0%2C633%2C422&auto=format%2Ccompress&fmt=webp&format=webp&dpr=1.0&q=70&w=300' alt=''/>
                <div className='absolute top-0 flex justify-center items-end  w-full h-full p-3 bg-black bg-opacity-60'>
                    <h1 className='text-3xl transition-all text-white'>বিএনপি সমাবেশের নামে বাড়াবাড়ি করলে ছাড় নয়</h1>
                </div>
            </div>
        </Link>
        </>
    );
};

export default MainCard;