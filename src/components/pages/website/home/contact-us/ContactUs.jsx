import useQueryData from "@/components/custom-hooks/useQueryData";
import ContactUsForm from "@/components/partials/form/ContactUsForm";
import ModalError from "@/components/partials/modal/ModalError";
import ModalSuccess from "@/components/partials/modal/ModalSuccess";
import { setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React, { useContext } from "react";

const ContactUs = () => {
  const { store, dispatch } = useContext(StoreContext);

  const {
    isFetching,
    error,
    data: contactUsData,
  } = useQueryData(
    "/v1/contactUs", // endpoint
    "get", // method
    "contactUs" // key
  );

  const handleClick = () => {
    dispatch(setIsAdd({ modal: true, modalCode: "contact-us" }));
  };

  return (
    <>
      <section id="contactUs">
        <div className="h-[437px] bg-light">
          <div className="container flex flex-col gap-6 py-[100px] lg:py-[142px] text-center items-center">
            <p className="text-[clamp(20px,3vw,24px)] font-rubikRegular leading-8 max-w-[1007px]">
              {contactUsData?.data?.length > 0 &&
              contactUsData.data[0]?.contact_us_description
                ? contactUsData?.data[0].contact_us_description
                : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
            </p>
            <button
              onClick={handleClick}
              className="btn text-light text-[16px] font-rubikRegular flex items-center gap-2 max-w-[150px] h-[54px] "
            >
              {contactUsData?.data?.length > 0 &&
              contactUsData.data[0]?.contact_us_button
                ? contactUsData?.data[0].contact_us_button
                : "Lorem "}
            </button>
          </div>
        </div>
      </section>

      {store.isAdd?.modal && store.isAdd?.modalCode === "contact-us" && (
        <ContactUsForm />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ContactUs;
