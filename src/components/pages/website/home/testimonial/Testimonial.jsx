import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const Testimonial = () => {
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
              You're in good Shop
            </h2>
            <h3 className="text-center block md:hidden">
              A Fun and Healthy Way to Connect with Your Community and the
              Environment
            </h3>
          </div>
          <div className="cards_wrapper flex flex-col md:flex md:flex-row md:flex-wrap md:gap-4 lg:flex lg:flex-row lg:flex-nowrap lg:pt-4 lg:gap-[62px]">
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start ">
                <img
                  src={`${devBaseImgUrl}/feedback1.webp`}
                  alt=""
                  className="object-contain object-top md:h-full md:w-full rounded-lg"
                />
              </div>

              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-montserrat font-bold md:pb-4">
                  Jason Ramello
                </h3>
                <p className="md:font-bold md:min-h-[160px] font-montserrat ">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                <img
                  src={`${devBaseImgUrl}/feedback2.webp`}
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full rounded-lg"
                />
              </div>
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-montserrat font-bold md:pb-4">
                  Annalyn Jovellano
                </h3>
                <p className="md:font-bold md:min-h-[160px] font-montserrat ">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 py-5 md:w-[40%] lg:flex lg:flex-row md:gap-5">
              <div className="w-[6rem] lg:w-[30%] lg:place-self-start">
                <img
                  src={`${devBaseImgUrl}/feedback3.webp`}
                  alt=""
                  className="object-contain object-top lg:h-full lg:w-full rounded-lg"
                />
              </div>
              <div className="content flex flex-col items-center gap-2 lg:items-start lg:w-[90%] place-self-start">
                <h3 className="text-[clamp(.6rem,4vw,16px)] font-montserrat font-bold md:pb-4">
                  Mark Anthony Bilog
                </h3>
                <p className="md:font-bold md:min-h-[160px] font-montserrat ">
                  Lorem ipsum dolor sit amet consectetur. Neque risus augue eget
                  vel pellentesque amet diam amet ultricies. Sapien suspendisse
                  sollicitudin dignissim cursus. Ut ac morbi pretium eget porta
                  magna arcu sit nam. Quis arcu vitae id mi.
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
