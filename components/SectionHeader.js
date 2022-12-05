import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link';


const SectionHeader = ({title,link='none'}) => {
    if(link==='none'){
    return <div className='flex items-center text-xl mb-5'>
                <h2 className='hover:text-blue-500 font-extrabold'>{title} </h2> <FaAngleRight className='text-red-500'/>
            </div>
    }
    return (
        <Link href={link}>
            <div className='flex items-center text-xl mb-5'>
                <h2 className='hover:text-blue-500'>{title} </h2> <FaAngleRight className='text-red-500'/>
            </div>
        </Link>
    );
};

export default SectionHeader;