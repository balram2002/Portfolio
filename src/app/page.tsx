import Image from "next/image";
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import HireMe from "@/components/HireMe";
import { Spotlight } from './../components/ui/Spotlight';
import { FlipWords } from './../components/ui/flip-words';

export default function Home() {
  const words = ["FullStack Developer", "Mobile Developer", "Graphic Designer"];
  return (
    <>
      <div className="flex items-center text-dark w-full min-h-screen p-32 pt-0 dark:text-light xl:p-24 lg:p-16 md:p-12 sm:p-8 sm:pt-0 md:pt-16">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image src={profilePic} alt="bd" className="w-full h-auto lg:hidden md:inline-block md:w-full" priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw" />
          </div>
          <div className="w-1/2 flex flex-col items-center lg:w-full md:text-center">
            <div className="w-full text-left md:text-center sm:text-center sm:mt-8">
              <span className="md:mt-3 text-left">I am&nbsp; <br /></span>
              <span>a  <FlipWords words={words} className='dark:text-primaryDark text-primary' /> <br />
              </span>
            </div>
            <AnimatedText text={'Turning Vision Into Reality With Code And Design. '} className="!text-4xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl sm:mt-2" />
            <p className="my-4 font-medium text-[12px] w-full text-left mb-3 md:text-sm sm:text-xs sm:text-center">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            <div className="flex items-center self-start mt-6 lg:self-center">
              <Link href={'https://drive.google.com/file/d/17FQw9H7c3lTr6rHiuLrL5bnFIF8jMNI3/view?usp=sharing'} target={"_blank"} className="flex items-center" download={true}>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-dark bg-dark text-light dark:text-light flex items-center space-x-2 sm:px-4 sm:text-base !z-10"
                >
                  Resume <LinkArrow className='w-6 ml-1' />
                </HoverBorderGradient>
              </Link>

              <Link href='/contact' className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <HireMe />
      </div>
      <Spotlight
        className="-top-40 left-40 md:left-60 md:-top-20"
        fill="white"
      />
      <BackgroundBeams className='-z-50' />
    </>
  );
}
