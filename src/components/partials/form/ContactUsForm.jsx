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
import { siteKey } from "@/components/helpers/functions-general";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/store/StoreAction";

const ContactUsForm = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("opacity-0");
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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/sending-email`, "post", values),
    onSuccess: (data) => {
      console.log("Mutation Success:", data);
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["sending-email"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Message Sent Success`));
        console.log(data);
      }
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

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
        className={`relative transition-all ease-in-out transform duration-200 md:h-[700px] md:w-[500px] h-[680px] w-[320px] bg-light ${animate} overflow-auto `}
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
          <div className="mt-1 mb-2">
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
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const captchaValue = recaptchaRef.current.getValue();

                console.log(captchaValue);
                if (captchaValue === "") {
                  dispatch(setError(true));
                  dispatch(
                    setMessage(
                      "Please verify that you are not a robot by completing the reCAPTCHA below."
                    )
                  );
                  return;
                }

                // mutate data
                mutation.mutate({ ...values, captchaValue });
                recaptchaRef.current?.reset();
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body">
                      <div className="input-wrapper">
                        <span>Full Name</span>
                        <InputText
                          type="text"
                          name="client_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <span>Email Address</span>
                        <InputText
                          type="text"
                          name="client_email"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <span>Contact No.</span>
                        <InputText
                          type="text"
                          name="client_phone"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <div className="input-wrapper">
                        <span>Message</span>
                        <InputTextArea
                          type="text"
                          name="client_message"
                          className="h-[181px]"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper reCaptcha">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={siteKey}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="modal__action flex justify-end mt-6 gap-2">
                        <button
                          className="btn text-light text-[16px] font-rubikRegular flex items-center gap-2 w-[172px] h-[54px] "
                          type="submit"
                          disabled={mutation.isPending || !props.dirty}
                        >
                          {mutation.isPending ? (
                            <div className="flex items-center gap-2">
                              <ButtonSpinner /> Send Message
                            </div>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </ModalWrapperCenter>
    </>
  );
};

export default ContactUsForm;
