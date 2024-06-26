import Head from 'next/head'
import React from 'react'
import AnimatedText from './../../components/AnimatedText';

export const metadata = {
    title: "Portfolio | Articles Page",
    description: "Balram Dhakad Portfolio | Articles Page",
};

const ArticlesPage = () => {
    return (
        <>
            <Head>
                <title>Portfolio | Articles Page</title>
                <meta name='description' content='Balram Dhakad Portfolio | Articles Page' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <div className='flex justify-center items-center p-32 pt-10 flex-col xl:p-24 lg:p-16 md:p-12 sm:p-8'>
                    <AnimatedText text='Words Can Change The World!' className='text-[50px] mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8' />
                </div>
                <div className='w-full h-[100px] flex items-center justify-center'>
                    <h1 className='text-2xl text-dark dark:text-light'>No Articles Posted till now.</h1>
                </div>
            </main>
        </>
    )
}

export default ArticlesPage