"use client"

import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }: {
    type: string, time: string, place: string, info: string
}) => {
    const ref = useRef<any>(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className='capitalise font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalise font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {place}</span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
    return (
        <>
            <h2 className='font-bold text-6xl mt-40 w-full text-center mb-10 md:text-6xl md:!mt-18 sm:mt-16 sm:mb-6 sm:text-5xl'>Education</h2>
            <div className='w-full relative flex items-center justify-center'>
                <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 md:mb-[158px]'>
                          <Details type={'Master Of Computer & Applications'} place={'SCSIT, DAVV Indore, M.P'} time={'2024-2026'} info={`Pursuing a Master's degree in Computer Applications with a focus on software development and data science.`} />
                        <Details type={'Bachelor Of Computer & Applications'} place={'Medicaps University, Indore, M.P'} time={'2021-2024'} info={`Relevant courses included Data Structures and DBMS, Computer Systems, Computer Networking, and Artificial 
Intelligence.`} />
                        <Details type={'Google IT Support'} place={'Coursera'} time={'2022'} info={`Coursera Professional Certificate that includes 5 internal courses Technical Support Fundamentals, The Bits And Bytes Of Computer Networking, Operating Systems, System Administration and IT Infrastructure Services, IT Security.`} />
                        <Details type={'Cyber Security and IoTs'} place={'Coursera'} time={'2022'} info={`Coursera Certificate that taught me best security practices to handle cyber attacks and internet of things.`} />

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Education