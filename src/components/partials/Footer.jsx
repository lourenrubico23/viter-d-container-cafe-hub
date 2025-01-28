import React from "react";
import { devBaseImgUrl } from "../helpers/functions-general";

const Footer = () => {
  const [activeSection, setActiveSection] = React.useState("#header");

  React.useEffect(() => {
    // section IDs to track
    const sectionIds = ["about", "coffee", "spaSalon", "reachUs"];

    // IntersectionObserver to track the active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% of the section is in view
    );

    // Observe each section on the page
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <section id="footer">
        <div className="bg-secondary">
          <div className="container flex flex-col md:flex md:flex-row items-center justify-between py-[76px] gap-5">
            <img
              src={`${devBaseImgUrl}/logo.png`}
              alt=""
              className="max-w-[98px] max-h-[90px]"
            />
            <ul className="nav md:flex gap-12 text-center">
              <li
                className={
                  activeSection === "about"
                    ? "cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => scrollToSection("about")}
              >
                About
              </li>
              <li
                className={
                  activeSection === "coffee"
                    ? "cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => scrollToSection("coffee")}
              >
                Coffee
              </li>
              <li
                className={
                  activeSection === "spaSalon"
                    ? "cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => scrollToSection("spaSalon")}
              >
                Spa Salon
              </li>
              <li
                className={
                  activeSection === "reachUs"
                    ? "cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => scrollToSection("reachUs")}
              >
                Reach Us
              </li>
            </ul>
            <h3 className="text-center text-[clamp(.5rem,4vw,16px)] text-white font-rubikRegular font-light">
              &copy; D'ConTainerHUB
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
