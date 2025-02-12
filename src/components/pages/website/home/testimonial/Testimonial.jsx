import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "@/components/helpers/functions-general";
import LoadImages from "@/components/partials/LoadImages";
import React from "react";

const Testimonial = () => {
  const {
    isFetching,
    error,
    data: testimonialData,
  } = useQueryData(
    "/v1/testimonial", // endpoint
    "get", // method
    "testimonial" // key
  );

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
      {/* feedback */}
      <div
        className="feedback_wrapper py-12 md:py-32 md:pb-28 "
        id="testimonials"
      >
        <div className="container">
          <div className="feedback-title flex flex-col items-center pb-5 md:pb-20">
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
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start ">
                <LoadImages
                  url={`${googleHDViewLink}${testimonialA[0]?.id}`}
                  alt=""
                  className="object-contain object-top md:h-full md:w-full rounded-lg"
                />
              </div>

              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-montserrat font-bold md:pb-4 ">
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
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                <LoadImages
                  url={`${googleHDViewLink}${testimonialB[0]?.id}`}
                  alt=""
                  className="object-contain object-top md:h-full md:w-full rounded-lg"
                />
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
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                <LoadImages
                  url={`${googleHDViewLink}${testimonialC[0]?.id}`}
                  alt=""
                  className="object-contain object-top md:h-full md:w-full rounded-lg"
                />
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
    </>
  );
};

export default Testimonial;
