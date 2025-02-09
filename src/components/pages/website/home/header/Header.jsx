import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { GrLocation } from "react-icons/gr";
import Navigation from "../../Navigation";
import ToggleNavigation from "@/components/partials/ToggleNavigation";
import useQueryData from "@/components/custom-hooks/useQueryData";

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

  const {
    isFetching,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

  return (
    <>
      <section
        id="header"
        className="banner relative flex items-center place-content-center 2xl:min-h-[80dvh] lg:min-h-[100dvh]"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src={`${devBaseImgUrl}/${headerData?.data[0].header_banner_img}`}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="container wrapper justify-center place-items-center py-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-14 justify-center items-center py-10 text-center mx-auto">
            <h2 className="text-[clamp(25px,3vw,52px)] leading-[1.1] text-light font-rubikBold text-center lg:max-w-[1064px]">
              {headerData?.data?.length > 0 &&
              headerData.data[0]?.header_banner_title
                ? headerData?.data[0].header_banner_title
                : "Title"}
            </h2>
            <div onClick={() => scrollToSection("reachUs")}>
              <a className="btn text-light flex items-center gap-2 max-w-[218px] h-[54px]">
                {headerData?.data?.length > 0 &&
                headerData.data[0]?.header_button_text
                  ? headerData?.data[0].header_button_text
                  : "Button Text"}{" "}
                <GrLocation className="text-[22px]" />
              </a>
            </div>
          </div>
        </div>
        <Navigation />
      </section>
    </>
  );
};

export default Header;
