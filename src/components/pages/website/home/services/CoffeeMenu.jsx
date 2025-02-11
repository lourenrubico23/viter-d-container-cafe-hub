import ModalWrapperCenter from "@/components/partials/modal/ModalWrapperCenter";
import React from "react";
import { IoImageOutline } from "react-icons/io5";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "@/components/helpers/functions-general";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background: "#BC7B75",
        position: "absolute",
        color: "white",
        top: "50%",
        right: "-6%",
        fontSize: "3rem",
        cursor: "pointer",
        borderRadius: "10%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-3xl" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        background: "#BC7B75",
        color: "white",
        top: "50%",
        left: "-6%",
        fontSize: "3rem",
        zIndex: "1",
        cursor: "pointer",
        borderRadius: "10%",
        width: "48px",
        height: "48px",
        display: "grid",
        placeItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-3xl" />
    </div>
  );
}

const CoffeeMenu = ({ setIsCoffeeMenu, servicesData }) => {
  const settings = {
    dotsClass: "slickNav slick-dots",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: "-90px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerPadding: "15px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 2, centerPadding: "10px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "5px" } },
    ],
  };

  const handleClose = () => {
    setIsCoffeeMenu(false);
  };

  // // Get images from API data or use placeholders
  // const coffeeMenuImg = servicesData?.data[0]?.services_coffee_menu_images
  //   ? servicesData.data[0].services_coffee_menu_images
  //       .split(",")
  //       .map((img) => img.trim())
  //       .filter((img) => img !== "") // Remove empty strings
  //       .map((img) => `${devBaseImgUrl}/${img}`)
  //   : []; // Default to empty array if no images

  const coffeeMenu = getConvertStringToJSONparseData(
    servicesData?.data?.[0]?.services_coffee_menu_images
  );

  return (
    <>
      <ModalWrapperCenter
        className="max-w-[600px] h-[760px]"
        handleClose={handleClose}
      >
        {servicesData?.data?.length > 0 && coffeeMenu?.length > 0 ? (
          <Slider {...settings}>
            {coffeeMenu.map((image, index) =>
              image ? ( // Ensure image is valid before rendering
                <div
                  key={index}
                  className="w-48 h-48 md:w-[600px] md:h-[760px] "
                >
                  <img
                    src={`${googleHDViewLink}${image?.id}`}
                    alt={`Menu ${index + 1}`}
                    className="w-[600px] h-[760px] object-fill p-5"
                  />
                </div>
              ) : (
                ""
              )
            )}
          </Slider>
        ) : (
          <div className="flex place-content-center my-[50%] md:w-[600px]">
            <span>No Image Available</span>
          </div>
        )}
      </ModalWrapperCenter>
    </>
  );
};

export default CoffeeMenu;
