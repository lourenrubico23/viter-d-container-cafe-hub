import { devBaseImgUrl } from "@/components/helpers/functions-general";
import { setIsShow } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleShowNav = () => {
    setTimeout(() => {
      dispatch(setIsShow(!store.isShow));
    }, 10);
  };
  return (
    <div className="container absolute flex justify-between top-6 items-center px-0">
      <img
        src={`${devBaseImgUrl}/logo.png`}
        alt=""
        className="w-[55px] md:w-[98px] md:h-[90px]"
      />
      <button
        className={
          store.isShow
            ? "group text-dark !bg-dark/10 rounded-full !p-2 focus:outline-0 tooltip-action-table after:top-10 capitalize block sm:hidden"
            : "group text-dark hover:bg-dark/10 rounded-full !p-2 focus:outline-0 tooltip-action-table after:top-10 capitalize block sm:hidden"
        }
        data-tooltip={store.isShow ? "Hide menu" : "View menu"}
        onClick={handleShowNav}
      >
        <span className="flex items-center w-full justify-center">
          <FaBars className="h-5 w-5" />
        </span>
      </button>
      <div
        className={`${
          store.isShow ? "block md:hidden fixed w-[400px] h-screen  " : ""
        }`}
      >
        <ul
          className={`${
            store.isShow
              ? "md:block hidden fixed w-[400px] h-screen bg-white  "
              : ""
          } nav flex flex-col md:flex md:flex-row gap-12 [&>li]:cursor-pointer `}
        >
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("coffee")}>Coffee</li>
          <li onClick={() => scrollToSection("spaSalon")}>Spa Salon</li>
          <li onClick={() => scrollToSection("reachUs")}>Reach Us</li>
        </ul>
      </div>
      {/* <div
        className={`${
          store.isShow ? "md:block hidden fixed w-screen h-screen" : ""
        }`}
      >
        <ul className="nav flex gap-12 [&>li]:cursor-pointer">
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("coffee")}>Coffee</li>
          <li onClick={() => scrollToSection("spaSalon")}>Spa Salon</li>
          <li onClick={() => scrollToSection("reachUs")}>Reach Us</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navigation;
