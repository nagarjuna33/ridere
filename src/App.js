import "./App.css";
import FAQApp from "./FAQ";
import Services from "./Services";
import VideoComponent from "./VideoComponent";
import aboutRidere from "./aboutRidere";
import MyNavbar from "./MyNavbar";
import BackgroundSection from './BackgroundSection';
import CountSection from "./countSection";
import Footer from "./Footer";
import LandingPgePart from "./Card"


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <BackgroundSection/>
      <Services />
      <aboutRidere />
      <LandingPgePart/>
      <CountSection/>
      <VideoComponent />

      <FAQApp />
      <Footer/>
      
    </div>
  );
}

export default App;
