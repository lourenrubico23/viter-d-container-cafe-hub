import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoImageOutline } from "react-icons/io5";
import ModalAddCopyRight from "./ModalAddCopyright";

const Footer = () => {
  const [activeSection, setActiveSection] = React.useState("#header");
  const [itemEdit, setItemEdit] = React.useState("");
  const [isCopyright, setIsCopyright] = React.useState(false);

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

  const handleAddCopyRight = () => {
    setIsCopyright(true);
    setItemEdit("copyrightUpdate");
  };
  return (
    <>
      <section id="footer" className="mb-16">
        <div className="bg-secondary">
          <div className="container flex flex-col md:flex md:flex-row items-center justify-between py-[76px] gap-5">
            {headerData?.data?.length > 0 &&
            headerData.data[0]?.header_logo_img ? (
              <div className="logo-img max-w-[98px] max-h-[90px]">
                <img
                  src={`${devBaseImgUrl}/${headerData.data[0].header_logo_img}`}
                  alt="Logo Image"
                  className="max-w-[98px] max-h-[90px]"
                />
              </div>
            ) : (
              <div className="logo-img max-w-[98px] max-h-[90px] place-content-center">
                <IoImageOutline className="text-[40px] mx-auto text-gray-500" />
              </div>
            )}

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

            <div className="text-center text-[clamp(.5rem,4vw,16px)] text-white font-rubikRegular font-light flex ">
              <a
                className="cursor-pointer relative tooltip-header-nav"
                data-tooltip="Edit text"
                onClick={handleAddCopyRight}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
              </a>
              &copy;
              {copyrightData?.data?.length > 0 &&
              copyrightData.data[0]?.copyright_title ? (
                copyrightData?.data[0].copyright_title
              ) : (
                <h3 className="text-center text-[clamp(.5rem,4vw,16px)] text-white font-rubikRegular font-light flex">
                  Copyright
                </h3>
              )}
            </div>
          </div>
        </div>
      </section>

      {isCopyright && (
        <ModalAddCopyRight
          copyrightData={copyrightData}
          itemEdit={itemEdit}
          setIsCopyright={setIsCopyright}
        />
      )}
    </>
  );
};

export default Footer;
