import React from 'react';
import Link from 'next/link';
import { FaCopy, FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import MixCard from '../../../components/MixCard';
import RactangleCard from '../../../components/RactangleCard';
import SectionHeader from '../../../components/SectionHeader';
import SquareCard from '../../../components/SquareCard';
import PostDetails from '../../../components/PostDetails';
import {FacebookShareButton,FacebookIcon} from "react-share"
import Head from 'next/head';
import { useRouter } from 'next/router';

const PostDetailsRoute = () => {
    const router = useRouter()
    console.log(router.query);
    return (
        <div className='container mx-auto my-5'>
            <Head>
            <title>News Details page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="News Details Pagess" key="title" />
            <meta property="og:image" content="My page title" key="image" itemProp='image'/>


            </Head>
            <div className='flex justify-center my-5'>
                <img src='https://tpc.googlesyndication.com/simgad/3217729136485671980' alt='ad images'/>
            </div>
            {/* post details */}
            <div className='grid md:flex gap-10 border-t-2'>
                <div className='post-details w-full'>
                    <div className='py-5'>
                        <SectionHeader title={'category'} link="/category/abc"/>
                        <div>
                            <h1 className='text-4xl text-black font-semibold'>যেভাবে ‘সাংবাদিক’ হয়েছিলেন ক্যাটরিনা</h1>
                            <div className='mt-8 flex justify-between items-center'>
                                <div>
                                    <p className='text-xs'>প্রকাশ: ০৪ ডিসেম্বর ২০২২, ২০: ০০</p>
                                </div>
                                <div className='flex gap-5'>
                                    <FacebookShareButton url={`https://akash-prothom-alo.vercel.app/category/${router.query.name}/${router.query.id}`} quote='Hello Developers!'>
                                        <div className='text-3xl hover:scale-105 transition-all text-blue-600'>
                                            <FaFacebookSquare/>
                                        </div>  
                                    </FacebookShareButton>
                                    <div className='text-3xl hover:scale-105 transition-all text-blue-400'><FaTwitterSquare/></div>
                                    <div className='text-3xl hover:scale-105 transition-all text-orange-400'><FaWhatsappSquare/></div>
                                    <div className='text-3xl hover:scale-105 transition-all text-blue-600'><FaCopy/></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <PostDetails/>
                    <div className='mt-10'>
                        <div>
                            <h2 className="mb-4">আরও পড়ুন</h2>
                            <div className='grid sm:grid-cols-2 gap-5'>
                                <RactangleCard/>
                                <RactangleCard/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='md:w-96 custom-border'>
                    <div className='grid gap-5 my-5'>
                        <img className='w-full' src='https://tpc.googlesyndication.com/simgad/6035381064038992771' alt=''/>
                        <img className='w-full' src='https://tpc.googlesyndication.com/simgad/6035381064038992771' alt=''/>
                    </div>
                   <MixCard/>
                   <MixCard/>
                   <MixCard/>
                   <MixCard/>
                </div>
            </div>
            
            <div className='mt-10'>
                <h2 className="mb-4">আরও পড়ুন</h2>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5'>
                    <SquareCard/>
                    <SquareCard/>
                    <SquareCard/>
                    <SquareCard/>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsRoute;