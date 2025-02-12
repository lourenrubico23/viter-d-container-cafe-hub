import React from "react";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import useQueryData from "../custom-hooks/useQueryData";
import LoadImages from "./LoadImages";

const Footer = () => {
  const [activeSection, setActiveSection] = React.useState("#header");

  const {
    isFetching,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
  );

  const {
    isFetchingCopyRight,
    errorCopyRight,
    data: copyrightData,
  } = useQueryData(
    "/v1/copyright", // endpoint
    "get", // method
    "copyright" // key
  );

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const logo = getConvertStringToJSONparseData(
    headerData?.data?.[0]?.header_logo_img
  );

  return (
    <>
      <section id="footer">
        <div className="bg-secondary">
          <div className="container flex flex-col md:flex md:flex-row items-center justify-between py-[76px] gap-5">
            <LoadImages
              url={`${googleHDViewLink}${logo[0]?.id}`}
              alt="Logo Image"
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
                {headerData?.data?.length > 0 &&
                headerData.data[0]?.header_nav_a ? (
                  headerData?.data[0].header_nav_a
                ) : (
                  <p className="text-black">Navigation 1</p>
                )}
              </li>
              <li
                className={
                  activeSection === "coffee"
                    ? "cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => scrollToSection("coffee")}
              >
                {headerData?.data?.length > 0 &&
                headerData.data[0]?.header_nav_b ? (
                  headerData?.data[0].header_nav_b
                ) : (
                  <p className="text-black">Navigation 2</p>
                )}
              </li>
              <li
                className={
                  activeSection === "spaSalon"
                    ? "cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => scrollToSection("spaSalon")}
              >
                {headerData?.data?.length > 0 &&
                headerData.data[0]?.header_nav_c ? (
                  headerData?.data[0].header_nav_c
                ) : (
                  <p className="text-black">Navigation 3</p>
                )}
              </li>
              <li
                className={
                  activeSection === "reachUs"
                    ? "cursor-pointer"
                    : "cursor-pointer"
                }
                onClick={() => scrollToSection("reachUs")}
              >
                {headerData?.data?.length > 0 &&
                headerData.data[0]?.header_nav_d ? (
                  headerData?.data[0].header_nav_d
                ) : (
                  <p className="text-black">Navigation 4</p>
                )}
              </li>
            </ul>
            <div className="text-center text-[clamp(.5rem,4vw,16px)] text-white font-rubikRegular font-light">
              &copy;{" "}
              {copyrightData?.data?.length > 0 &&
              copyrightData.data[0]?.copyright_title ? (
                copyrightData?.data[0].copyright_title
              ) : (
                <h4 className="text-center text-[clamp(.5rem,4vw,16px)] text-white font-rubikRegular font-light flex">
                  Copyright
                </h4>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
