// import { useRef, useState, useEffect } from 'react';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// interface UseScrollTriggerProps {
//   selector: string,

//   animationConfig: {
//     scale: number,
//     opacity:number,
//     y:number,
//     stagger: {
//       amount: number,
//       from: string,
//       ease: string
//     },
//     duration: number,
//     ease: string
//   },

//   start: string,
//   end: string,
//   markers: boolean,
  

// }

// const useScrollTrigger = ({ selector, animationConfig, start, end, markers,  }: UseScrollTriggerProps) => {
//   const main = useRef<any>(null)
//   const [isDelayed, setIsDelayed] = useState(false)

//   useEffect(() => {
//     const timeOut = setTimeout(() => {
//       setIsDelayed(true);
//     }, 300);

//     return () => clearTimeout(timeOut)
//   }, []);

//   useGSAP(() => {
//     if (!isDelayed) {
//       return
//     }
//     gsap.from( selector, {
//       ...animationConfig,
//       scrollTrigger: {
//         trigger: selector,
//         start,
//         end,
//         id: selector,
//         markers,
//         scrub: 1,  
//     },


//   });
//   }, { dependencies: [ScrollTrigger, isDelayed], scope: main, revertOnUpdate: true });

//     return main;
// }

// export default useScrollTrigger;