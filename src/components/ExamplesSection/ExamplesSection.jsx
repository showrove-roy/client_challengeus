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
      <div className='absolute -top-40 left-0 w-1/3 -z-50 sideImg'>
        <img className='w-full' src={sideimg} alt='' />
      </div>
      <div className='maxW overflow-x-hidden'>
        <h3 className='uppercase text-7xl font-extrabold text-center tracking-widest titleX'>
          examples
        </h3>

        <div className='mt-28 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden'>
          {/* First Card */}
          <div
            className='flex flex-col items-center p-4 text-center'
            data-aos='fade-right'
            data-aos-duration='500'
            data-aos-easing='ease-in-sine'>
            <div className='mb-5'>
              <h5 className='my-3 text-3xl font-bold uppercase'>First:</h5>
              <p className='capitalize text-xl font-semibold'>
                give us a challenge and set the duration.
              </p>
            </div>
            <div className='mb-5'>
              <h5 className='my-3 text-3xl font-bold uppercase'>second:</h5>
              <p className='capitalize text-xl font-semibold'>
                choose the reward for the completed challenge.
              </p>
            </div>
            <div className='mb-5'>
              <h5 className='my-3 text-3xl font-bold uppercase'>third:</h5>
              <p className='capitalize text-xl font-semibold'>
                let Gen-z-🌎 fascinate you
              </p>
            </div>
          </div>

          {/* second card */}
          <div
            className='pageBg flex flex-col items-center justify-center p-4 text-center'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-easing='ease-in-sine'>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>what</p>
              <p className='uppercase font-semibold text-lg px-5'>
                make our product more appealing for gen z
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>duration</p>
              <p className='uppercase font-semibold text-lg'>
                can you do it in 2 weeks?
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>awards</p>
              <p className='uppercase font-semibold text-lg px-5'>
                Free samples and one hour with our legal advisor
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div
            className='pageBg flex flex-col items-center justify-center p-4 text-center'
            data-aos='fade-left'
            data-aos-duration='500'
            data-aos-easing='ease-in-sine'>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>what</p>
              <p className='uppercase font-semibold text-lg px-5'>
                design my new home (gen z style)
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>duration</p>
              <p className='uppercase font-semibold text-lg'>
                I give you 4 weeks
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>awards</p>
              <p className='uppercase font-semibold text-lg px-5'>
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
