import NavBar from "../src/components/NavBar/NavBar.jsx";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import PriceingSection from "./components/PriceingSection/PriceingSection.jsx";
import FeatureSection from "./components/FeatureSection/FeaturSection.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <div>
          <NavBar/>
          <HeroSection/>
          <PriceingSection/>
          <FeatureSection/>
          <Footer/>
        </div>
    );
}

export default App;
