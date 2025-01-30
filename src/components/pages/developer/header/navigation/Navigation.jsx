import { devBaseImgUrl } from "@/components/helpers/functions-general";
import ToggleNavigation from "@/components/partials/ToggleNavigation";
import { setIsShow } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaBars, FaRegImages } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiPencil } from "react-icons/hi";
import ModalAddLogo from "./ModalAddLogo";
import useQueryData from "@/components/custom-hooks/useQueryData";
import ModalAddNavigation from "./ModalAddNavigation";
import Header from "@/components/pages/website/home/header/Header";
import { IoImageOutline } from "react-icons/io5";

const Navigation = ({ headerData, setItemEdit, itemEdit }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLogo, setIsLogo] = React.useState(false);
  const [isNav, setIsNav] = React.useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const NavigationOpen = () => {
    setIsOpen(true);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddLogo = () => {
    setIsLogo(true);
    setItemEdit("logoUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddNav = () => {
    setIsNav(true);
    setItemEdit("navigationUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <div className="container absolute lg:flex  justify-between top-0 lg:top-6 items-center px-0 lg:px-12 ">
        <div className="flex justify-between items-center bg-black lg:bg-transparent py-3 px-4 lg:px-0 lg:py-0">
          {headerData?.data?.length > 0 &&
          headerData.data[0]?.header_logo_img ? (
            <div className="logo-img w-[55px] lg:w-[98px] lg:h-[90px]">
              <img
                src={`${devBaseImgUrl}/${headerData.data[0].header_logo_img}`}
                alt=""
                className="w-[55px] lg:w-[98px] lg:h-[90px]"
              />
            </div>
          ) : (
            <div className="logo-img w-[55px] lg:w-[98px] lg:h-[90px] place-content-center">
              <IoImageOutline className="text-[40px] mx-auto text-gray-500" />
            </div>
          )}

          <a
            className="z-[2] relative cursor-pointer tooltip-header"
            data-tooltip="Upload Logo"
            onClick={handleAddLogo}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
          </a>

          <div className="toggle lg:hidden" onClick={NavigationOpen}>
            <RxHamburgerMenu className="text-white size-6" />
          </div>
        </div>

        <div className=" flex items-center ">
          <a
            className="cursor-pointer relative tooltip-header-nav"
            data-tooltip="Edit contents"
            onClick={handleAddNav}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
          </a>
          <ul className="nav flex flex-col md:flex md:flex-row gap-12 [&>li]:cursor-pointer">
            <li onClick={() => scrollToSection("about")}>
              {headerData?.data?.length > 0 &&
              headerData.data[0]?.header_nav_a ? (
                headerData?.data[0].header_nav_a
              ) : (
                <p className="text-black">Navigation 1</p>
              )}
            </li>

            <li onClick={() => scrollToSection("coffee")}>
              {headerData?.data?.length > 0 &&
              headerData.data[0]?.header_nav_b ? (
                headerData?.data[0].header_nav_b
              ) : (
                <p className="text-black">Navigation 2</p>
              )}
            </li>
            <li onClick={() => scrollToSection("spaSalon")}>
              {headerData?.data?.length > 0 &&
              headerData.data[0]?.header_nav_c ? (
                headerData?.data[0].header_nav_c
              ) : (
                <p className="text-black">Navigation 3</p>
              )}
            </li>
            <li onClick={() => scrollToSection("reachUs")}>
              {headerData?.data?.length > 0 &&
              headerData.data[0]?.header_nav_d ? (
                headerData?.data[0].header_nav_d
              ) : (
                <p className="text-black">Navigation 4</p>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:hidden block">
        {isOpen && <ToggleNavigation setIsOpen={setIsOpen} />}
      </div>

      {isLogo && (
        <ModalAddLogo
          itemEdit={itemEdit}
          setIsLogo={setIsLogo}
          headerData={headerData}
        />
      )}
      {isNav && (
        <ModalAddNavigation
          itemEdit={itemEdit}
          setIsNav={setIsNav}
          headerData={headerData}
        />
      )}
    </>
  );
};

export default Navigation;
