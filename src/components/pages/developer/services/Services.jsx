import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import {
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaRegImages,
} from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import ModalAddCoffee from "./ModalAddCoffee";
import ModalAddCoffeeImage from "./ModalAddCoffeeImage";
import ModalAddSalon from "./ModalAddSalon";
import ModalAddSalonImage from "./ModalAddSalonImage";
import { IoImageOutline } from "react-icons/io5";

const Services = () => {
  const [itemEdit, setItemEdit] = React.useState("");
  const [isCoffee, setIsCoffee] = React.useState(false);
  const [isSalon, setIsSalon] = React.useState(false);
  const [isCoffeeImg, setIsCoffeeImg] = React.useState(false);
  const [isSalonImg, setIsSalonImg] = React.useState(false);

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

  return (
    <>
      <div className="text-accent">
        <div className="discover_wrapper">
          <section id="coffee">
            <div className=" lg:flex lg:flex-row-reverse lg:relative md:w-[100%] ">
              <div className="container">
                <div className="lg:grid lg:grid-cols-2 ">
                  <div></div>
                  <a
                    className="absolute cursor-pointer tooltip-header z-[1] left-0 m-2"
                    data-tooltip="Upload Image"
                    onClick={handleAddCoffeeImg}
                  >
                    <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                  </a>
                  <div className="dicover flex flex-col gap-4 my-8 lg:my-20 max-w-[686px] lg:ml-[74px] md:py-10 md:mb-8">
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
                        <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
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
                        <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
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
                      src={`${devBaseImgUrl}/${servicesData.data[0].services_coffee_img}`}
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
            </div>
          </section>
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
              <div className="lg:grid lg:grid-cols-2 lg:mr-20 lg:pr-10 md:py-10 md:mb-8 ">
                <div className="dicover flex flex-col gap-8 py-10 ">
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
                </div>
              </div>
            </div>
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
    </>
  );
};

export default Services;
