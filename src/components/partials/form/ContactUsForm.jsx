import React from "react";
import ModalWrapperCenter from "../modal/ModalWrapperCenter";
import { setIsAdd } from "@/store/StoreAction";
import { FaTimes } from "react-icons/fa";
import { StoreContext } from "@/store/StoreContext";
import ButtonSpinner from "../spinners/ButtonSpinner";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import * as Yup from "yup";

const ContactUsForm = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("opacity-0");

  const handleClose = () => {
    // set animation
    setAnimate("opacity-0");
    // clear the modal
    setTimeout(() => {
      // dispatch(setIsSearch(false));
      dispatch(setIsAdd(false));
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  //   const initVal = {
  //     notification_aid: itemEdit ? itemEdit.notification_aid : "",
  //     notification_name: itemEdit ? itemEdit.notification_name : "",
  //     notification_email: itemEdit ? itemEdit.notification_email : "",
  //     notification_phone_no: itemEdit ? itemEdit.notification_phone_no : "",
  //     notification_purpose: itemEdit ? itemEdit.notification_purpose : "",
  //     notification_name_old: itemEdit ? itemEdit.notification_name : "",
  //   };

  //   const yupSchema = Yup.object({
  //     notification_email: Yup.string()
  //       .required("Required")
  //       .email("Invalid email"),
  //     notification_name: Yup.string().required("Required"),
  //     notification_purpose: Yup.string().required("Required"),
  //   });

  return (
    <>
      <ModalWrapperCenter
        className={`relative transition-all ease-in-out transform duration-200 lg:h-[700px] lg:w-[500px] h-screen  w-[320px] bg-light ${animate}`}
        handleClose={handleClose}
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
              Get In Touch
            </h4>
          </div>

          <div className="theForm py-2 addShadow rounded-lg relative z-[1] w-full">
            <Formik
            // initialValues={initVal}
            // validationSchema={yupSchema}
            // onSubmit={async (values, { setSubmitting, resetForm }) => {
            //   // mutate data
            //   const data = {
            //     ...values,
            //   };
            //   mutation.mutate(data);
            // }}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="modal__body">
                      <div className="input-wrapper">
                        <span>Full Name</span>
                        <input
                          type="text"
                          name="client_name"
                          // disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <span>Email Address</span>
                        <input
                          type="text"
                          name="client_name"
                          // disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <span>Contact No.</span>
                        <input
                          type="text"
                          name="client_name"
                          // disabled={mutation.isPending}
                        />
                      </div>

                      <div className="input-wrapper">
                        <span>Message</span>
                        <textarea
                          type="text"
                          name="client_name"
                          className="h-[181px]"
                          // disabled={mutation.isPending}
                        />
                      </div>

                      <div className="modal__action flex justify-end mt-6 gap-2">
                        <button
                          className="btn text-light text-[16px] font-rubikRegular flex items-center gap-2 w-[172px] h-[54px] "
                          type="submit"
                          // disabled={mutation.isPending || !props.dirty}
                        >
                          {/* {mutation.isPending ? (
                          <div className="flex items-center gap-2">
                            <ButtonSpinner /> Send Message
                          </div>
                        ) : (
                          "Send Message"
                        )} */}
                          Send Message
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
