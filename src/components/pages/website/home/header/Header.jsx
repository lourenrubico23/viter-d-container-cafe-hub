import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { GrLocation } from "react-icons/gr";
import Navigation from "../../Navigation";

const Header = () => {
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
    <section
      id="header"
      className="banner  h-[120vh] relative flex items-center place-content-center"
    >
      <div className="">
        <img
          src={`${devBaseImgUrl}/bannerImage.webp`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <Navigation />
        <div className="md:w-[1460px] relative z-10 h-full">
          <div className="wrapper justify-center place-items-center py-10">
            <div className="text-center flex flex-col gap-14 justify-center items-center py-10">
              <h2 className="text-[clamp(30px,3vw,52px)] leading-[1.1]  text-light font-rubikBold text-center md:w-[1167px] ">
                Indulge in delicious, high-quality food while unwinding and
                treating yourself—all in one perfect destination.
              </h2>
              <div onClick={() => scrollToSection("reachUs")}>
                <a className="btn text-light  flex items-center gap-2 w-[218px] h-[54px]">
                  See Where We At <GrLocation className="text-[22px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
