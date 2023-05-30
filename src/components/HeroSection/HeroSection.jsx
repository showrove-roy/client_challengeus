import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Zoom in on scroll
  const zoomIn = useRef(null);
  const { innerHeight } = window;
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const titleIn = self.selector(".titleIn");
      gsap.to(titleIn, {
        scale: 4,
        stagger: 0.25,
        duration: 5,
        opacity: 0,
        scrollTrigger: {
          trigger: zoomIn.current,
          pin: true,
          end: `+=${innerHeight * 1.3}`,
          scrub: 3,
        },
      });
    }, zoomIn);
    return () => ctx.revert();
  }, []);

  // Background image zoom in effect
  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: ".heroBg",
      duration: 2,
      animation: gsap.fromTo(".heroBg", { scale: 1 }, { scale: 1.5 }),
      start: "bottom top",
      end: "bottom bottom",
      scrub:2,
    });
  }, []);

  return (
    <section
      className='heroBg h-screen flex justify-center items-center overflow-hidden z-50'
      ref={zoomIn}>
      <h1 className='text-white lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-extrabold uppercase tracking-widest	text-center titleIn'>
        Dare to
        <br />
        explore
      </h1>
    </section>
  );
};

export default HeroSection;
