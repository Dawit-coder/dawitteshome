import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

export default function Hero() {
  
  useGSAP(() => {
    const titleSplit = new SplitText('#title', { type: 'chars, words'  });
    const paraSplit = new SplitText('#para', { type : 'lines' })

    gsap.from(titleSplit.chars, {
      yPercent: 90,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.02,
      autoRound: false
    })

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 0.6,
      ease: 'expo.out',
      stagger: 0.05,
      delay: 1
    })

  }, [])

  return (
    <section className="text-white h-[90vh] max-w-full flex flex-col justify-center items-center backdrop-opacity-40 gap-5">
      <div className="drop-shadow-[0_0_10px_#3b82f6] hover:drop-shadow-[0_0_15px_#3b82f6]">
        <h2 id="title" className="text-white/95 text-5xl font-black">👋🏻 Hey, there I'm Dawit.</h2>
      </div>
      <div>
        <p id="para" className="font-semibold [text-shadow:_0_0_8px_rgba(255,255,255,0.9),_0_0_16px_rgba(255,255,255,0.4)]"> I'm a dedicated fullstack developer based in Ethiopia, Addis Ababa 📍.</p>
      </div>
    
    </section>
  );
}
