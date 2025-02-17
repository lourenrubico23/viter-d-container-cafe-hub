import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "@/components/helpers/functions-general";

import React from "react";
import { RxCross1 } from "react-icons/rx";
import ModalWrapperMenu from "./modal/ModalWrapperMenu";
import LoadImages from "./LoadImages";
import useQueryData from "../custom-hooks/useQueryData";

const ToggleNavigation = ({ setIsOpen, headerData }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [activeSection, setActiveSection] = React.useState("#header");

  const {
    isFetchingCopyRight,
    errorCopyRight,
    data: copyrightData,
  } = useQueryData(
    "/v1/copyright", // endpoint
    "get", // method
    "copyright" // key
  );

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

  const logo = getConvertStringToJSONparseData(
    headerData?.data?.[0]?.header_logo_img
  );

  return (
    <ModalWrapperMenu
      className={`transition-all ease-linear transform duration-200 bg-black ${animate}`}
      handleClose={handleClose}
    >
      <div className="bg-black h-[100dvh] z-[999]">
        <div className="modal-title">
          <div className="logo-img w-[137] h-[38px] z-[1]">
            <LoadImages
              url={`${googleHDViewLink}${logo[0]?.id}`}
              alt="logo"
              className="object-contain h-[55px]"
            />
          </div>
          <button onClick={handleClose} className="z-50">
            <RxCross1 className="text-[20px] md:text-[25px] text-white" />
          </button>
        </div>
        <div className="modal-content">
          <div className="flex flex-col gap-5 items-center my-auto">
            <ul className="flex flex-col gap-5 items-center w-full text-white z-50">
              <li>
                <button
                  className={
                    activeSection === "about"
                      ? "font-montserrat text-[15px]"
                      : ""
                  }
                  onClick={() => scrollToSection("about")}
                >
                  {headerData?.data?.length > 0 &&
                  headerData.data[0]?.header_nav_a ? (
                    headerData?.data[0].header_nav_a
                  ) : (
                    <p className="text-black">Navigation 1</p>
                  )}
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
                  {headerData?.data?.length > 0 &&
                  headerData.data[0]?.header_nav_b ? (
                    headerData?.data[0].header_nav_b
                  ) : (
                    <p className="text-black">Navigation 2</p>
                  )}
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
                  {headerData?.data?.length > 0 &&
                  headerData.data[0]?.header_nav_c ? (
                    headerData?.data[0].header_nav_c
                  ) : (
                    <p className="text-black">Navigation 3</p>
                  )}
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
                  {headerData?.data?.length > 0 &&
                  headerData.data[0]?.header_nav_d ? (
                    headerData?.data[0].header_nav_d
                  ) : (
                    <p className="text-black">Navigation 4</p>
                  )}
                </button>
              </li>
              <h3 className="text-center text-[clamp(.5rem,4vw,12px)] text-white font-rubikRegular font-light w-[200px]">
                &copy;{" "}
                {copyrightData?.data?.length > 0 &&
                copyrightData.data[0]?.copyright_title ? (
                  copyrightData?.data[0].copyright_title
                ) : (
                  <h3 className="text-center text-[clamp(.5rem,4vw,12px)] text-white font-rubikRegular font-light flex">
                    Copyright
                  </h3>
                )}
              </h3>
            </ul>
          </div>
        </div>
      </div>
    </ModalWrapperMenu>
  );
};

export default ToggleNavigation;
