import React from "react";
import ModalWrapperCenter from "../modal/ModalWrapperCenter";

import { FaTimes } from "react-icons/fa";
import { StoreContext } from "@/store/StoreContext";
import ButtonSpinner from "../spinners/ButtonSpinner";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import * as Yup from "yup";
import useQueryData from "@/components/custom-hooks/useQueryData";

import { queryData } from "@/components/helpers/queryData";
import { devApiVersion, siteKey } from "@/components/helpers/functions-general";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/store/StoreAction";
import ModalSendForm from "./ModalSendForm";
import ModalSendingEmailStatus from "@/components/pages/developer/user/modal/ModalSendingEmailStatus";
import ModalSentEmailSummary from "@/components/pages/developer/user/modal/ModalSentEmailSummary";

const ContactUsForm = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("opacity-0");
  const [isSend, setIsSend] = React.useState(false);
  const [isSendingLoading, setIsSendingLoading] = React.useState(false);
  const [queryCount, setQueryCount] = React.useState(0);
  const [emailCount, setEmailCount] = React.useState(0);
  const [confirmSend, setConfirmSend] = React.useState(false);
  const [recipientList, setRecipientList] = React.useState([]);
  const [isSuccessSendingEmail, setIsSuccessSendingEmail] =
    React.useState(false);
  const [queryStatus, setQueryStatus] = React.useState(null);
  const [payloadData, setPayloadData] = React.useState(null); // Store form values
  const recaptchaRef = React.useRef();

  const {
    isFetching,
    error,
    data: contactUsData,
  } = useQueryData(
    "/v1/contactUs", // endpoint
    "get", // method
    "contactUs" // key
  );

  const {
    isFetchingReceiver,
    errorReceiver,
    data: receiverData,
  } = useQueryData(
    "/v1/receiver", // endpoint
    "get", // method
    "receiver" // key
  );

  const handleClose = () => {
    // set animation
    setAnimate("opacity-0");
    // clear the modal
    setTimeout(() => {
      // dispatch(setIsSearch(false));
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handleChange = (value) => {
    console.log(value);
    // setCaptcha(value);
  };

  const handleSend = (values) => {
    const captchaValue = recaptchaRef.current?.getValue();

    console.log("reCAPTCHA Value:", captchaValue);

    if (!captchaValue) {
      dispatch(setError(true));
      dispatch(
        setMessage(
          "Please verify that you are not a robot by completing the reCAPTCHA below."
        )
      );
      return;
    }

    // Reset reCAPTCHA after mutation
    recaptchaRef.current?.reset();

    // Pass data to the next modal, including captchaValue
    setPayloadData({ ...values, captchaValue });

    // Extract recipient emails from receiverData
    const recipientEmails =
      receiverData?.data.map((receiver) => receiver.email) || [];

    setEmailCount(recipientEmails.length);
    setIsSend(true);
    setRecipientList(recipientEmails);

    console.log("Recipient count:", recipientEmails.length);
    console.log("Payload Data:", { ...values, captchaValue });
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    client_name: "",
    client_email: "",
    client_phone: "",
    client_message: "",
  };

  const yupSchema = Yup.object({
    client_name: Yup.string().required("Required"),
    client_email: Yup.string().required("Required").email("Invalid email"),
    client_phone: Yup.string().required("Required"),
    client_message: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapperCenter
        className={`relative transition-all ease-in-out transform duration-200 md:h-[700px] md:w-[500px] h-[680px] w-[350px] bg-light ${animate} overflow-auto `}
        handleClose={handleClose}
        opacity="opacity-50"
      >
        <div
          className="absolute top-[6px] right-0 p-2 text-lg cursor-pointer z-10 "
          onClick={handleClose}
        >
          <FaTimes />
        </div>
        <div className="h-full overflow-y-auto pt-8 pb-4 px-5 bg-light ">
          <div className="">
            <h4 className="font-rubikBold text-[clamp(30px,4vw,36px)]">
              {contactUsData?.data?.length > 0 &&
              contactUsData.data[0]?.contact_us_form_title
                ? contactUsData?.data[0].contact_us_form_title
                : "Lorem Ipsum"}
            </h4>
          </div>

          <div className="theForm py-2 addShadow rounded-lg relative z-[1] w-full">
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={handleSend}
            >
              {({ resetForm, dirty }) => {
                return (
                  <Form>
                    <div className="modal__body">
                      <div className="input-wrapper">
                        <span>Full Name</span>
                        <InputText
                          type="text"
                          name="client_name"
                          disabled={isSendingLoading}
                        />
                      </div>
                      <div className="input-wrapper">
                        <span>Email Address</span>
                        <InputText
                          type="text"
                          name="client_email"
                          disabled={isSendingLoading}
                        />
                      </div>
                      <div className="input-wrapper">
                        <span>Contact No.</span>
                        <InputText
                          type="text"
                          name="client_phone"
                          disabled={isSendingLoading}
                        />
                      </div>

                      <div className="input-wrapper">
                        <span>Message</span>
                        <InputTextArea
                          type="text"
                          name="client_message"
                          className="h-[100px]"
                          disabled={isSendingLoading}
                        />
                      </div>
                      <div className="input-wrapper reCaptcha">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={siteKey}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className=" flex justify-end mt-6 gap-2">
                        <button
                          className="btn-modal-submit text-[16px] font-rubikRegular w-[172px] h-10 hover:text-white"
                          type="submit"
                          disabled={isSendingLoading || !dirty}
                        >
                          {isSendingLoading ? (
                            <ButtonSpinner />
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </div>

                    {isSend && (
                      <ModalSendForm
                        recipientList={recipientList}
                        payloadData={payloadData}
                        setIsSend={setIsSend}
                        setConfirmSend={setConfirmSend}
                        setQueryCount={setQueryCount}
                        setIsSendingLoading={setIsSendingLoading}
                        isSendingLoading={isSendingLoading}
                        setIsSuccessSendingEmail={setIsSuccessSendingEmail}
                        setQueryStatus={setQueryStatus}
                        resetForm={resetForm}
                        msg={`Are you sure you want to send this
                email?`}
                        mysqlEndpoint={`${devApiVersion}/sending-email`}
                        queryKey={`sending-email`}
                      />
                    )}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </ModalWrapperCenter>

      {confirmSend && (
        <ModalSendingEmailStatus
          recipientList={recipientList}
          queryCount={queryCount}
        />
      )}
      {isSuccessSendingEmail && (
        <ModalSentEmailSummary
          queryCount={queryCount}
          recipientList={recipientList}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryCount={setQueryCount}
          queryStatus={queryStatus}
          message={"The email has been sent successfully."}
        />
      )}
    </>
  );
};

export default ContactUsForm;
