'use client'

import { useRouter } from "next/navigation";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  link,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  link?: string;
  otherClasses?: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${link}`)
  }
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-light dark:bg-slate-950 px-7 text-lg sm:text-base xs:text-sm font-medium text-dark dark:text-light backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
