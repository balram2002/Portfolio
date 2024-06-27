import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Boxes } from "./ui/background-boxes";

const GetInTouch = () => {
  return (
    <div className="w-full pb-10 relative z-10" id="contact">
      <Boxes />
      <div className="flex flex-col items-center">
        <h1 className="heading text-2xl font-bold text-dark dark:text-light text-center sm:text-1xl xs:text-base">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-dark dark:text-light my-5 text-center font-semibold">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:bdhakad886@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            link='contact'
          />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
