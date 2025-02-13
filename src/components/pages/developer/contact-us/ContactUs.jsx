import { StoreContext } from "@/store/StoreContext";
import React, { useContext } from "react";
import ContactUsForm from "./ContactUsForm";
import { HiPencil } from "react-icons/hi";
import ModalAddContactUs from "./ModalAddContactUs";
import useQueryData from "@/components/custom-hooks/useQueryData";

const ContactUs = () => {
  const [itemEdit, setItemEdit] = React.useState("");
  const [isform, setIsForm] = React.useState(false);
  const [isContact, setIsContact] = React.useState(false);

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
    setIsForm(true);
  };

  const handleAddContact = () => {
    setIsContact(true);
    setItemEdit("contactUsUpdate");
  };

  return (
    <>
      <section id="contactUs" className="bg-light">
        <div className="h-[437px] bg-light">
          <a
            className="absolute cursor-pointer tooltip-header z-[1] right-20 mt-10"
            data-tooltip="Upload Contents"
            onClick={handleAddContact}
          >
            <HiPencil className=" bg-[#C7AC27] text-black rounded-full  w-[25px] h-[25px] p-[5px] border-[1px]" />
          </a>
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

      {isform && (
        <ContactUsForm
          setIsForm={setIsForm}
          setItemEdit={setItemEdit}
          itemEdit={itemEdit}
          contactUsData={contactUsData}
        />
      )}
      {isContact && (
        <ModalAddContactUs
          itemEdit={itemEdit}
          contactUsData={contactUsData}
          setIsContact={setIsContact}
        />
      )}
    </>
  );
};

export default ContactUs;
