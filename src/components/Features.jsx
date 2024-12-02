import React from "react";
import BentoCard from "../components/BentoCard";
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./BentoTilt";
const Features = () => {
  return (
    <div className="bg-black pb-52 ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel
            amet veritatis, laborum optio ut explicabo magnam recusandae omnis
            similique animi ratione facilis laudantium mollitia quod culpa
            nostrum incidunt! Sed ipsa maiores harum voluptate qui labore.
            Accusantium quia illum error?
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="ratione facilis laudantium mollitia quod culpa
            nostrum incidunt! Sed ipsa maiores harum voluptate qui labore.
            Accusantium quia illum error?"
            isCommingSoon
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 ">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="Sed ipsa maiores harum voluptate qui labore.
            Accusantium quia illum error?"
              src="videos/feature-2.mp4"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="ratione facilis laudantium mollitia quod culpa
            nostrum incidunt! Sed ipsa maiores harum voluptate qui labore.
            Accusantium quia illum error?"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="ratione facilis laudantium mollitia quod culpa
            nostrum incidunt! Sed ipsa maiores harum voluptate qui labore.
            Accusantium quia illum error?"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                   <h1 className="bento-title special-font max-w-64 text-black">M<b>0</b>re co<b>m</b>ing s<b>o</b>on!</h1>
                   <TiLocationArrow className="m-5 scale-[5] self-end" />
              </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
             <video
             src="videos/feature-5.mp4"
             loop
             muted
             autoPlay
             className="size-full object-cover object-center"
             />
          </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default Features;