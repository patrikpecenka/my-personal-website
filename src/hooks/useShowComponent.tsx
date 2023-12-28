import { useEffect } from "react";

interface showComponentsProps {
  selector: string;
  offset?: string;
}

const useShowComponent = ({ selector, offset = "0px" }: showComponentsProps): void => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, {
      rootMargin: offset
    });
  
    const cardElements = document.querySelectorAll(selector);
    cardElements.forEach((element) => {
      element.classList.add('hidden'); 
      observer.observe(element);
    });
  
    return () => {
      cardElements.forEach((element) => observer.unobserve(element));
    };
  }, [selector, offset]);

}

export default useShowComponent