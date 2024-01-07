import { gsap } from "gsap";

const GsapAnimation = () => {
    gsap.from(".navbar-logo", 0.5, {
      opacity: 0,
      x: -20,
      ease: "power2.in"
    }),

    gsap.from("ul li", 0.5, {
      opacity: 0,
      x: -20,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "power2.in"
      }
    }),

    gsap.from(".navbar-button", .5, {
      opacity: 0,
      delay: 0.5,
      x: -20,
      ease: "power2.in"
    }),

    gsap.from(".switch-button", .5, {
      opacity: 0,
      delay: 0.7,
      x: -20,
      ease: "power2.in"
    }),

    gsap.from(".burger-menu", .5, {
      opacity: 0,
      delay: 0.5,
      x: -20,
      ease: "power2.in"
    }),

    gsap.from(".background-grey-text div", 0.6, {
      opacity: 0,
      y: 40,
      stagger: {
        amount: 0.6,
        from: "start",
        ease: "power2.in"
      }
    }),

    gsap.from(".text-container .t-fs", 0.5, {
      opacity: 0,
      y: 40,
      delay: 1.2,
      stagger: {
        amount: 1.2,
        from: "start",
        ease: "power2.in"
      }
    }),

    gsap.from(".pfp-image", 2, {
      opacity: 0,
      y: -100,
      delay: 1.5
    }),

    gsap.from(".button-container .button-under-text", 0.8, {
      opacity: 0,
      x: -40,
      delay: 3.5,
      stagger: {
        amount: 1,
        from: "start",
        ease: "power2.in"
      }
    }),

    gsap.from(".socials-container a svg", 2, {
      opacity: 0,
      y: 40,
      delay: 3.8,
      stagger: {
        amount: 0.8,
        from: "start",
        ease: "power2.in"
      }
    })
    return null;
}

export default GsapAnimation;