import React from 'react';
import Link from 'next/link';
import logo from "../assests/Prothom-Alo-logo.jpg"
import google from "../assests//Android-app-on-Google-play.png"
import apple from "../assests/app-store-apple-download.jpg"
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='border-t-2'>
            <div className='w-64 mx-auto md:mx-0'>
                <img className='w-full' src={"https://images.prothomalo.com/prothomalo/import/default/2016/03/15/4d3620a7127d4a031a05a962fcc4b253-palo-logo.jpg"} alt='brand logo'/>
            </div>
            <div className='flex flex-wrap justify-center md:grid md:grid-cols-4 lg:grid-cols-6  gap-5 border-b-2 my-5 pb-5'>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">চাকরি</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">গোলটেবিল</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">বিশেষ সংখ্যা</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">চাকরি</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">গোলটেবিল</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">বিশেষ সংখ্যা</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">চাকরি</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">গোলটেবিল</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">বিশেষ সংখ্যা</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">চাকরি</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">গোলটেবিল</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">বিশেষ সংখ্যা</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">চাকরি</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">গোলটেবিল</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">বিশেষ সংখ্যা</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">চাকরি</Link>
                </div>
                <div className='hover:text-blue-600 text-md cursor-pointer'>
                    <Link href="/">গোলটেবিল</Link>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 justify-between border-b-2 pb-5'>
                <div className='mx-auto'>
                    <h6 className='text-xs text-center mb-3'>অনুসরণ করুন</h6>
                    <div className='w-48 flex justify-between gap-5'>
                        <Link href="/" className='text-3xl hover:scale-105 transition-all text-blue-600'><FaFacebookSquare/></Link>
                        <Link href="/" className='text-3xl hover:scale-105 transition-all text-blue-400'><FaTwitterSquare/></Link>
                        <Link href="/" className='text-3xl hover:scale-105 transition-all text-orange-400'><FaInstagramSquare/></Link>
                        <Link href="/" className='text-3xl hover:scale-105 transition-all text-red-600'><FaYoutubeSquare/></Link>
                    </div>
                </div>
                <div className='mx-auto'>
                    <h6 className='text-xs text-center mb-3'>মোবাইল অ্যাপস ডাউনলোড করুন</h6>
                    <div className='w-72 grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <Link href="/" className=' hover:scale-105 transition-all mx-auto'>
                            <div className='w-32'>
                                <img className='w-full' src={google} alt='app download images'/>
                            </div>
                        </Link>
                        <Link href="/" className=' hover:scale-105 transition-all mx-auto'>
                            <div className='w-32'>
                                <img className='w-full' src={apple} alt='app download images'/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='my-8 text-center'>
                <p>
                    স্বত্ব © ২০২২ প্রথম আলো সম্পাদক ও প্রকাশক: মতিউর রহমান
                </p>
            </div>
        </div>
    );
};

export default Footer;