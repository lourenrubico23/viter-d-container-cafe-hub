import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";

const Services = () => {
  return (
    <div className="text-accent">
      <div className="discover_wrapper">
        <section id="coffee">
          <div className=" lg:flex lg:flex-row-reverse lg:relative md:w-[100%] ">
            <div className="container">
              <div className="lg:grid lg:grid-cols-2 ">
                <div></div>
                <div className="dicover flex flex-col gap-4 my-8 lg:my-20 max-w-[686px] md:ml-[74px] md:py-10 md:mb-8">
                  <h2 className="text-[clamp(36px,6vw,24px)] font-rubikBold text-center lg:text-left">
                    Our Coffee
                  </h2>
                  <p className=" py-2 md:py-10 font-rubikRegular md:leading-6 text-[clamp(12px,4vw,16px)] text-black ">
                    Our coffee is more than just a drink; it’s an experience.
                    Sourced from the finest beans, expertly roasted to
                    perfection, and brewed with care, every cup delivers rich
                    flavors and an irresistible aroma. Whether you’re
                    kick-starting your morning or enjoying a relaxing break, our
                    coffee offers the perfect balance of quality, warmth, and
                    satisfaction. From bold espressos to creamy lattes, every
                    sip is crafted to delight your senses and elevate your day.
                  </p>
                  <div className="font-rubikRegular">
                    <div className="discover-content lg:mt-2">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                          Boosts Energy and Focus:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                        <span className="text-accent hidden lg:inline-block font-bold ">
                          Boosts Energy and Focus:
                        </span>{" "}
                        <span></span>
                        Coffee provides a natural energy lift, helping you stay
                        alert and focused throughout your day.
                      </p>
                    </div>
                    <div className="discover-content">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                          Rich in Antioxidants:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:mb-10  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                        <span className="text-accent hidden lg:inline-block font-bold">
                          Rich in Antioxidants:
                        </span>{" "}
                        <span></span>
                        Packed with antioxidants, coffee can support your
                        overall health by combating harmful free radicals.
                      </p>
                    </div>
                    <div className="discover-content">
                      <div className="flex flex-row gap-2 md:items-center">
                        <FaAngleDoubleRight className="text-accent text-[clamp(1rem,6vw,2.5rem)]" />
                        <h3 className="text-accent text-[clamp(.5rem,4vw,16px)] lg:hidden">
                          Enhances Social Connections:
                        </h3>
                      </div>
                      <p className="ml-6 my-4 lg:-my-[37px] lg:ml-16 lg:pb-10  text-black text-[clamp(.5rem,4vw,14px)] md:leading-[25px]">
                        <span className="text-accent hidden lg:inline-block font-bold">
                          Enhances Social Connections:
                        </span>{" "}
                        <span></span>
                        Whether shared with friends or enjoyed during a quiet
                        moment, coffee fosters connection and relaxation in
                        everyday life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:absolute lg:left-0 lg:top-0 h-full lg:w-[50%] block overflow-hidden">
              <img
                src={`${devBaseImgUrl}/services-img-1.webp`}
                alt=""
                className="lg:w-full lg:h-full object-cover md:w-full"
              />
            </div>
          </div>
        </section>
      </div>

      <section id="spaSalon">
        <div className="discover_wrapper lg:flex lg:flex-row-reverse lg:relative md:w-[100%]">
          <div className="lg:absolute lg:right-0 lg:top-0 h-full lg:w-[50%] block ">
            <img
              src={`${devBaseImgUrl}/services-img-2.webp`}
              alt=""
              className="lg:w-full lg:h-full object-cover md:w-full"
            />
          </div>
          <div className="container">
            <div className="lg:grid lg:grid-cols-2 lg:mr-20 lg:pr-10 md:py-10 md:mb-8 ">
              <div className="dicover flex flex-col gap-8 py-10 ">
                <h2 className="text-[clamp(36px,6vw,1.5rem)] font-rubikBold text-center lg:text-left lg:flex lg:items-center lg:gap-3 lg:py-10">
                  Spa Salon
                </h2>
                <div className="flex flex-col gap-7">
                  <p className=" text-[16px] font-rubikRegular text-black">
                    Escape to our spa salon, where relaxation meets
                    rejuvenation. Immerse yourself in a tranquil atmosphere
                    designed to soothe your senses and refresh your spirit. From
                    luxurious massages and revitalizing facials to expertly
                    curated treatments, our skilled professionals are dedicated
                    to helping you look and feel your best. Whether you're
                    seeking a moment of calm or a complete transformation, our
                    spa salon is your sanctuary for wellness and beauty.
                  </p>
                  <p className=" text-[16px] font-rubikRegular text-black">
                    Step into our hair salon and discover the perfect blend of
                    style and expertise. Our talented stylists are passionate
                    about creating looks that complement your unique
                    personality, whether it’s a fresh cut, vibrant color, or a
                    complete makeover. Using top-quality products and the latest
                    techniques, we ensure your hair not only looks amazing but
                    feels healthy and radiant. From everyday chic to
                    show-stopping glamour, our salon is your destination for
                    confidence-boosting transformations.
                  </p>
                </div>
              </div>
              <div></div>
              <div className="border-t-[2px] border-gray-400 md:mb-8 mb-4">
                <h3 className="text-[clamp(.5rem,4vw,18px)] py-1 lg:mt-10 lg:py-3 font-montserrat font-bold text-black">
                  Our Direct Line:
                </h3>
                <h2 className="text-accent text-[clamp(1.2rem,4vw,48px)]">
                  +63 915 110 1112
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
