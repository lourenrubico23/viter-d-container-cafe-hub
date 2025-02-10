import Footer from "@/components/partials/Footer";
import About from "./about/About";
import ContactUs from "./contact-us/ContactUs";
import Header from "./header/Header";
import ReachUs from "./reach-us/ReachUs";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";
import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  devApiVersion,
  hexToRgb,
} from "@/components/helpers/functions-general";

const Home = () => {
  const {
    isFetching,
    error,
    data: colorsData,
  } = useQueryData(
    `${devApiVersion}/colors`, // endpoint
    "get", // method
    "colors" // key
  );

  // to change the color when submitted
  document
    .querySelector(":root")
    .style.setProperty(
      "--primary-color",
      hexToRgb(colorsData?.data[0].colors_primary)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--secondary-color",
      hexToRgb(colorsData?.data[0].colors_secondary)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--accent-color",
      hexToRgb(colorsData?.data[0].colors_accent)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--light-color",
      hexToRgb(colorsData?.data[0].colors_light)
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--dark-color",
      hexToRgb(colorsData?.data[0].colors_dark)
    );

  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <Header />
        <About />
        <Services />
        <ContactUs />
        <Testimonial />
        <ReachUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
