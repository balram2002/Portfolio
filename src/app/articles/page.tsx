'use client'

import React from 'react'
import AnimatedText from './../../components/AnimatedText';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import GetInTouch from '@/components/GetInTouch';

const ArticlesPage = () => {
    return (
        <>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <div className='flex justify-center items-center p-32 pt-10 flex-col xl:p-24 lg:p-16 md:p-12 sm:p-8 !text-dark dark:!text-light'>
                    <AnimatedText text='Words Can Change The World!' className='text-[50px] mb-4 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8' />
                    <hr />
                    <Services />
                    <hr />
                    <Approach />
                    <hr />
                    <GetInTouch />
                    <hr />
                </div>
                <div className='w-full h-[100px] flex items-center justify-center'>
                    <h1 className='text-2xl text-dark dark:text-light'>No Articles Posted till now.</h1>
                </div>
            </main>
        </>
    )
}

export default ArticlesPage