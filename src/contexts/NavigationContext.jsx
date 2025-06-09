import React, { createContext, useRef, useContext } from "react";

export const NavigationContext = createContext(null);

export const useSectionNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useSectionNavigation must be used within a NavigationProvider");
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const proyectsRef = useRef(null);
  const contactRef = useRef(null);
  const headerRef = useRef(null);

  /**
   * Función para scroll a una sección específica.
   * @param {string} sectionId - El identificador único de la sección a la que se desea hacer scroll.
   */
  const navigateToSection = (sectionId) => {
    let targetRef;
    switch (sectionId) {
      case "home":
        targetRef = homeRef;
        break;
      case "aboutMe":
        targetRef = aboutMeRef;
        break;
      case "proyects":
        targetRef = proyectsRef;
        break;
      case "contact":
        targetRef = contactRef;
        break;
      default:
        console.warn(`No se encontró la sección: ${sectionId}`);
        return;
    } 
    
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }
    const contextValue = {
    navigateToSection,
    homeRef,
    aboutMeRef,
    proyectsRef,
    contactRef,
    headerRef
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}