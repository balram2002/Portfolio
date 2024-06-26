'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const TransitionPageEffect = ({ children }: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    return (
        <>
            <AnimatePresence mode='wait'>
                <div key={pathname}>
                    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary'
                        initial={{ x: "100%", width: "100%" }}
                        animate={{ x: "0%", width: "0%" }}
                        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.div>
                    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light'
                        initial={{ x: "100%", width: "100%" }}
                        animate={{ x: "0%", width: "0%" }}
                        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
                    ></motion.div>
                    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark'
                        initial={{ x: "100%", width: "100%" }}
                        animate={{ x: "0%", width: "0%" }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                    ></motion.div>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </AnimatePresence>
        </>
    )
}

export default TransitionPageEffect