import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import ToggleNavigation from "@/components/partials/ToggleNavigation";
import { setIsShow } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaBars } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const {
    isFetching,
    error,
    data: headerData,
  } = useQueryData(
    "/v1/header", // endpoint
    "get", // method
    "header" // key
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

  const NavigationOpen = () => {
    setIsOpen(true);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <div className="container absolute lg:flex  justify-between top-0 lg:top-6 items-center px-0 lg:px-12 ">
        <div className="flex justify-between items-center bg-black lg:bg-transparent py-3 px-4 lg:px-0 lg:py-0">
          <img
            src={`${devBaseImgUrl}/${headerData?.data[0].header_logo_img}`}
            alt="Logo Image"
            className="w-[55px] lg:w-[98px] lg:h-[90px]"
          />
          <div className="toggle lg:hidden" onClick={NavigationOpen}>
            <RxHamburgerMenu className="text-white size-6" />
          </div>
        </div>
        <div className=" hidden lg:block">
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
    </>
  );
};

export default Navigation;
