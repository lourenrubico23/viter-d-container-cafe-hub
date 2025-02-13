import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "@/components/helpers/functions-general";
import React from "react";
import { FaRegImages } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import ModalAddTestimonialTitle from "./ModalAddTestimonialTitle";
import useQueryData from "@/components/custom-hooks/useQueryData";
import ModalAddTestimonialA from "./ModalAddTestimonialA";
import ModalAddTestimonialB from "./ModalAddTestimonialB";
import ModalAddTestimonialC from "./ModalAddTestimonialC";
import { IoImageOutline } from "react-icons/io5";
import LoadImages from "@/components/partials/LoadImages";

const Testimonial = () => {
  const [itemEdit, setItemEdit] = React.useState("");
  const [isTitle, setIsTitle] = React.useState(false);
  const [isTestimonialA, setIsTestimonialA] = React.useState(false);
  const [isTestimonialB, setIsTestimonialB] = React.useState(false);
  const [isTestimonialC, setIsTestimonialC] = React.useState(false);

  const {
    isFetching,
    error,
    data: testimonialData,
  } = useQueryData(
    "/v1/testimonial", // endpoint
    "get", // method
    "testimonials" // key
  );

  const handleAddTitle = () => {
    setIsTitle(true);
    setItemEdit("testimonialTitleUpdate");
  };

  const handleAddTestimonialA = () => {
    setIsTestimonialA(true);
    setItemEdit("testimonialAUpdate");
  };

  const handleAddTestimonialB = () => {
    setIsTestimonialB(true);
    setItemEdit("testimonialBUpdate");
  };

  const handleAddTestimonialC = () => {
    setIsTestimonialC(true);
    setItemEdit("testimonialCUpdate");
  };

  const testimonialA = getConvertStringToJSONparseData(
    testimonialData?.data?.[0]?.testimonial_client_img_a
  );

  const testimonialB = getConvertStringToJSONparseData(
    testimonialData?.data?.[0]?.testimonial_client_img_b
  );

  const testimonialC = getConvertStringToJSONparseData(
    testimonialData?.data?.[0]?.testimonial_client_img_c
  );

  return (
    <>
      <section id="testimonial" className="bg-white">
        <div
          className="feedback_wrapper py-12 md:py-32 md:pb-28 "
          id="testimonials"
        >
          <div className="container">
            <div className="feedback-title flex flex-col items-center pb-5 md:pb-20">
              <a
                className="absolute cursor-pointer tooltip-header z-[1] right-[200px]"
                data-tooltip="Upload Text"
                onClick={handleAddTitle}
              >
                <HiPencil className=" bg-[#C7AC27] text-black rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
              </a>
              <h2 className="text-[clamp(1rem,5vw,48px)] font-montserrat text-center leading-tight">
                {testimonialData?.data?.length > 0 &&
                testimonialData.data[0]?.testimonial_title
                  ? testimonialData?.data[0].testimonial_title
                  : "Lorem ipsum dolor sit"}
              </h2>
              <h3 className="text-center block md:hidden">
                {testimonialData?.data?.length > 0 &&
                testimonialData.data[0]?.testimonial_subtitle
                  ? testimonialData?.data[0].testimonial_subtitle
                  : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa."}
              </h3>
            </div>
            <div className="cards_wrapper flex flex-col md:flex md:flex-row md:flex-wrap md:gap-4 lg:flex lg:flex-row lg:flex-nowrap lg:pt-4 lg:gap-[62px]">
              <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                <a
                  className="absolute cursor-pointer tooltip-header z-[1] right-0 top-0 m-2"
                  data-tooltip="Upload Content"
                  onClick={handleAddTestimonialA}
                >
                  <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                </a>
                <div className="w-[6rem] lg:w-[30%] lg:place-self-start ">
                  {testimonialData?.data?.length > 0 &&
                  testimonialData.data[0]?.testimonial_client_img_a ? (
                    <div className="object-contain object-top md:h-full md:w-full rounded-lg">
                      <LoadImages
                        url={`${googleHDViewLink}${testimonialA[0]?.id}`}
                        alt=""
                        className="object-contain object-top md:h-full md:w-full rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="object-contain object-top md:h-full md:w-full rounded-lg place-content-center">
                      <IoImageOutline className="object-contain object-top md:h-full md:w-full rounded-lg mx-auto text-gray-500" />
                    </div>
                  )}
                  {/* <img
                  src={`${devBaseImgUrl}/feedback1.webp`}
                  alt=""
                  className="object-contain object-top md:h-full md:w-full rounded-lg"
                /> */}
                </div>

                <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                  <h3 className="text-[clamp(.6rem,4vw,16px)] font-montserrat font-bold md:pb-4">
                    {testimonialData?.data?.length > 0 &&
                    testimonialData.data[0]?.testimonial_client_name_a
                      ? testimonialData?.data[0].testimonial_client_name_a
                      : "Lorem ipsum dolor sit"}
                  </h3>
                  <p className=" md:min-h-[160px] font-montserrat ">
                    {testimonialData?.data?.length > 0 &&
                    testimonialData.data[0]?.testimonial_client_message_a
                      ? testimonialData?.data[0].testimonial_client_message_a
                      : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                <a
                  className="absolute cursor-pointer tooltip-header z-[1] right-0 top-0 m-2"
                  data-tooltip="Upload Content"
                  onClick={handleAddTestimonialB}
                >
                  <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                </a>
                <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                  {testimonialData?.data?.length > 0 &&
                  testimonialData.data[0]?.testimonial_client_img_b ? (
                    <div className="object-contain object-top md:h-full md:w-full rounded-lg">
                      <LoadImages
                        url={`${googleHDViewLink}${testimonialB[0]?.id}`}
                        alt=""
                        className="object-contain object-top md:h-full md:w-full rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="object-contain object-top md:h-full md:w-full rounded-lg place-content-center">
                      <IoImageOutline className="object-contain object-top md:h-full md:w-full rounded-lg mx-auto text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                  <h3 className="text-[clamp(.6rem,4vw,16px)] font-montserrat font-bold md:pb-4">
                    {testimonialData?.data?.length > 0 &&
                    testimonialData.data[0]?.testimonial_client_name_b
                      ? testimonialData?.data[0].testimonial_client_name_b
                      : "Lorem ipsum dolor sit"}
                  </h3>
                  <p className=" md:min-h-[160px] font-montserrat ">
                    {testimonialData?.data?.length > 0 &&
                    testimonialData.data[0]?.testimonial_client_message_b
                      ? testimonialData?.data[0].testimonial_client_message_b
                      : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5 relative">
                <a
                  className="absolute cursor-pointer tooltip-header z-[1] right-0 top-0 m-2"
                  data-tooltip="Upload Content"
                  onClick={handleAddTestimonialC}
                >
                  <FaRegImages className=" bg-[#C7AC27] text-black rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
                </a>
                <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                  {testimonialData?.data?.length > 0 &&
                  testimonialData.data[0]?.testimonial_client_img_c ? (
                    <div className="object-contain object-top md:h-full md:w-full rounded-lg">
                      <LoadImages
                        url={`${googleHDViewLink}${testimonialC[0]?.id}`}
                        alt=""
                        className="object-contain object-top md:h-full md:w-full rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="object-contain object-top md:h-full md:w-full rounded-lg place-content-center">
                      <IoImageOutline className="object-contain object-top md:h-full md:w-full rounded-lg mx-auto text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                  <h3 className="text-[clamp(.6rem,4vw,16px)] font-montserrat font-bold md:pb-4">
                    {testimonialData?.data?.length > 0 &&
                    testimonialData.data[0]?.testimonial_client_name_c
                      ? testimonialData?.data[0].testimonial_client_name_c
                      : "Lorem ipsum dolor sit"}
                  </h3>
                  <p className=" md:min-h-[160px] font-montserrat ">
                    {testimonialData?.data?.length > 0 &&
                    testimonialData.data[0]?.testimonial_client_message_c
                      ? testimonialData?.data[0].testimonial_client_message_c
                      : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isTitle && (
        <ModalAddTestimonialTitle
          setIsTitle={setIsTitle}
          itemEdit={itemEdit}
          testimonialData={testimonialData}
        />
      )}

      {isTestimonialA && (
        <ModalAddTestimonialA
          setIsTestimonialA={setIsTestimonialA}
          itemEdit={itemEdit}
          testimonialData={testimonialData}
        />
      )}

      {isTestimonialB && (
        <ModalAddTestimonialB
          setIsTestimonialB={setIsTestimonialB}
          itemEdit={itemEdit}
          testimonialData={testimonialData}
        />
      )}

      {isTestimonialC && (
        <ModalAddTestimonialC
          setIsTestimonialC={setIsTestimonialC}
          itemEdit={itemEdit}
          testimonialData={testimonialData}
        />
      )}
    </>
  );
};

export default Testimonial;
