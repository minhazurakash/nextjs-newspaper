import React from 'react';
import Link from 'next/link';

const PortaitCard = ({link='/category/bangladesh/id'}) => {
    const news = "আসছে ব্রুস লির বায়োপিক, লি চরিত্রে অভিনয় করবেন আরেক লিমার্শাল আর্টের সবচেয়ে বড় বিজ্ঞাপন ব্রুস লি। মার্শাল আর্টকে তিনিই সারা দুনিয়ায় জনপ্রিয় করে তুলেছিলেন। সারা বিশ্বেই ছড়িয়ে-ছিটিয়ে ছিল তাঁর তরুণ ভক্তদল। যুগে যুগে পশ্চিমা ও প্রাচ্যের সংস্কৃতি বা বিনোদন দুনিয়ার মধ্যে যোগসূত্র তৈরি করেছিলেন যাঁরা, তাঁদের অন্যতম ব্রুস লি। জন্ম হয়েছিল যুক্তরাষ্ট্রের সান ফ্রান্সিসকোর চায়না টাউনে, ১৯৪০ সালের ২৭ নভেম্বর। মৃত্যু ১৯৭৩ সালের ২০ জুলাই। মৃত্যুর পর এত বছর পেরিয়ে গেলেও ব্রুস লি নানাভাবে নানা প্রসঙ্গে উঠে আসেন। এবার তাঁর বায়োপিকের ঘোষণা দিলেন অস্কারজয়ী নির্মাতা অ্যাং লি।"


    return (
        <div className='mb-5 pb-5 custom-card custom-border-bottom'>
            <Link href={link}>
                <div className="">
                    <figure className='w-full overflow-hidden'>
                        <img className='w-full transition-all' src="https://images.prothomalo.com/prothomalo-bangla%2F2022-12%2F1f8c0ec1-a86b-42c5-aab0-da20a6eb8fce%2F694822_01_02.jpg?rect=0%2C0%2C5490%2C3088&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.0" alt="Movie"/>
                    </figure>
                    <div className="">
                        <h2 className="text-xl lg:text-2xl font-semibold my-3 transition-all">আসছে ব্রুস লির বায়োপিক, লি চরিত্রে অভিনয় করবেন  আরেক আরেক লি</h2>
                        <p >
                            {news.slice(0,200)}...
                        </p>
                        <div className="footer mt-3 text-gray-500">
                        <p>2 hours ago</p>
                        </div>
                    </div>
                </div>
                </Link>
        </div>
    );
};

export default PortaitCard;