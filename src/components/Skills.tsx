import React from 'react'
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }: {
    name: string,
    x: string,
    y: string
}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-5 shadow-dark absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:text-bold'
            whileHover={{ scale: 1.15 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-6xl mt-40 w-full text-center mb-10 md:text-6xl md:!mt-18 sm:mt-16 sm:mb-6'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark cursor-pointer lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm' >
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.15 }}
                >
                    Web
                </motion.div>
                <Skill name='HTML' x='-23vw' y='2vw' />
                <Skill name='CSS' x='-5vw' y='-9vw' />
                <Skill name='Javascript' x='20vw' y='6vw' />
                <Skill name='ReactJS' x='0vw' y='13vw' />
                <Skill name='NodeJS' x='-19vw' y='-15vw' />
                <Skill name='ExpressJS' x='13vw' y='-12vw' />
                <Skill name='Mongodb' x='30vw' y='-5vw' />
                <Skill name='NextJS' x='0vw' y='-19vw' />
                <Skill name='Tailwind CSS' x='-24vw' y='18vw' />
                <Skill name='SCSS' x='22vw' y='18vw' />
                <Skill name='Firebase' x='0vw' y='23vw' />
                <Skill name='Cloudinary' x='-37vw' y='-7vw' />
                <Skill name='Redux ToolKit' x='27vw' y='-16vw' />
                <Skill name='Recoil' x='38vw' y='3vw' />
            </div>
        </>
    )
}

export default Skills