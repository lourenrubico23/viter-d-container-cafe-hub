import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { GrLocation } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";

import Navigation from "./navigation/Navigation";
import useQueryData from "@/components/custom-hooks/useQueryData";

const Header = () => {
  // const {
  //   isFetching,
  //   error,
  //   data: headerData,
  // } = useQueryData(
  //   "/v1/header", // endpoint
  //   "get", // method
  //   "header" // key
  // );

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
      <section
        id="header"
        className="banner h-[120vh] relative flex items-center place-content-center"
      >
        <div className="">
          <img
            src={`${devBaseImgUrl}/bannerImage.webp`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="container wrapper justify-center place-items-center py-10 ">
            <div className="text-center flex flex-col gap-14 justify-center items-center py-10 ">
              <h2 className="text-[clamp(25px,3vw,52px)] leading-[1.1]  text-light font-rubikBold text-center lg:max-w-[1064px]">
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
        <Navigation />
      </section>
    </>
  );
};

export default Header;
