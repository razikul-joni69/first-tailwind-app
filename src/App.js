import NavBar from "../src/components/NavBar/NavBar.jsx";
import "./App.css";
import FeatureSection from "./components/FeatureSection/FeaturSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import PriceingSection from "./components/PriceingSection/PriceingSection.jsx";

function App() {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <PriceingSection />
            <FeatureSection />
            <Footer />
        </div>
    );
}

export default App;
