'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GithubIcon } from './icons'
import { HoverBorderGradient } from './ui/hover-border-gradient'

const FeaturedProjectItem = ({ type, title, summary, img, link, github }: {
    type: string, title: string, summary: string, img: any, link: string, github: string
}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 sm:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:text-light dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' >
                <Image src={img} alt={title} className='w-full h-auto' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <span className='my-2 font-medium text-dark dark:text-light/85 sm:text-sm'>{summary}</span>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon className='' /></Link>
                    <Link href={link} target={"_blank"} className="flex items-center" download={true}>
                        <HoverBorderGradient
                            containerClassName="rounded-full ml-4 !z-10"
                            as="button"
                            className="dark:bg-dark bg-dark text-black dark:text-light flex items-center space-x-2 sm:px-4 sm:text-base !z-10"
                        >
                            Visit Project
                        </HoverBorderGradient>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProjectItem