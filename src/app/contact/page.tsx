'use client'

import Head from 'next/head'
import React, { useState } from 'react'
import AnimatedText from '../../components/AnimatedText';

const ContactPage = () => {
    const [name, setName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [message, setMessage] = useState<any>();

    const handleChange = () => {

    }

    return (
        <>
            <Head>
                <title>Portfolio | Contact Me Page</title>
                <meta name='description' content='Balram Dhakad Portfolio | Contact Me Page' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <div className='flex justify-center items-center p-32 pt-10 flex-col xl:p-24 lg:p-16 md:p-12 sm:p-8'>
                    <AnimatedText text='Contact Me!' className='text-[50px] mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8' />

                    <div className='h-full flex items-center justify-center gap-[50px] sm:flex-col'>
                        <div className='flex-1 flex flex-col gap-[40px] sm:text-center sm:items-center'>
                            <h1 className='text-[50px] leading-[50px] font-semibold'>Let's Work Together</h1>
                            <div>
                                <h2>Mail:</h2>
                                <span className='font-light'>bdhakad886@gmail.com</span>
                            </div>
                            <div>
                                <h2>Address:</h2>
                                <span>Badarwas, dist. Shivpuri, M.P, India</span>
                            </div>
                            <div>
                                <h2>Phone:</h2>
                                <span>+91- 913 111 6713</span>
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col items-center justify-center gap-[20px] w-full '>
                            <form className=' flex flex-col items-center justify-center gap-[20px] w-full'>
                                <input className='p-[20px] bg-transparent border border-solid border-light border-r-[5px] w-full' type="text" placeholder='Your Name' required onChange={(e) => setName(e.target.value)} />
                                <input className='p-[20px] bg-transparent border border-solid border-light border-r-[5px] w-full' type="email" placeholder='Your Email' required onChange={(e) => setEmail(e.target.value)} />
                                <textarea className='p-[20px] bg-transparent border border-solid border-light border-r-[5px] w-full' name="body" id="" rows={5} placeholder='Your Message' required onChange={(e) => setMessage(e.target.value)} />
                                <button className='w-full text-dark py-[15px] border-none bg-dark font-bold dark:bg-light'>Contact Me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage