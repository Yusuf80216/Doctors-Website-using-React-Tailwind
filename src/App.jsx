import Bottom from "./components/Bottom";
import Client from "./components/Client";
import CountsSection from "./components/CountsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import MeetExperts from "./components/MeetExperts";
import Navbar from "./components/Navbar";
import OurActivity from "./components/OurActivity";
import OurDoctors from "./components/OurDoctors";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CountsSection />
      <OurActivity />
      <MeetExperts />
      <OurDoctors />
      <Client />
      <Partners />
      <JoinUs />
      <Footer />
      <Bottom />
    </>
  );
}

export default App;
