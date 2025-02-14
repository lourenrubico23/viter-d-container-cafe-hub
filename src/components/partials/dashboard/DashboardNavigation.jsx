import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
  hexToRgb,
} from "@/components/helpers/functions-general";
import { setIsAccountUpdated, setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { Link } from "react-router-dom";
import ScreenSpinner from "../spinners/ScreenSpinner";
import ModalChangePassword from "@/components/pages/developer/account/modal/ModalChangePassword";
import UserTable from "@/components/pages/developer/user/UserTable";
import RoleTable from "@/components/pages/developer/role/RoleTable";
import { IoChevronDownSharp } from "react-icons/io5";
import ReceiverTable from "@/components/pages/developer/notification/receiver/ReceiverTable";
import LogTable from "@/components/pages/developer/notification/log/LogTable";
import User from "@/components/pages/developer/user/User";

const DashboardNavigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const ref = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("#header");
  const [isChangePassword, setIsChangePassword] = React.useState(false);

  const [isOpenUser, setIsOpenUser] = React.useState(false);
  const [isOpenUserList, setIsOpenUserList] = React.useState(false);
  const [isOpenRole, setIsOpenRole] = React.useState(false);
  const [isNotifOpen, setIsNotifOpen] = React.useState(false);
  const [isReceiver, setIsReceiver] = React.useState(false);
  const [isLog, setIsLog] = React.useState(false);

  const isRoleDeveloper = store.credentials.data.role_is_developer == 1;
  const userId = isRoleDeveloper
    ? store.credentials.data.developer_aid
    : store.credentials.data.user_aid;
  const email = isRoleDeveloper
    ? store.credentials.data.developer_email
    : store.credentials.data.user_email;
  const fullname = isRoleDeveloper
    ? `${store.credentials.data.developer_lname}, ${store.credentials.data.developer_fname}`
    : `${store.credentials.data.user_last_name}, ${store.credentials.data.user_first_name}`;

  const { user_first_name, user_last_name } = store.credentials.data;
  const initials = `${user_last_name[0]}${user_first_name[0]}`;

  const {
    isFetching,
    error,
    data: colorsData,
  } = useQueryData(
    `${devApiVersion}/colors`, // endpoint
    "get", // method
    "colors" // key
  );

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("dcontainercafetoken");
    // roleIsDeveloper
    //   ? window.location.replace(`${devNavUrl}/developer/login`)
    //   :
    setTimeout(() => {
      window.location.replace(`${devNavUrl}/`);
    }, 2000);
  };

  document
    .querySelector(":root")
    .style.setProperty(
      "--primary-color",
      hexToRgb(colorsData?.data[0]?.colors_primary || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--secondary-color",
      hexToRgb(colorsData?.data[0]?.colors_secondary || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--accent-color",
      hexToRgb(colorsData?.data[0]?.colors_accent || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--light-color",
      hexToRgb(colorsData?.data[0]?.colors_light || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--dark-color",
      hexToRgb(colorsData?.data[0]?.colors_dark || "#000000")
    );

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

  const handleUserList = () => {
    setIsOpenUserList(true);
  };

  const handleRole = () => {
    setIsOpenRole(true);
  };

  const handleReceiver = () => {
    setIsReceiver(true);
  };

  const handleLog = () => {
    setIsLog(true);
  };

  const handleNotifOpen = () => {
    setIsNotifOpen((prev) => !prev);
  };

  const handleUser = () => {
    setIsOpenUser((prev) => !prev);
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
      <div className="theNav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 pl-4 z-50  border-customGray flex flex-col justify-between">
        <div className="theLogo mt-2 mb-14">
          <img
            src={`${devBaseImgUrl}/d-container-logo.webp`}
            alt=""
            className="w-[55px]"
          />
        </div>
        <div className="flex flex-col justify-between h-full overflow-y-auto overflow-x-hidden">
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[15px] ">
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
                className={`flex justify-between items-center ${
                  isOpenUser
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }`}
                onClick={handleUser}
              >
                <div className="flex items-center justify-between w-full pr-1">
                  <a className="cursor-pointer">User</a>
                  <IoChevronDownSharp
                    className={`transition-transform duration-300 ${
                      isOpenUser ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </li>
              <ul
                className={`transition-all duration-300 overflow-hidden ${
                  isOpenUser ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                } submenu ml-5`}
              >
                <li
                  className={` flex justify-between items-center p-1 !mb-0.5
                ${
                  activeSection === "user"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
              `}
                  onClick={handleUserList}
                >
                  <a className="cursor-pointer">User List</a>
                </li>
                <li
                  className={` flex justify-between items-center p-1 !mb-0.5
                ${
                  activeSection === "role"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
              `}
                  onClick={handleRole}
                >
                  <a className="cursor-pointer">Role</a>
                </li>
              </ul>

              <li
                className={`flex justify-between items-center  ${
                  isNotifOpen
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }`}
                onClick={handleNotifOpen}
              >
                <div className="flex items-center justify-between w-full pr-1">
                  <a className="cursor-pointer">Notification</a>
                  <IoChevronDownSharp
                    className={`transition-transform duration-300 ${
                      isNotifOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </li>

              <ul
                className={`transition-all duration-300 overflow-hidden ${
                  isNotifOpen
                    ? "max-h-[200px] opacity-100"
                    : "max-h-0 opacity-0"
                } submenu ml-5`}
              >
                <li
                  className={` flex justify-between items-center p-1 !mb-0.5
                ${
                  activeSection === "receiver"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
              `}
                  onClick={handleReceiver}
                >
                  <a className="cursor-pointer">Receiver</a>
                </li>
                <li
                  className={` flex justify-between items-center p-1 !mb-0.5
                ${
                  activeSection === "log"
                    ? "text-black underline underline-offset-4"
                    : "text-black/60 hover:text-secondary"
                }
              `}
                  onClick={handleLog}
                >
                  <a className="cursor-pointer">Log</a>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
        <div>
          <div
            className={`py-[18px] relative ${isOpen && " border-black"}`}
            onClick={handleOpen}
            ref={ref}
          >
            {/* <span className="w-[40px] h-[40px]">
              <img src={`${devBaseImgUrl}/user.webp`} alt="" />
            </span> */}
            <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center text-white text-sm font-semibold">
              {initials}
            </div>
            {isOpen && (
              <div className="absolute top-8 ml-[50px] bg-dashSecondary shadow-lg flex flex-col gap-2 p-4 min-w-[180px] rounded-md">
                <p className="text-black font-rubikRegular text-sm font-semibold tracking-wide">
                  {fullname}
                </p>
                <a>
                  <span className="text-black text-xs">{email}</span>
                </a>
                <button
                  type="button"
                  className="text-black text-xs text-left hover:text-accent"
                  onClick={() => setIsChangePassword(true)}
                >
                  Change Password
                </button>
                <button
                  type="button"
                  className="text-black text-xs text-left hover:text-accent"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
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

      {isChangePassword && (
        <ModalChangePassword setIsChangeAccountData={setIsChangePassword} />
      )}
      {(isLoading || store.isAccountUpdated) && <ScreenSpinner />}

      {isOpenUserList && <User setIsOpenUserList={setIsOpenUserList} />}

      {isOpenRole && <RoleTable setIsOpenRole={setIsOpenRole} />}

      {isReceiver && <ReceiverTable setIsReceiver={setIsReceiver} />}

      {isLog && <LogTable setIsLog={setIsLog} />}
    </>
  );
};

export default DashboardNavigation;
