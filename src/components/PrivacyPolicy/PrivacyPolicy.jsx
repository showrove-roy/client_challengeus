import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  //   Zoom out
  const zoomOut = useRef(null);
  const { innerHeight } = window;
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const titleOut = self.selector(".titleOut");
      gsap.from(titleOut, {
        scale: 30,
        stagger: 0.25,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: zoomOut.current,
          pin: titleOut,
          start: "top top",
          end: `+=${innerHeight * 1.2}`,
          scrub: 2,
        },
      });
    }, zoomOut);
    return () => ctx.revert();
  }, []);
  return (
    <section className='maxW py-20 mb-16 overflow-hidden -z-50' ref={zoomOut}>
      <h3 className='uppercase lg:text-7xl md:text-5xl sm:text-3xl text-xl font-extrabold text-center tracking-widest titleOut'>
        Privacy policy
      </h3>
      <p
        className='font-medium max-w-5xl mx-auto text-center text-xs md:text-sm lg:text-base leading-5 tracking-widest'
        data-aos='fade-down'
        data-aos-duration='700'>
        Wir legen großen Wert auf den Schutz Ihrer persönlichen Daten.
        Nachfolgend informieren wir Sie darüber, welche Daten während Ihres
        Besuchs auf unserer Website erfasst und wie diese genutzt werden. Bitte
        nehmen Sie sich einen Moment Zeit, um diese Datenschutzerklärung zu
        lesen.
      </p>

      <div className='grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 grid-cols-1 lg:px-12 xl:px-32 mt-10'>
        <div
        className="col-span-2"
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          data-aos-duration='500'>
          <h3 className='text-center md:text-left font-semibold text-xs md:text-sm lg:text-base leading-5 tracking-widest'>1. Verantwortliche Stelle:</h3>
          <p className='mt-1 text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base leading-5 tracking-widest text-center md:text-left'>
            Nour Idelbi mendelstraße 11 48149 Deutschland Bei Fragen oder
            Anliegen zum Datenschutz können Sie uns per E-Mail unter
            challengeus@mail.de kontaktieren.
          </p>
        </div>

        <div
        className="col-span-2"
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          data-aos-duration='500'>
          <h3 className='text-center md:text-left font-semibold text-xs md:text-sm lg:text-base leading-5 tracking-widest'>2. Datensicherheit:</h3>
          <p className='mt-1 text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base leading-5 tracking-widest text-center md:text-left'>
            Wir setzen technische und organisatorische Maßnahmen ein, um Ihre
            Daten gegen Manipulation, Verlust, Zerstörung oder den Zugriff
            unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen
            werden entsprechend der technologischen Entwicklung fortlaufend
            verbessert
          </p>
        </div>
        <div className='col-span-2'>
          <h3
            className='text-center md:text-left font-semibold text-xs md:text-sm lg:text-base leading-5 tracking-widest'
            data-aos='fade-up'
            data-aos-duration='500'>
            3.Datenerfassung und -verwendung:
          </h3>
          <p
            className='mt-1 text-gray-700 mb-3 text-[10px] sm:text-xs md:text-sm lg:text-base leading-5 tracking-widest text-center md:text-left'
            data-aos='fade-up'
            data-aos-duration='700'>
            <span className='font-bold'> A)</span> Protokolldaten: Bei jedem Zugriff auf unsere Website werden automatisch Informationen durch Ihren Browser an unseren Server übermittelt und in Protokolldateien (Logfiles) gespeichert. Diese Daten enthalten unter anderem Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs, Name der abgerufenen Datei, übertragene Datenmenge und den anfragenden Provider. Diese Daten dienen ausschließlich der Sicherstellung eines reibungslosen Betriebs unserer Website und werden nach einer statistischen Auswertung gelöscht.
          </p>
          <p
            className='mt-1 text-gray-700 mb-3 text-[10px] sm:text-xs md:text-sm lg:text-base leading-5 tracking-widest text-center md:text-left'
            data-aos='fade-up'
            data-aos-duration='900'>
            <span className='font-bold'> B)</span>  Cookies: Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen bereitzustellen. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können die Verwendung von Cookies in Ihren Browsereinstellungen deaktivieren, allerdings können dadurch einige Funktionen unserer Website beeinträchtigt werden.
          </p>
          <p
            className='mt-1 text-gray-700 mb-3 text-[10px] sm:text-xs md:text-sm lg:text-base leading-5 tracking-widest text-center md:text-left'
            data-aos='fade-up'
            data-aos-duration='1100'>
            <span className='font-bold'> C)</span> Kontaktaufnahme: Wenn Sie uns per E-Mail oder über unser Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (wie z.B. Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten werden vertraulich behandelt und nicht ohne Ihre Einwilligung an Dritte weitergegeben.
          </p>
        </div>
        <div
        className="col-span-2"
          data-aos='fade-right'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          data-aos-duration='500'>
          <h3 className='text-center md:text-left font-semibold text-xs md:text-sm lg:text-base leading-5 tracking-widest'>
          4. Links zu anderen Websites:
          </h3>
          <p className='mt-1 text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base leading-5 tracking-widest text-center md:text-left'> 
          Unsere Website kann Links zu anderen Websites enthalten, auf die sich diese Datenschutzerklärung nicht erstreckt. Wir haben keinen Einfluss auf die Einhaltung der Datenschutzbestimmungen auf verlinkten Websites und empfehlen Ihnen, die Datenschutzerklärungen dieser Websites zu lesen
          </p>
        </div>
        <div
        className="col-span-2"
          data-aos='fade-left'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
          data-aos-duration='500'>
          <h3 className='text-center md:text-left font-semibold text-xs md:text-sm lg:text-base leading-5 tracking-widest'>5. Ihre Rechte:</h3>
          <p className='mt-1 text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base leading-5 tracking-widest text-center md:text-left'>
            Sie haben das Recht, Auskunft über die von uns über Sie
            gespeicherten Daten zu erhalten und können eine Berichtigung,
            Löschung oder Sperrung Ihrer personenbezogenen Daten verlangen. Bei
            Fragen oder Anliegen zum Datenschutz können Sie uns jederzeit
            kontaktieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
