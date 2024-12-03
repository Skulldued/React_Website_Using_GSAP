import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import Button from "./Button"
const Story = () => {
  const framerRef = useRef("null");
  const handleMouseLeave = () => {
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = framerRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };
  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50 ">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general uppercase md:text-[10px] text-sm">
          the Multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The st<b>o</b>ry of a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-cotent">
                <img
                  src="/img/entrance.webp"
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  ref={framerRef}
                  className="object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              quisquam, obcaecati veniam tenetur repudiandae, sequi, vitae quam
              nulla ea delectus aliquid modi placeat et laborum necessitatibus
              maiores. Ratione, ad delectus.
            </p>
            <Button
              id="realm-button"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
