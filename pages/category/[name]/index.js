import RactangleCard from "../../../components/RactangleCard";
import Hero from "../../../components/Hero";

const CategoriesRoute = () => {
    return (
        <div className="container mx-auto  px-3 sm:px-0">
            <div className='flex justify-center my-5'>
                <img src='https://tpc.googlesyndication.com/simgad/3217729136485671980' alt='ad images'/>
            </div>
            {/* news and ad  */}
            <Hero/>
            <div className='flex justify-center my-5'>
                <img src='https://tpc.googlesyndication.com/simgad/17825197492991032054' alt=''/>
            </div>
            <div className='custom-border sm:w-[500px] mx-auto my-10'>
                <RactangleCard/>
                <RactangleCard/>
                <RactangleCard/>
                <RactangleCard/>
                <div className='text-center'>
                    <button className='btn btn-xs'>Load more ...</button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesRoute;