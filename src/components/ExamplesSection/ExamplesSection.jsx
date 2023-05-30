import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import sideimg from "../../assets/images/sideimg.png";
const ExamplesSection = () => {
  //   Zoom out
  const zoomOut = useRef(null);
  const { innerHeight } = window;
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const titleOut = self.selector(".sideImg");
      gsap.from(titleOut, {
        scale: 100,
        stagger: 0.25,
        duration: 5,
        opacity:0,
        scrollTrigger: {
          trigger: zoomOut.current,
          pin: true,
          start: "top 70%",
          end: `+=${innerHeight * 1.3}`,
          scrub: 3,
        },
      });
    }, zoomOut);
    return () => ctx.revert();
  }, []);

  // title entry
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const text = self.selector(".titleX");
      gsap.fromTo(
        text,
        { x: 700, opacity: 0, scale: 0.1 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 10,
          scrollTrigger: {
            trigger: text,
            start: "bottom bottom",
            end: "top top",
            scrub: 3,
          },
        }
      );
    }, zoomOut);
    return () => ctx.revert();
  }, []);
  return (
    <section
      className='max-w-[1920px] mx-auto relative mt-24 mb-36 z-10 bg-white'
      ref={zoomOut}>
      {/* side img */}
      <div className='absolute -top-40 left-0 lg:w-1/3 w-1/2 -z-50 sideImg'>
        <img className='w-full' src={sideimg} alt='' />
      </div>
      <div className='maxW overflow-x-hidden'>
        <h3 className='uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-center tracking-widest titleX'>
          examples
        </h3>

        <div className='lg:mt-28 mt-5 grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-hidden'>
          {/* First Card */}
          <div
            className='flex flex-col items-center p-4 text-center'
            data-aos='fade-right'
            data-aos-duration='500'
            data-aos-easing='ease-in-sine'>
            <div className='mb-5'>
              <h5 className='my-3 lg:text-2xl md:text-xl sm:text-lg text-base font-bold uppercase'>First:</h5>
              <p className='capitalize  md:text-base text-xs font-semibold'>
                give us a challenge and set the duration.
              </p>
            </div>
            <div className='mb-5'>
              <h5 className='my-3 lg:text-2xl md:text-xl sm:text-lg text-base font-bold uppercase'>second:</h5>
              <p className='capitalize md:text-base text-xs font-semibold'>
                choose the reward for the completed challenge.
              </p>
            </div>
            <div className='mb-5'>
              <h5 className='my-3 lg:text-2xl md:text-xl sm:text-lg text-base font-bold uppercase'>third:</h5>
              <p className='capitalize md:text-base text-xs font-semibold'>
                let Gen-z-🌎 fascinate you
              </p>
            </div>
          </div>

          {/* second card */}
          <div
            className='pageBg flex flex-col items-center justify-center p-10 text-center'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-easing='ease-in-sine'>
            <div className='mb-2'>
              <p className='uppercase font-semibold md:text-base text-xs'>what</p>
              <p className='uppercase font-semibold md:text-base text-xs px-5'>
                make our product more appealing for gen z
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold md:text-base text-xs'>duration</p>
              <p className='uppercase font-semibold md:text-base text-xs'>
                can you do it in 2 weeks?
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold md:text-base text-xs'>awards</p>
              <p className='uppercase font-semibold md:text-base text-xs px-5'>
                Free samples and one hour with our legal advisor
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div
            className='pageBg flex flex-col items-center justify-center p-10 text-center'
            data-aos='fade-left'
            data-aos-duration='500'
            data-aos-easing='ease-in-sine'>
            <div className='mb-2'>
              <p className='uppercase font-semibold md:text-base text-xs'>what</p>
              <p className='uppercase font-semibold md:text-base text-xs px-5'>
                design my new home (gen z style)
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold md:text-base text-xs'>duration</p>
              <p className='uppercase font-semibold md:text-base text-xs'>
                I give you 4 weeks
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold md:text-base text-xs'>awards</p>
              <p className='uppercase font-semibold md:text-base text-xs px-5'>
                I can offer a professional photo shoot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
