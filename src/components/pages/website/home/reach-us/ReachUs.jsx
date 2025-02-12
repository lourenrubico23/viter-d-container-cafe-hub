import useQueryData from "@/components/custom-hooks/useQueryData";
import { getGoogleMapEmbededUrl } from "@/components/helpers/functions-general";
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

  const handleClick = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "reach-us" }));
  };
  return (
    <>
      <section id="reachUs">
        <div className="bg-light overflow-hidden">
          <div className="container flex flex-col lg:grid lg:grid-cols-[_1fr_1.5fr] relative gap-7 py-[80px] ">
            <div className="address flex flex-col gap-16 lg:my-32">
              <h2 className="text-accent font-rubikBold text-[clamp(30px,4vw,36px)] ">
                {reachUsData?.data?.length > 0 &&
                reachUsData.data[0]?.reach_us_title
                  ? reachUsData?.data[0].reach_us_title
                  : " Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
              </h2>
              <ul className="font-montserrat text-[clamp(16px,4vw,20px)] [&>li]:flex [&>li]:items-center [&>li]:gap-[33px] flex flex-col gap-8 ">
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
                onClick={handleClick}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {store.isAdd?.modal && store.isAdd?.modalCode === "reach-us" && (
        <ContactUsForm />
      )}
    </>
  );
};

export default ReachUs;
