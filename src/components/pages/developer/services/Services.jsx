import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "@/components/helpers/functions-general";
import React from "react";
import { FaAngleDoubleRight, FaRegImages } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoImageOutline } from "react-icons/io5";
import Slider from "react-slick";
import ModalAddCoffee from "./ModalAddCoffee";
import ModalAddCoffeeGallery from "./ModalAddCoffeeGallery";
import ModalAddCoffeeImage from "./ModalAddCoffeeImage";
import ModalAddSalon from "./ModalAddSalon";
import ModalAddSalonGallery from "./ModalAddSalonGallery";
import ModalAddSalonImage from "./ModalAddSalonImage";
import ModalAddCoffeeMenu from "./ModalAddCoffeeMenu";
import ModalAddSalonServices from "./ModalAddSalonServices";
import ModalAddCoffeeButton from "./ModalAddCoffeeButton";
import ModalAddSalonButton from "./ModalAddSalonButton";

const Services = () => {
  const [itemEdit, setItemEdit] = React.useState("");
  const [isCoffee, setIsCoffee] = React.useState(false);
  const [isSalon, setIsSalon] = React.useState(false);
  const [isCoffeeImg, setIsCoffeeImg] = React.useState(false);
  const [isSalonImg, setIsSalonImg] = React.useState(false);
  const [isCoffeeGallery, setIsCoffeeGallery] = React.useState(false);
  const [isSalonGallery, setIsSalonGallery] = React.useState(false);
  const [isCoffeeButton, setIsCoffeeButton] = React.useState(false);
  const [isSalonButton, setIsSalonButton] = React.useState(false);
  const [isCoffeeMenu, setIsCoffeeMenu] = React.useState(false);
  const [isSalonServices, setIsSalonServices] = React.useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "-90px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerPadding: "15px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 2, centerPadding: "10px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "5px" } },
    ],
  };

  const {
    isFetching,
    error,
    data: servicesData,
  } = useQueryData(
    "/v1/services", // endpoint
    "get", // method
    "services" // key
  );

  const handleAddCoffee = () => {
    setIsCoffee(true);
    setItemEdit("coffeeUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddSalon = () => {
    setIsSalon(true);
    setItemEdit("salonUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddCoffeeImg = () => {
    setIsCoffeeImg(true);
    setItemEdit("coffeeImgUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddSalonImg = () => {
    setIsSalonImg(true);
    setItemEdit("salonImgUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddCoffeeGallery = () => {
    setIsCoffeeGallery(true);
    setItemEdit("coffeeGalleryUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddSalonGallery = () => {
    setIsSalonGallery(true);
    setItemEdit("salonGalleryUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddCoffeeButton = () => {
    setIsCoffeeButton(true);
    setItemEdit("coffeeButtonUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddCoffeeMenu = () => {
    setIsCoffeeMenu(true);
    setItemEdit("coffeeMenuUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddSalonButton = () => {
    setIsSalonButton(true);
    setItemEdit("salonButtonUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  const handleAddSalonServices = () => {
    setIsSalonServices(true);
    setItemEdit("salonServicesUpdate");
    document.body.classList.toggle("overflow-hidden");
  };

  // Get images from API data or use placeholders
  const coffeeGallery = servicesData?.data[0]?.services_coffee_gallery
    ? servicesData.data[0].services_coffee_gallery
        .split(",")
        .map((img) => img.trim())
        .filter((img) => img !== "") // Remove empty strings
        .map((img) => `${devBaseImgUrl}/${img}`)
    : []; // Default to empty array if no images

  // Get images from API data or use placeholders
  const salonGallery = servicesData?.data[0]?.services_salon_gallery
    ? servicesData.data[0].services_salon_gallery
        .split(",")
        .map((img) => img.trim())
        .filter((img) => img !== "") // Remove empty strings
        .map((img) => `${devBaseImgUrl}/${img}`)
    : []; // Default to empty array if no images

  const coffeeImage = getConvertStringToJSONparseData(
    servicesData?.data?.[0]?.services_coffee_img
  );

  return (
    <>
      <div className="text-accent">
        <div className="discover_wrapper">
          <section id="coffee">
            <div className=" lg:flex lg:flex-row-reverse lg:relative md:w-[100%] ">
              <div className="container">
                <div className="lg:grid lg:grid-cols-2  h-[740px]">
                  <div></div>
                  <a
                    className="absolute cursor-pointer tooltip-header z-[1] left-0 m-2"
                    data-tooltip="Upload Image"
                    onClick={handleAddCoffeeImg}
                  >
                    <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                  </a>
                  <div className="dicover flex flex-col gap-2 my-8 lg:my-16 max-w-[686px] lg:ml-[74px] md:py-10 md:mb-8">
                    <h2 className="text-[clamp(36px,6vw,24px)] font-rubikBold text-center lg:text-left">
                      {servicesData?.data?.length > 0 &&
                      servicesData.data[0]?.services_coffee_title
                        ? servicesData?.data[0].services_coffee_title
                        : "Lorem ipsum dolor sit"}
                    </h2>
                    <a
                      className="absolute cursor-pointer tooltip-header z-[1] right-20"
                      data-tooltip="Upload Contents"
                      onClick={handleAddCoffee}
                    >
                      <HiPencil className=" bg-[#C7AC27] text-black rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
                    </a>
                    <p className=" py-2 md:py-10 font-rubikRegular md:leading-6 text-[clamp(12px,4vw,16px)] text-black ">
                      {servicesData?.data?.length > 0 &&
                      servicesData.data[0]?.services_coffee_description
                        ? servicesData?.data[0].services_coffee_description
                        : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                    </p>
                    <div className="font-rubikRegular">
                      <div className="discover-content lg:mt-2">
                        <div className="flex flex-row gap-2 md:items-center">
                          <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                          <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_product_a
                              ? servicesData?.data[0].services_product_a
                              : "Lorem ipsum dolor sit"}
                            :
                          </h3>
                        </div>
                        <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-6  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                          <span className="text-accent hidden lg:inline-block font-bold ">
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_product_a
                              ? servicesData?.data[0].services_product_a
                              : "Lorem ipsum dolor sit"}
                            :
                          </span>{" "}
                          <span></span>
                          {servicesData?.data?.length > 0 &&
                          servicesData.data[0]?.services_product_description_a
                            ? servicesData?.data[0]
                                .services_product_description_a
                            : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                        </p>
                      </div>
                      <div className="discover-content">
                        <div className="flex flex-row gap-2 md:items-center">
                          <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                          <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_product_b
                              ? servicesData?.data[0].services_product_b
                              : "Lorem ipsum dolor sit"}
                            :
                          </h3>
                        </div>
                        <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-6  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                          <span className="text-accent hidden lg:inline-block font-bold">
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_product_b
                              ? servicesData?.data[0].services_product_b
                              : "Lorem ipsum dolor sit"}
                            :
                          </span>{" "}
                          <span></span>
                          {servicesData?.data?.length > 0 &&
                          servicesData.data[0]?.services_product_description_b
                            ? servicesData?.data[0]
                                .services_product_description_b
                            : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                        </p>
                      </div>
                      <div className="discover-content">
                        <div className="flex flex-row gap-2 md:items-center">
                          <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                          <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_product_c
                              ? servicesData?.data[0].services_product_c
                              : "Lorem ipsum dolor sit"}
                            :
                          </h3>
                        </div>
                        <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:pb-10  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                          <span className="text-accent hidden lg:inline-block font-bold">
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_product_c
                              ? servicesData?.data[0].services_product_c
                              : "Lorem ipsum dolor sit"}
                            :
                          </span>{" "}
                          <span></span>
                          {servicesData?.data?.length > 0 &&
                          servicesData.data[0]?.services_product_description_c
                            ? servicesData?.data[0]
                                .services_product_description_c
                            : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                        </p>
                        <a
                          className="absolute cursor-pointer tooltip-header z-[1] "
                          data-tooltip="Upload Text"
                          onClick={handleAddCoffeeButton}
                        >
                          <HiPencil className=" bg-[#C7AC27] text-black rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
                        </a>
                        <div className="flex gap-8 mt-12">
                          <a
                            className="btn text-light text-[16px] font-rubikRegular flex items-center text-center max-w-[224px] h-[54px] "
                            href={
                              servicesData?.data?.length > 0 &&
                              servicesData.data[0]
                                ?.services_coffee_facebook_link
                                ? servicesData?.data[0]
                                    .services_coffee_facebook_link
                                : ""
                            }
                            target="_blank"
                          >
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_coffee_button_a
                              ? servicesData?.data[0].services_coffee_button_a
                              : "Text Here"}
                          </a>
                          <button
                            // onClick={handleClick}
                            className="btn-transparent font-rubikRegular flex items-center place-content-center md:min-w-[224px] max-w-[224px] h-[54px] "
                          >
                            {servicesData?.data?.length > 0 &&
                            servicesData.data[0]?.services_coffee_button_b
                              ? servicesData?.data[0].services_coffee_button_b
                              : "Text Here"}
                          </button>
                          <a
                            className="absolute cursor-pointer tooltip-header z-[1] right-24"
                            data-tooltip="Upload Menu"
                            onClick={handleAddCoffeeMenu}
                          >
                            <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:absolute lg:left-0 lg:top-0 h-full lg:w-[50%] block overflow-hidden">
                {servicesData?.data?.length > 0 &&
                servicesData.data[0]?.services_coffee_img ? (
                  <div className="lg:w-full lg:h-full object-cover md:w-full">
                    <img
                      src={`${googleHDViewLink}${coffeeImage[0]?.id}`}
                      alt="Coffee"
                      className="lg:w-full lg:h-full object-cover md:w-full"
                    />
                  </div>
                ) : (
                  <div className="lg:w-full lg:h-full object-cover md:w-full place-content-center">
                    <IoImageOutline className="lg:w-full lg:h-full object-cover md:w-full mx-auto text-gray-500" />
                  </div>
                )}
              </div>
            </div>
          </section>
          <a
            className="absolute cursor-pointer tooltip-header z-[1] left-0 m-2"
            data-tooltip="Upload Images"
            onClick={handleAddCoffeeGallery}
          >
            <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
          </a>

          <div className=" lg:right-0 lg:top-0 h-full my-8 lg:my-8 lg:mb-8 lg:w-full block overflow-hidden">
            <Slider {...settings}>
              {coffeeGallery.length > 0
                ? coffeeGallery.map((image, index) => (
                    <div key={index} className="w-48 h-48 md:w-80 md:h-64 px-2">
                      <img
                        src={image}
                        alt={`Service ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                : Array.from({ length: settings.slidesToShow || 1 }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className="w-48 h-48 md:w-80 md:h-64 px-2 flex items-center justify-center bg-gray-100"
                      >
                        <IoImageOutline className="w-16 h-16 text-gray-500" />
                      </div>
                    )
                  )}
            </Slider>
          </div>
        </div>

        <section id="spaSalon">
          <div className="discover_wrapper lg:flex lg:flex-row-reverse lg:relative md:w-[100%]">
            <div className="lg:absolute lg:right-0 lg:top-0 h-full lg:w-[50%] block ">
              <a
                className="absolute cursor-pointer tooltip-header z-[1] left-0 m-2"
                data-tooltip="Upload Image"
                onClick={handleAddSalonImg}
              >
                <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
              </a>
              {servicesData?.data?.length > 0 &&
              servicesData.data[0]?.services_salon_img ? (
                <div className="lg:w-full lg:h-full object-cover md:w-full">
                  <img
                    src={`${devBaseImgUrl}/${servicesData.data[0].services_salon_img}`}
                    alt=""
                    className="lg:w-full lg:h-full object-cover md:w-full"
                  />
                </div>
              ) : (
                <div className="lg:w-full lg:h-full object-cover md:w-full place-content-center">
                  <IoImageOutline className="lg:w-full lg:h-full object-cover md:w-full mx-auto text-gray-500" />
                </div>
              )}
            </div>
            <div className="container">
              <div className="lg:grid lg:grid-cols-2 lg:mr-20 lg:pr-10 md:py-10 md:mb-8  h-[740px]">
                <div className="dicover flex flex-col gap-8 py-2 ">
                  <h2 className="text-[clamp(36px,6vw,1.5rem)] font-rubikBold text-center lg:text-left lg:flex lg:items-center lg:gap-3 lg:py-10">
                    {servicesData?.data?.length > 0 &&
                    servicesData.data[0]?.services_salon_title
                      ? servicesData?.data[0].services_salon_title
                      : "Lorem ipsum dolor sit"}
                  </h2>
                  <a
                    className="absolute cursor-pointer tooltip-header z-[1] right-[60%] top-[120px] "
                    data-tooltip="Upload Contents"
                    onClick={handleAddSalon}
                  >
                    <HiPencil className=" bg-[#C7AC27] text-black rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
                  </a>
                  <div className="flex flex-col gap-7">
                    <p className=" text-[16px] font-rubikRegular text-black">
                      {servicesData?.data?.length > 0 &&
                      servicesData.data[0]?.services_salon_description_a
                        ? servicesData?.data[0].services_salon_description_a
                        : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                    </p>
                    <p className=" text-[16px] font-rubikRegular text-black">
                      {servicesData?.data?.length > 0 &&
                      servicesData.data[0]?.services_salon_description_b
                        ? servicesData?.data[0].services_salon_description_b
                        : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                    </p>
                  </div>
                </div>
                <div></div>
                <div className="border-t-[2px] border-gray-400 md:mb-8 mb-4">
                  <h3 className="text-[clamp(.5rem,4vw,18px)] py-1 lg:mt-10 lg:py-3 font-montserrat font-bold text-black">
                    Our Direct Line:
                  </h3>
                  <h2 className="text-accent text-[clamp(1.2rem,4vw,48px)]">
                    {servicesData?.data?.length > 0 &&
                    servicesData.data[0]?.services_contact
                      ? servicesData?.data[0].services_contact
                      : "+0000000"}
                  </h2>
                  <a
                    className="absolute cursor-pointer tooltip-header z-[1] mt-2 "
                    data-tooltip="Upload Text"
                    onClick={handleAddSalonButton}
                  >
                    <HiPencil className=" bg-[#C7AC27] text-black rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
                  </a>
                  <div className="flex gap-8 mt-12">
                    <a
                      className="btn text-light text-[16px] font-rubikRegular flex items-center text-center max-w-[224px] h-[54px] "
                      href={
                        servicesData?.data?.length > 0 &&
                        servicesData.data[0]?.services_salon_facebook_link
                          ? servicesData?.data[0].services_salon_facebook_link
                          : ""
                      }
                      target="_blank"
                    >
                      {servicesData?.data?.length > 0 &&
                      servicesData.data[0]?.services_salon_button_a
                        ? servicesData?.data[0].services_salon_button_a
                        : "Text Here"}
                    </a>
                    <button
                      // onClick={handleClick}
                      className="btn-transparent font-rubikRegular flex items-center place-content-center md:min-w-[224px] max-w-[224px] h-[54px] "
                    >
                      {servicesData?.data?.length > 0 &&
                      servicesData.data[0]?.services_salon_button_b
                        ? servicesData?.data[0].services_salon_button_b
                        : "Text Here"}
                    </button>
                    <a
                      className="absolute cursor-pointer tooltip-header z-[1] left-[510px]"
                      data-tooltip="Upload Services"
                      onClick={handleAddSalonServices}
                    >
                      <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="absolute cursor-pointer tooltip-header z-[1] left-0 m-2"
            data-tooltip="Upload Images"
            onClick={handleAddSalonGallery}
          >
            <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
          </a>
          <div className=" lg:right-0 lg:top-0 h-full my-8 lg:my-8 lg:mb-8 lg:w-full block overflow-hidden">
            <Slider {...settings}>
              {salonGallery.length > 0
                ? salonGallery.map((image, index) => (
                    <div key={index} className="w-48 h-48 md:w-80 md:h-64 px-2">
                      <img
                        src={image}
                        alt={`Service ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                : Array.from({ length: settings.slidesToShow || 1 }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className="w-48 h-48 md:w-80 md:h-64 px-2 flex items-center justify-center bg-gray-100"
                      >
                        <IoImageOutline className="w-16 h-16 text-gray-500" />
                      </div>
                    )
                  )}
            </Slider>
          </div>
        </section>
      </div>

      {isCoffee && (
        <ModalAddCoffee
          itemEdit={itemEdit}
          setIsCoffee={setIsCoffee}
          servicesData={servicesData}
        />
      )}

      {isSalon && (
        <ModalAddSalon
          itemEdit={itemEdit}
          setIsSalon={setIsSalon}
          servicesData={servicesData}
        />
      )}

      {isCoffeeImg && (
        <ModalAddCoffeeImage
          itemEdit={itemEdit}
          setIsCoffeeImg={setIsCoffeeImg}
          servicesData={servicesData}
        />
      )}

      {isSalonImg && (
        <ModalAddSalonImage
          itemEdit={itemEdit}
          setIsSalonImg={setIsSalonImg}
          servicesData={servicesData}
        />
      )}

      {isCoffeeGallery && (
        <ModalAddCoffeeGallery
          itemEdit={itemEdit}
          setIsCoffeeGallery={setIsCoffeeGallery}
          servicesData={servicesData}
        />
      )}

      {isSalonGallery && (
        <ModalAddSalonGallery
          itemEdit={itemEdit}
          setIsSalonGallery={setIsSalonGallery}
          servicesData={servicesData}
        />
      )}

      {isCoffeeMenu && (
        <ModalAddCoffeeMenu
          itemEdit={itemEdit}
          setIsCoffeeMenu={setIsCoffeeMenu}
          servicesData={servicesData}
        />
      )}

      {isSalonServices && (
        <ModalAddSalonServices
          itemEdit={itemEdit}
          setIsSalonServices={setIsSalonServices}
          servicesData={servicesData}
        />
      )}

      {isCoffeeButton && (
        <ModalAddCoffeeButton
          itemEdit={itemEdit}
          setIsCoffeeButton={setIsCoffeeButton}
          servicesData={servicesData}
        />
      )}

      {isSalonButton && (
        <ModalAddSalonButton
          itemEdit={itemEdit}
          setIsSalonButton={setIsSalonButton}
          servicesData={servicesData}
        />
      )}
    </>
  );
};

export default Services;
