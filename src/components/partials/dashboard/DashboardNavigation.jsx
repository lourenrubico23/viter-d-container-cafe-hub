import React from "react";
import { Link } from "react-router-dom";

import { CgMenuGridO, CgUser } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";
import {
  devBaseImgUrl,
  devNavUrl,
} from "@/components/helpers/functions-general";

const DashboardNavigation = () => {
  const ref = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("#header");

  console.log(activeSection);
  // const sections = useRef([]);

  React.useEffect(() => {
    // section IDs to track
    const sectionIds = [
      "header",
      "about",
      "coffee",
      "spaSalon",
      "contactUs",
      "testimonial",
      "reachUs",
      "footer",
      "user",
      "role",
    ];

    // IntersectionObserver to track the active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of the section is in view
    );

    // Observe each section on the page
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
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
      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const clickOutsideRef = (e) => {
    if (!ref.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRef);
    return () => document.addEventListener("click", clickOutsideRef);
  }, []);

  return (
    <>
      <div className="theNav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 p-4 z-50  border-customGray">
        <div className="theLogo mb-[114px] mt-2 ">
          <img
            src={`${devBaseImgUrl}/logo-brown.png`}
            alt=""
            className="w-[55px]"
          />
        </div>
        <div className="flex flex-col justify-between h-[calc(100%_-_200px)]">
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[16px]">
              <li
                className={
                  activeSection === "header"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("header")}
              >
                <a className="cursor-pointer">Header</a>
              </li>
              <li
                className={
                  activeSection === "about"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("about")}
              >
                <a className="cursor-pointer">About</a>
              </li>
              <li
                className={
                  activeSection === "coffee"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("coffee")}
              >
                <a className="cursor-pointer">Coffee</a>
              </li>
              <li
                className={
                  activeSection === "spaSalon"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("spaSalon")}
              >
                <a className="cursor-pointer">Spa Salon</a>
              </li>
              <li
                className={
                  activeSection === "contactUs"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("contactUs")}
              >
                <a className="cursor-pointer">Contact Us</a>
              </li>
              <li
                className={
                  activeSection === "testimonial"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("testimonial")}
              >
                <a className="cursor-pointer">Testimonial</a>
              </li>
              <li
                className={
                  activeSection === "reachUs"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("reachUs")}
              >
                <a className="cursor-pointer">Reach Us</a>
              </li>
              <li
                className={
                  activeSection === "footer"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
                onClick={() => scrollToSection("footer")}
              >
                <a className="cursor-pointer">Footer</a>
              </li>
              <li
                className={` flex justify-between items-center p-1 !mb-0.5
                ${
                  activeSection === "user"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
              `}
                onClick={() => scrollToSection("user")}
              >
                <a className="cursor-pointer">User</a>
              </li>
              <li
                className={` flex justify-between items-center p-1 !mb-0.5
                ${
                  activeSection === "role"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
              `}
                onClick={() => scrollToSection("role")}
              >
                <a className="cursor-pointer">Role</a>
              </li>
            </ul>
          </nav>
          <div>
            <div
              className={`py-[51px] relative ${isOpen && "border-black"}`}
              onClick={handleOpen}
              ref={ref}
            >
              <span className="w-[40px] h-[40px]">
                <img src={`${devBaseImgUrl}/user.webp`} alt="" />
              </span>
              {isOpen && (
                <div className="absolute top-16 ml-[45px] bg-[#1E1E1E] shadow-md flex flex-col gap-2 p-3 min-w-[180px]">
                  <h6 className="text-white font-[inter-regular] text-[15px]">
                    Louren Rubico
                  </h6>
                  <a>
                    <span className="text-white text-sm">louren@gmail.com</span>
                  </a>
                  <Link to="/changePass">
                    <span className="text-white text-sm">Change Password</span>
                  </Link>
                  <div className="flex flex-row gap-4 items-center">
                    <Link>
                      <button className=" text-white text-sm">Users</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="border-t-[2px] border-dashAccent flex flex-col gap-2">
              <h5 className="mt-[10px] text-black text-sm">Powered by:</h5>
              <div className="w-[120px] h-[44px]">
                <img
                  src={`${devBaseImgUrl}/logo-fbs.png`}
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavigation;
