import { useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollTriggerProps {
  classTrigger: string,
}

const useScrollTrigger = ({ classTrigger }: UseScrollTriggerProps) => {
  const main = useRef<any>(null)
  const [isDelayed, setIsDelayed] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsDelayed(true);
    }, 300);

    return () => clearTimeout(timeOut)
  }, []);

  useGSAP(() => {
    if (!isDelayed) {
      return
    }
    gsap.from(classTrigger,
      {
        scale: 0.3,
        opacity: 0,
        y: 200,
        stagger: {
          amount: 1,
          from: "start"
        },
        duration: 2.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: classTrigger,
          start: "top bottom-=200",
          end: "top+=300 bottom-=200",
          id: classTrigger,
          markers: true,
          scrub: 1,
        }
      })
  }, { dependencies: [ScrollTrigger, isDelayed], scope: main, revertOnUpdate: true });

    return main;
}

export default useScrollTrigger;