import { devBaseImgUrl } from "@/components/helpers/functions-general";
import ToggleNavigation from "@/components/partials/ToggleNavigation";
import { setIsShow } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaBars, FaRegImages } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isOpen, setIsOpen] = React.useState(false);

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
          <a
            className="z-[2] relative cursor-pointer tooltip-header"
            data-tooltip="Upload Logo"
            // onClick={AddLogo}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
          </a>
          <img
            src={`${devBaseImgUrl}/logo.png`}
            alt=""
            className="w-[55px] lg:w-[98px] lg:h-[90px]"
          />

          <div className="toggle lg:hidden" onClick={NavigationOpen}>
            <RxHamburgerMenu className="text-white size-6" />
          </div>
        </div>
        <div className=" hidden lg:block">
          <ul className="nav flex flex-col md:flex md:flex-row gap-12 [&>li]:cursor-pointer">
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("coffee")}>Coffee</li>
            <li onClick={() => scrollToSection("spaSalon")}>Spa Salon</li>
            <li onClick={() => scrollToSection("reachUs")}>Reach Us</li>
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
