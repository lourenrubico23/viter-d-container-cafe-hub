import ContactUsForm from "@/components/partials/form/ContactUsForm";
import { setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";

const ReachUs = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClick = () => {
    dispatch(setIsAdd(true));
  };
  return (
    <>
      <section id="reachUs">
        <div className="bg-light overflow-hidden">
          <div className="container flex flex-col lg:grid lg:grid-cols-[_1fr_1.5fr] relative gap-7 py-[80px] ">
            <div className="address flex flex-col gap-16 lg:my-32">
              <h2 className="text-accent font-rubikBold text-[clamp(30px,4vw,36px)] ">
                D Container Cafe Hub Exquisite Salon Spa
              </h2>
              <ul className="font-montserrat text-[clamp(16px,4vw,24px)] [&>li]:flex [&>li]:items-center [&>li]:gap-[33px] flex flex-col gap-8 ">
                <li>
                  <div>
                    <BsPhone />
                  </div>
                  +63 915 110 1112
                </li>
                <li>
                  <div>
                    <GrLocation />
                  </div>
                  Blk 4 lot 2 Anne Martins Subdivision Brgy. San Miguel Alaminos
                  Laguna
                </li>
                <li>
                  <div>
                    <LuFacebook />
                  </div>
                  D Container Cafe Hub
                </li>
                <li>
                  <div>
                    <FaInstagram />
                  </div>
                  D Container Cafe Hub
                </li>
              </ul>
              <button
                className="btn text-light text-[16px] font-rubikRegular flex items-center gap-2 w-[155px] h-[54px] "
                onClick={handleClick}
              >
                Inquire Now
              </button>
            </div>
            <div>
              <div className="bg-accent w-[60rem] h-[46rem] mt-24  hidden lg:block absolute">
                <div className="mapouter ml-12 -top-24 absolute ">
                  <div className="gmap_canvas">
                    <iframe
                      className="gmap_iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.640442131787!2d121.2459161!3d14.0598172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6900286aaa39%3A0xb75fae24b925907a!2sD'Container%20Cafe%20Hub!5e0!3m2!1sen!2sph!4v1694518739393!5m2!1sen!2sph"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-accent py-4 block lg:hidden ">
                <div className="mapouter">
                  <div className="gmap_canvas place-items-center">
                    <iframe
                      className="gmap_iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.640442131787!2d121.2459161!3d14.0598172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6900286aaa39%3A0xb75fae24b925907a!2sD'Container%20Cafe%20Hub!5e0!3m2!1sen!2sph!4v1694518739393!5m2!1sen!2sph"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {store.isAdd && <ContactUsForm />}
    </>
  );
};

export default ReachUs;
