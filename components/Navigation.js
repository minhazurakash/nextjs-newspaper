import React from 'react';
import logo from "../assests/Prothom-Alo-logo.jpg"
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div className='w-full h-44 px-5'>
            <div className='flex justify-between items-center'>
                <div className='w-1/3'>
                    <div className='flex gap-3 items-center mb-3'>
                        <input className='input input-xs bg-transparent input-secondary rounded-none focus:outline-none'/>
                        <FaSearch className='text-xl cursor-pointer'/>
                    </div>
                    <h5 className='text-xs'>মঙ্গলবার, ০৬ ডিসেম্বর ২০২২</h5>
                </div>
                <div className='w-1/3 flex justify-center items-center h-full'>
                    <Link href='/'>
                        <img className='w-48' src={"https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg"} alt=''/>
                    </Link>
                </div>
                <div className='w-1/3 text-right'>
                    <Link href='/user/login'>
                        <button className='btn btn-sm rounded-none border bg-transparent text-blue-500'>Login</button>
                    </Link>
                </div>
            </div>
                <div className='py-3 border-t-2 flex flex-wrap gap-5 justify-center shadow-xl'>
                {/* {
                    menu?.map((item)=> <Link to={`/category/${item.name}`} key={item?.id}>{item?.name}</Link>)  
                } */}
            </div>
        </div>
        
    );
};

export default Navigation;