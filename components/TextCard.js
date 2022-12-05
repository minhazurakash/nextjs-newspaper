import React from 'react';
import Link from 'next/link';

const TextCard = ({link='/category/football/id' , serial="0"}) => {
    if (serial > 0 ){
        return <div className='mb-3 pb-3 custom-card custom-border-bottom'>
                    <Link href={link}>
                        <div className='flex items-center'>
                            <h1 className='text-4xl text-gray-500 font-semibold inline-block px-3'>{serial}</h1>
                            <h2 className="text-md lg:text-xl transition-all">শোয়েব মালিকের সঙ্গে সম্পর্ক নিয়ে মুখ খুললেন সেই পাকিস্তানি অভিনেত্রী</h2>
                        </div>
                    </Link>
                </div>
    }
    return (
        <div className='mb-3 pb-3 custom-card custom-border-bottom'>
                <Link href={link}>
                    <div>
                        <h2 className="text-md lg:text-xl transition-all">শোয়েব মালিকের সঙ্গে সম্পর্ক নিয়ে মুখ খুললেন সেই পাকিস্তানি অভিনেত্রী</h2>
                    </div>
                </Link>
            </div>
    );
};

export default TextCard;