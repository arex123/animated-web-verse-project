import React, { createContext, useContext, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapContext = createContext();

export const useGsap = () => useContext(GsapContext);

export const GsapProvider = ({ children }) => {
  useEffect(() => {
    // Default ScrollTrigger settings
    ScrollTrigger.defaults({
      toggleActions: "play none none none",
      markers: true,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const createTimeline = (vars) => {
    return gsap.timeline(vars);
  };

  return (
    <GsapContext.Provider value={{ createTimeline }}>
      {children}
    </GsapContext.Provider>
  );
};
