import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "@/components/helpers/functions-general";
import { GrLocation } from "react-icons/gr";

import useQueryData from "@/components/custom-hooks/useQueryData";
import Navigation from "./navigation/Navigation";
import React from "react";
import { HiPencil } from "react-icons/hi";
import { FaRegImages } from "react-icons/fa";
import ModalAddBanner from "./ModalAddBanner";
import { IoImageOutline } from "react-icons/io5";
import LoadImages from "@/components/partials/LoadImages";

const Header = () => {
  const [itemEdit, setItemEdit] = React.useState("");
  const [isBanner, setIsBanner] = React.useState(false);

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

  const handleAddBannerContents = () => {
    setIsBanner(true);
    setItemEdit("bannerUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const bannerImage = getConvertStringToJSONparseData(
    headerData?.data?.[0]?.header_banner_img
  );

  return (
    <>
      <section
        id="header"
        className="banner h-[110vh] relative flex items-center place-content-center bg-dashAccent"
      >
        <div className="">
          <a
            className="absolute cursor-pointer tooltip-header z-[1]"
            data-tooltip="Upload Contents"
            onClick={handleAddBannerContents}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
          </a>
          {headerData?.data?.length > 0 &&
          headerData.data[0]?.header_banner_img ? (
            <div className="logo-img w-[55px] lg:w-[98px] lg:h-[90px]">
              <LoadImages
                url={`${googleHDViewLink}${bannerImage[0]?.id}`}
                className="absolute inset-0 w-full h-full object-cover "
              />
            </div>
          ) : (
            <div className="logo-img w-[55px] lg:w-full lg:h-[90px] place-content-center">
              <IoImageOutline className="text-[400px] mx-auto text-gray-500" />
            </div>
          )}

          <div className="container wrapper justify-center place-items-center py-10 ">
            <div className="text-center flex flex-col gap-14 justify-center items-center py-10 ">
              <h2 className="text-[clamp(25px,3vw,52px)] leading-[1.1]  text-light font-rubikBold text-center lg:max-w-[1064px]">
                {headerData?.data?.length > 0 &&
                headerData.data[0]?.header_banner_title
                  ? headerData?.data[0].header_banner_title
                  : "Title"}
              </h2>
              <div onClick={() => scrollToSection("reachUs")}>
                <a className="btn text-light  flex items-center gap-2 max-w-[218px] h-[54px] cursor-pointer">
                  {headerData?.data?.length > 0 &&
                  headerData.data[0]?.header_button_text
                    ? headerData?.data[0].header_button_text
                    : "Button Text"}
                  <GrLocation className="text-[22px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Navigation
          headerData={headerData}
          setItemEdit={setItemEdit}
          itemEdit={itemEdit}
        />
      </section>

      {isBanner && (
        <ModalAddBanner
          itemEdit={itemEdit}
          headerData={headerData}
          setIsBanner={setIsBanner}
          setItemEdit={setItemEdit}
        />
      )}
    </>
  );
};

export default Header;
