import "./App.scss";
import AboutSparkSoul from "./components/AboutSparkSoul/AboutSparkSoul";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Map from "./components/Map/Map";
import Reviews from "./components/Reviews/Reviews";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AboutSparkSoul />
      <Schedule />
      <Reviews />
      <AboutUs />
      <FAQ />
      {/* <Map /> */}
      <Footer />
    </div>
  );
}

export default App;
