import ContactUsForm from "@/components/partials/form/ContactUsForm";
import { setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React, { useContext } from "react";

const ContactUs = () => {
  const { store, dispatch } = useContext(StoreContext);

  const handleClick = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <div className="h-[437px] bg-light">
        <div className="container flex flex-col gap-6 py-[100px] lg:py-[142px] text-center items-center">
          <p className="text-[clamp(20px,3vw,24px)] font-rubikRegular leading-8 max-w-[1007px]">
            If you’re craving a relaxing escape where you can savor every sip of
            your coffee in peace, look no further. Your perfect moment
            awaits—why wait to indulge?
          </p>
          <button
            onClick={handleClick}
            className="btn text-light text-[16px] font-rubikRegular flex items-center gap-2 w-[150px] h-[54px] "
          >
            Contact Us
          </button>
        </div>
      </div>

      {store.isAdd && <ContactUsForm />}
    </>
  );
};

export default ContactUs;
