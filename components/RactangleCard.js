import React from 'react';
import Link from 'next/link';

const RactangleCard = ({link='/category/india/id'}) => {

    return (
        <div className='mb-5 pb-5 custom-card custom-border-bottom'>
            <Link href={link}>
            <div className={`flex justify-between`}>
                <div className="w-full">
                    <h2 className="text-md lg:text-xl font-semibold transition-all">শোয়েব মালিকের সঙ্গে সম্পর্ক নিয়ে মুখ খুললেন সেই পাকিস্তানি অভিনেত্রী</h2>
                    <div className="footer mt-4 text-gray-500">
                    <p>2 hours ago</p>
                    </div>
                </div>
                <figure className='w-56 overflow-hidden'>
                    <img className='w-full transition-all' src="https://images.prothomalo.com/prothomalo-bangla%2F2022-08%2F8e74a724-2fed-4389-9cd1-e83b7236affe%2F124156345_2783608135249714_6184068585405836214_n.jpg?rect=97%2C0%2C608%2C405&auto=format%2Ccompress&fmt=webp&format=webp&dpr=1.0&q=70&w=160" alt="Movie"/>
                </figure>
            </div>
            </Link>
        </div>
    );
};

export default RactangleCard;