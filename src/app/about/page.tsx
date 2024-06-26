'use client'

import React from 'react'

import AnimatedText from '@/components/AnimatedText'
import profilepic from '../../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image'
import Skills from '../../components/Skills';
import Experience from './../../components/Experience';
import Education from '../../components/Education';
import AnimatedNumbers from './../../components/AnimatedNumbers';
import Head from 'next/head';

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio | About Page</title>
                <meta name='description' content='Balram Dhakad Portfolio | About Page' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <div className='flex justify-center items-center p-32 pt-10 flex-col xl:p-24 lg:p-16 md:p-12 sm:p-8'>
                    <AnimatedText text='Passion Fuels Purpose!' className='text-[60px] mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8' />
                    <div className='grid w-full grid-cols-8 gap-8 sm:gap-4'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 xs:mt-2 xs:mb-2 sm:mt-2 sm:mb-2 sm:pt-2 xs:pt-2'>
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">About Me</h2>
                            <p className='font-medium '>Hi, I&apos;m <span className='text-primary dark:text-primaryDark'>Balram Dhakad</span>, a web developer and Graphic designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients&apos; visions to life.</p>
                            <p className='my-4 font-medium '>I believe that design is about more than just making things look pretty. it&apos;s about solving problems and
                                creating intuitive, enjoyable experiences for users. </p>
                            <p className='font-medium '>Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </div>
                        <div className='col-span-3 relative h-full rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 xs:mb-2 sm:mb-2'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light' />
                            <Image src={profilepic} alt='bd' className='w-full h-full rounded-2xl' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={3} /> +</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={10} /> +</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={2} /> +</span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </div>
            </main>
        </>
    )
}

export default AboutPage