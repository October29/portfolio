// src/components/header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import style from './Header.module.css';
import Navbar from '../navbar/Navbar'; // Importa Navbar
import TitleBar from '../titleBar/TitleBar';
import { useSectionNavigation } from '../../contexts/NavigationContext';

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const headerInitialRef = useRef(null); // Ref para el <header> principal
  const { headerRef } = useSectionNavigation(); // Obtiene la ref del contexto para asignar al header principal

  useEffect(() => {
    // Asigna la ref interna del Header a la ref del contexto
    if (headerInitialRef.current) {
      headerRef.current = headerInitialRef.current;
    }

    const handleScroll = () => {
      // Obtén la altura del header inicial. Si no existe, usa un valor por defecto.
      // Puedes ajustar este valor si tu TitleBar o Navbar tienen una altura específica
      const headerHeight = headerInitialRef.current ? headerInitialRef.current.offsetHeight : 150; // Aumentado a 150px como ejemplo, ajusta si es necesario.

      // La navbar fija aparecerá cuando el scroll supere la altura del header inicial.
      if (window.scrollY > headerHeight) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerRef]);

  return (
    <>
      {/* 1. Este es el header inicial, que siempre está en el flujo del documento. */}
      {/* Contiene el TitleBar y la Navbar que se ve al principio. */}
      <header className={style.main_header} ref={headerInitialRef}>
        <TitleBar />
        {/* Renderiza la Navbar "normal" aquí. NO es la Navbar fija. */}
        <Navbar isFixed={false} />
      </header>

      {/* 2. Este es el contenedor para la Navbar que se hará "fixed" y aparecerá al hacer scroll. */}
      {/* Se renderiza SIEMPRE, pero su visibilidad y posición son controladas por CSS. */}
      <nav className={`${style.fixed_navbar_wrapper} ${isNavbarFixed ? style.visible : style.hidden}`}>
        {/* Renderiza la Navbar "fija" dentro de su contenedor. */}
        <Navbar isFixed={true} />
      </nav>
    </>
  );
}

export default Header;