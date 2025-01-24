import ContactUs from "./contact-us/ContactUs";
import DescriptionSection from "./header/DescriptionSection";
import Header from "./header/Header";
import Services from "./services/Services";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <DescriptionSection />
      <Services />
      <ContactUs />
    </div>
  );
};

export default Home;
