import { devBaseImgUrl } from "@/components/helpers/functions-general";

import React from "react";
import { RxCross1 } from "react-icons/rx";
import ModalWrapperMenu from "./modal/ModalWrapperMenu";

const ToggleNavigation = ({ setIsOpen }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [activeSection, setActiveSection] = React.useState("#header");

  const handleClose = () => {
    setAnimate("translate-x-full");
    document.body.classList.toggle("overflow-hidden");
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  React.useEffect(() => {
    const sectionIds = ["header", "ourTaste", "ourOrigin", "reachUs"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

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
      document.body.classList.remove("overflow-hidden");
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <ModalWrapperMenu
      className={`transition-all ease-linear transform duration-200 bg-black ${animate}`}
      handleClose={handleClose}
    >
      <div className="bg-black h-[100dvh] z-[999]">
        <div className="modal-title">
          <div className="logo-img w-[137] h-[38px] z-[1]">
            <img
              src={`${devBaseImgUrl}/logo.png`}
              alt="logo"
              className="object-contain h-[55px]"
            />
          </div>
          <button onClick={handleClose}>
            <RxCross1 className="text-[20px] md:text-[25px] text-white" />
          </button>
        </div>
        <div className="modal-content">
          <div className="flex flex-col gap-5 items-center my-auto">
            <ul className="flex flex-col gap-5 items-center w-full text-white">
              <li>
                <button
                  className={
                    activeSection === "about"
                      ? "font-montserrat text-[15px]"
                      : ""
                  }
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>

              <li>
                <button
                  className={
                    activeSection === "coffee"
                      ? "font-montserrat text-[15px]"
                      : ""
                  }
                  onClick={() => scrollToSection("coffee")}
                >
                  Coffee
                </button>
              </li>
              <li>
                <button
                  className={
                    activeSection === "spaSalon"
                      ? "font-montserrat text-[15px]"
                      : ""
                  }
                  onClick={() => scrollToSection("spaSalon")}
                >
                  Spa Salon
                </button>
              </li>
              <li>
                <button
                  className={
                    activeSection === "reachUs"
                      ? "font-montserrat text-[15px]"
                      : ""
                  }
                  onClick={() => scrollToSection("reachUs")}
                >
                  Reach Us
                </button>
              </li>
              <h3 className="text-center text-[clamp(.5rem,4vw,12px)] text-white font-rubikRegular font-light">
                &copy; D'ConTainerHUB
              </h3>
            </ul>
          </div>
        </div>
      </div>
    </ModalWrapperMenu>
  );
};

export default ToggleNavigation;
