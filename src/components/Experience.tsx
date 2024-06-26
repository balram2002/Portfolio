import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }: {
    position: string, company: string, companyLink: string, time: string, address: string, work: string
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
                <h3 className='capitalise font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a className='text-primary capitalize dark:text-primaryDark' href="">@{company}</a></h3>
                <span className='capitalise font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {address}</span>
                <p className='font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
    return (
        <>
            <h2 className='font-bold text-6xl mt-48 w-full text-center mb-10 md:text-4xl xs:text-3xl md:mb-8'>Experience</h2>
            <div className='w-full relative flex items-center justify-center'>
                <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] ' />
                    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                        <Details position={'Web Developer'} company={'For Client'} companyLink={''} time={'2023-2024'} address={'Badarwas, dist. Shivpuri (M.P)'} work={`Worked on a Digital Marketing website to increase their brandvalue and engagement. It was a simple website where clients can contact the owner and fix the deals.`} />
                        <Details position={'Graphic Designer'} company={'Fiverr'} companyLink={''} time={'Summer 2021 - 2023'} address={'Gwalior, M.P'} work={`Worked on several graphic works given by client like creating Posters, Instagram Posts, Edit Videos and handling Social Media.`} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience