'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './icons'
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";


const ProjectItem = ({ type, title, img, link, github }: {
    type: string, title: string, img: any, link: string, github: string
}) => {
    return (
        <>
            <CardContainer className="inter-var shadow-2xl !py-2" containerClassName='!py-2'>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-light/75 dark:bg-black/75 dark:border-white/55 border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-neutral-600 dark:text-white lg:text-2xl"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="span"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 lg:text-lg md:text-base"
                    >
                        {type}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            priority
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                        <CardItem
                            translateZ={20}
                            as="span"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            <Link href={link} target='_blank' className='p-2 px-6 text-lg font-semibold underline md:text-base'>Visit</Link>
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            <Link href={github} target='_blank' className='w-10 md:w-6'><GithubIcon className='!w-6 md:!w-5' /></Link>
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </>
    )
}

export default ProjectItem
