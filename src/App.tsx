import { useState, useMemo, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const isProfileInView = useIsInViewport(profileRef);
  const isAboutInView = useIsInViewport(aboutRef);
  const isExperienceInView = useIsInViewport(experienceRef);
  const isContactInView = useIsInViewport(contactRef);

  var about = document.getElementById("about-btn");
  var experience = document.getElementById("experience-btn");
  var contact = document.getElementById("contact-btn");
  
  useEffect(() => {

    if(isAboutInView && isExperienceInView) {
      about?.classList.add("active")
    } else if (isAboutInView && isProfileInView) {
      about?.classList.add("active")
    } else {
      about?.classList.remove("active")
    }

    if(!isAboutInView && isExperienceInView && !isContactInView) {
      experience?.classList.add("active")
    } else {
      experience?.classList.remove("active")
    }

    if(isExperienceInView && isContactInView) {
      contact?.classList.add("active")
    } else {
      contact?.classList.remove("active")
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProfileInView, isAboutInView, isExperienceInView, isContactInView])


  return (
    <>
      <Navbar />
      <ProfilePage refer={profileRef}/>
      <AboutPage refer={aboutRef}/>
      <ExperiencePage refer={experienceRef}/>
      <ContactPage refer={contactRef}/>
      <Footer />
    </>
  );
}

export default App;

function useIsInViewport(ref:any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}