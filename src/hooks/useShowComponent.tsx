import { useEffect } from "react";

interface showComponentsProps {
  selector: string;
}

const useShowComponent = ({ selector }: showComponentsProps): void => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
  
    const cardElements = document.querySelectorAll(selector);
    cardElements.forEach((element) => {
      element.classList.add('hidden'); 
      observer.observe(element);
    });
  
    return () => {
      cardElements.forEach((element) => observer.unobserve(element));
    };
  }, [selector]);

}

export default useShowComponent