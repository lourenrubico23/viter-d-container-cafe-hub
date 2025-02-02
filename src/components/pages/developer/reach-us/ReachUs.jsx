import ContactUsForm from "@/components/partials/form/ContactUsForm";
import { setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { BsPhone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiPencil } from "react-icons/hi";
import { LuFacebook } from "react-icons/lu";
import ModalAddReachUs from "./ModalAddReachUs";
import useQueryData from "@/components/custom-hooks/useQueryData";
import { IoImageOutline } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { getGoogleMapEmbededUrl } from "@/components/helpers/functions-general";

const ReachUs = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");
  const [isReachUs, setIsReachUs] = React.useState(false);

  // const handleClick = () => {
  //   dispatch(setIsAdd(true));
  // };

  const {
    isFetchingReachUs,
    errorReachUs,
    data: reachUsData,
  } = useQueryData(
    "/v1/reachUs", // endpoint
    "get", // method
    "reachUs" // key
  );

  const {
    isFetching,
    error,
    data: servicesData,
  } = useQueryData(
    "/v1/services", // endpoint
    "get", // method
    "services" // key
  );

  const handleAddReachUs = () => {
    setIsReachUs(true);
    setItemEdit("reachUsUpdate");
  };

  return (
    <>
      <section id="reachUs">
        <div className="bg-light overflow-hidden">
          <div className="container flex flex-col lg:grid lg:grid-cols-[_1fr_1.5fr] relative gap-7 py-[80px] ">
            <div className="address flex flex-col gap-16 lg:my-32">
              <a
                className="absolute cursor-pointer tooltip-header z-[1] top-24"
                data-tooltip="Upload Contents"
                onClick={handleAddReachUs}
              >
                <HiPencil className=" bg-[#C7AC27] text-black rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
              </a>
              <h2 className="text-accent font-rubikBold text-[clamp(30px,4vw,36px)] ">
                {reachUsData?.data?.length > 0 &&
                reachUsData.data[0]?.reach_us_title
                  ? reachUsData?.data[0].reach_us_title
                  : " Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
              </h2>
              <ul className="font-montserrat text-[clamp(16px,4vw,24px)] [&>li]:flex [&>li]:items-center [&>li]:gap-[33px] flex flex-col gap-8 ">
                <li>
                  <div>
                    <BsPhone />
                  </div>
                  {servicesData?.data?.length > 0 &&
                  servicesData.data[0]?.services_contact
                    ? servicesData?.data[0].services_contact
                    : "+0000000"}
                </li>
                <li>
                  <div>
                    <GrLocation />
                  </div>
                  {reachUsData?.data?.length > 0 &&
                  reachUsData.data[0]?.reach_us_address
                    ? reachUsData?.data[0].reach_us_address
                    : " Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
                </li>
                <li>
                  <div>
                    <LuFacebook />
                  </div>
                  {reachUsData?.data?.length > 0 &&
                  reachUsData.data[0]?.reach_us_facebook
                    ? reachUsData?.data[0].reach_us_facebook
                    : " Lorem ipsum dolor sit"}
                </li>
                <li>
                  <div>
                    <FaInstagram />
                  </div>
                  {reachUsData?.data?.length > 0 &&
                  reachUsData.data[0]?.reach_us_instagram
                    ? reachUsData?.data[0].reach_us_instagram
                    : " Lorem ipsum dolor sit"}
                </li>
              </ul>
              <button
                className="btn text-light text-[16px] font-rubikRegular flex items-center gap-2 max-w-[155px] h-[54px] "
                // onClick={handleClick}
              >
                {reachUsData?.data?.length > 0 &&
                reachUsData.data[0]?.reach_us_button
                  ? reachUsData?.data[0].reach_us_button
                  : " Lorem ipsum dolor sit"}
              </button>
            </div>
            <div>
              <div className="bg-accent w-[60rem] h-[46rem] mt-24  hidden lg:block absolute">
                <div className="mapouter ml-12 -top-24 absolute ">
                  <div className="gmap_canvas">
                    {/* <iframe
                      className="gmap_iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.640442131787!2d121.2459161!3d14.0598172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6900286aaa39%3A0xb75fae24b925907a!2sD'Container%20Cafe%20Hub!5e0!3m2!1sen!2sph!4v1694518739393!5m2!1sen!2sph"
                    ></iframe> */}

                    {reachUsData?.data?.length > 0 &&
                    reachUsData.data[0]?.reach_us_map_link ? (
                      <iframe
                        className="gmap_iframe"
                        src={getGoogleMapEmbededUrl(
                          reachUsData?.data[0]?.reach_us_map_link
                        )}
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    ) : (
                      <div className="gmap_iframe w-[50rem] h-[40rem] my-[150px]">
                        <CiMap className="lg:w-full lg:h-full object-cover md:w-full mx-auto text-gray-500" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
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
            </div> */}
          </div>
        </div>
      </section>

      {store.isAdd && <ContactUsForm />}
      {isReachUs && (
        <ModalAddReachUs
          itemEdit={itemEdit}
          setIsReachUs={setIsReachUs}
          reachUsData={reachUsData}
        />
      )}
    </>
  );
};

export default ReachUs;
