import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex items-center flex-col">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
          Building Exceptional User Experiences
        </h1>
        <p className="text-center mt-4 text-white/60">
          i specialize in transforming designs into functional, high-performing
          web applications. Let&#39;s discuss your next project.
        </p>
        <div className="flex flex-col items-center mt-8 gap-4">
          <button className="inline-flex gap-2 border border-white/15 items-center rounded-xl px-6 h-12">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-bold">Let&#39;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
