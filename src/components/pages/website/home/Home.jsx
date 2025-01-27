import Footer from "@/components/partials/Footer";
import About from "./about/About";
import ContactUs from "./contact-us/ContactUs";
import Header from "./header/Header";
import ReachUs from "./reach-us/ReachUs";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <Services />
      <ContactUs />
      <Testimonial />
      <ReachUs />
      <Footer />
    </div>
  );
};

export default Home;
