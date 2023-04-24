import "./App.css";
import Astrologers from "./sections/Astrologers";
import CTA from "./sections/CTA";
import Carousel from "./sections/Offers";
import Solutions from "./sections/Solutions";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Review from "./sections/Review";
function App() {
  return (
    <>
      <CTA />
      <Testimonials />
      <Carousel />
      <Astrologers />
      <Solutions />
      <Review />
      <About />
    </>
  );
}

export default App;
