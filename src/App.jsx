import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Industries from "./components/Industries";
import Solutions from "./components/Solutions";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <WhyChoose />
            <Industries />
            <Solutions />
            <Portfolio />
            <Footer />
          </>
        }
      />

      <Route
        path="/projects/:slug"
        element={<ProjectPage />}
      />

    </Routes>
  );
}

export default App;