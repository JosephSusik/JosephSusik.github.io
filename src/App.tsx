import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Navbar />
      <ProfilePage />
      <AboutPage />
      <ExperiencePage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
