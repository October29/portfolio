import {useRef} from "react";
import AboutMe from "../components/aboutMe/AboutMe";
import Header from "../components/header/Header";
import Proyects from "../components/proyects/Proyects.jsx";
import Contact from "../components/contact/Contact.jsx";
import { useSectionNavigation } from "../contexts/NavigationContext.jsx";

const Home = () => {
  const { homeRef, aboutMeRef, proyectsRef, contactRef } = useSectionNavigation();


  return (
    <div ref={homeRef} >
      <Header />
      <AboutMe ref={aboutMeRef} />
      <Proyects ref={proyectsRef} />
      <Contact ref={contactRef} />
    </div>
  )
}

export default Home;