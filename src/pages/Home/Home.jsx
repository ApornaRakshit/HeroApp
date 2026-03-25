import React from 'react';
import heroImg from '../../assets/hero.png'
import StatsSection from '../../components/StatsSection/StatsSection';

const Home = () => {
    return (
        <div>
            <div className='text-center py-14'>
                <h1 className='text-5xl font-bold '>We Build <br />
                    <span className='bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent font-bold'>Productive</span> Apps</h1>
                <p className='pt-5 text-gray-400'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className="px-4 sm:px-6 md:px-10">
                <img src={heroImg} alt="" className='mx-auto w-full max-w-3xl' />
            </div>
            <div>
                <StatsSection></StatsSection>
            </div>
        </div>

    );
};

export default Home;