import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base '>
            <div className='flex items-center text-dark w-full p-32 py-8 justify-between dark:text-light lg:flex-col lg:py-6 sm:text-center sm:w-full sm:px-1'>
                <span>{new Date().getFullYear()}&nbsp;© All Rights Reserved.</span>
                <Link href='/'> Built with <span className='text-primary dark:text-primaryDark text-2xl px-1'>♡</span> by Balram Dhakad</Link>
                <Link href='/' className='lg-py-2 sm:mt-1'> Say Hello</Link>
            </div>
        </footer>
    )
}

export default Footer