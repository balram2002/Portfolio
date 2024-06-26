import React from 'react'
import AnimatedText from './../../components/AnimatedText';
import FeaturedProjectItem from './../../components/FeaturedProjectItem';
import Shopix from '../../../public/images/projects/Shopix.png'
import Movix from '../../../public/images/projects/Movix.png'
import Chatix from '../../../public/images/projects/Chatix.png'
import Suggesto from '../../../public/images/projects/Suggestto.png'
import Gossip from '../../../public/images/projects/Gossip.png'
import NotSpotify from '../../../public/images/projects/NotSpotify.png'
import ProjectItem from './../../components/ProjectItem';

export const metadata = {
    title: "Portfolio | Projects Page",
    description: "Balram Dhakad Portfolio | Projects Page",
};

const ProjectsPage = () => {
    return (
        <>
            <main className='flex w-full flex-col items-center justify-center'>
                <div className='flex justify-center items-center p-32 pt-12 flex-col xl:p-24 lg:p-16 md:p-12 sm:p-8'>
                    <AnimatedText text='Imagination Trumps Knowledge!' className='text-[60px] mb-16 lg:!text-7xl sm:!mb-8 sm:!text6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:gap-y-18'>
                        <div className='col-span-12'><FeaturedProjectItem type={'Full Stack E-Commerce App'} title={'Shopix- E-Commerce'} summary={`MERN Full Stack E-Commerce Application with Payment Integration and Admin Dashboard. Technologies used are MERN Stack, Razorpay, Recoil, CSS & SCSS, Material UI etc.`} img={Shopix} link={'https://shopix-bd.vercel.app'} github={'https://github.com/balram2002/Shopix'} /></div>
                        <div className='col-span-6 sm:col-span-12'><ProjectItem type={'Full Stack Social Media App'} title={'Gossip - Social Media Application'} img={Gossip} link={'https://gossip-bd.onrender.com/'} github={'https://github.com/balram2002/Gossip'} /></div>
                        <div className='col-span-6 sm:col-span-12'><ProjectItem type={'Full Stack Realtime Chatting App'} title={'Chatix - Chat Application'} img={Chatix} link={'https://chatix-bd.onrender.com'} github={'https://github.com/balram2002/Chatix'} /></div>
                        <div className='col-span-12'><FeaturedProjectItem type={'MERN Streaming App'} title={'Movix - Streaming Platform Application'} summary={`It is a online movie, tv shows streaming platform where user can get personalized recommendations based on user likes and history, user can like, add to watchlist and filter the data and much more...`} img={Movix} link={'https://moviesverse.vercel.app/'} github={'https://github.com/balram2002/Movix'} /></div>
                        <div className='col-span-6 sm:col-span-12'><ProjectItem type={'Flask Movie Recommendation system'} title={'Suggesto - Movie Recommendation System'} img={Suggesto} link={'#'} github={'https://github.com/balram2002/Suggestto'} /></div>
                        <div className='col-span-6 sm:col-span-12'><ProjectItem type={'Javascript Spotify clone'} title={'NotSpotify'} img={NotSpotify} link={'#'} github={'https://github.com/balram2002/NotSpotify'} /></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectsPage