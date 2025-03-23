'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons';
import { motion } from 'framer-motion';
import useThemeSwitch from './hooks/useThemeSwitch';
import { useRouter } from 'next/navigation';

const CustomLink = ({ href, title, className = '' }: {
    href: string,
    title: string,
    className: string,
}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] mt-[4px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light  ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = '', toggle }: {
    href: string,
    title: string,
    className: string,
    toggle: VoidFunction
}) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleclick = () => {
        toggle();
        router.push(href);
    }
    return (
        <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleclick}>
            {title}
            <span className={`h-[2px] mt-[4px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark  ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {
    const [mode, setMode] = useThemeSwitch();
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const handleclick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center relative justify-between dark:text-light z-10 lg:px-16 sm:px-6 md:px-12'>

            <button className={`items-center justify-center flex-col hidden lg:flex ${pathname === '/articles' && 'sm:hidden'}`} onClick={() => handleclick()}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className={`w-full flex justify-between items-center lg:hidden`}>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4 ' />
                    <CustomLink href='/about' title='About' className='mx-4 ' />
                    <CustomLink href='/projects' title='Projects' className='mx-4 ' />
                    <CustomLink href='/articles' title='Articles' className='ml-4 ' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap gap-5'>
                    <motion.a href='https://twitter.com/BalramD42013703?t=rRs-EpG6nl6V5N0Ys8jcAA&s=09' target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-1'
                    ><TwitterIcon className={''} />
                    </motion.a>
                    <motion.a href='https://github.com/balram2002' target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-1'
                    >
                        <GithubIcon className={''} />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/balram-dhakad-2a9110210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-1'
                    >
                        <LinkedInIcon className={''} />
                    </motion.a>
                    <motion.a href='https://in.pinterest.com/bdhakad886/' target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-1'
                    >
                        <PinterestIcon className={''} />
                    </motion.a>
                    <motion.a href='https://dribbble.com/itopsBalram' target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-1'
                    >
                        <DribbbleIcon className={''} />
                    </motion.a>
                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                        {mode === "dark" ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
                    </button>
                </nav>
            </div>

            {isOpen === true &&
                <motion.div className={`!min-w-[70vw] flex flex-col justify-between items-center !fixed !top-[50%] !left-[50%] transform !translate-x-[-50%] !translate-y-[-50%] z-50 !bg-dark/90 dark:!bg-light/85 rounded-lg backdrop-blur-md py-20`}
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink href='/' title='Home' className='' toggle={handleclick} />
                        <CustomMobileLink href='/about' title='About' className='' toggle={handleclick} />
                        <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleclick} />
                        <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleclick} />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a href='https://twitter.com/BalramD42013703' target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mr-3 sm:mx-1'
                        ><TwitterIcon className={''} />
                        </motion.a>
                        <motion.a href='https://github.com/balram2002' target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mr-1 bg-light dark:bg-dark rounded-full sm:mx-1'
                        >
                            <GithubIcon className={''} />
                        </motion.a>
                        <motion.a href='https://www.linkedin.com/in/balram-dhakad-2a9110210' target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mr-1 sm:mx-1'
                        >
                            <LinkedInIcon className={''} />
                        </motion.a>
                        <motion.a href='https://in.pinterest.com/bdhakad886/' target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mr-1 bg-light dark:bg-light rounded-full sm:mx-1'
                        >
                            <PinterestIcon className={''} />
                        </motion.a>
                        <motion.a href='https://dribbble.com/itopsBalram' target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-6 mr-1 sm:mx-1'
                        >
                            <DribbbleIcon className={''} />
                        </motion.a>
                        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                            {mode === "dark" ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
                        </button>
                    </nav>
                </motion.div>
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default Navbar
