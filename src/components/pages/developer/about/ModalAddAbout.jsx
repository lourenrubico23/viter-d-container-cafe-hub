import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto";
import {
  InputPhotoUpload,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import {
  devApiVersion,
  devBaseImgUrl,
} from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modal/ModalWrapper";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import { setError, setMessage, setSuccess } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Yup from "yup";

const ModalAddAbout = ({ itemEdit, setIsAbout, aboutData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `${devApiVersion}/upload-photo`,
    dispatch
  );

  const handleClose = () => {
    setAnimate("translate-x-full");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      setIsAbout(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `/v1/about/${aboutData?.data[0].about_aid}`, // update
        "put",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["about"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        setIsAbout(false);
        document.body.classList.remove("overflow-hidden");
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully Updated.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    isUpdateAbout: itemEdit,
    about_img: aboutData ? aboutData?.data[0].about_img : "",
    about_description_a: aboutData
      ? aboutData?.data[0].about_description_a
      : "",
    about_description_b: aboutData
      ? aboutData?.data[0].about_description_b
      : "",
    about_description_c: aboutData
      ? aboutData?.data[0].about_description_c
      : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">Edit About Content</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            // to get all of the data of image
            const data = {
              ...values,
              about_img: photo?.name || aboutData.about_img,
            };
            uploadPhoto(); // to save the photo when submit
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="mt-5">
                    <span className="top-20 px-2 text-[12px]">About Image</span>
                    <div className="relative w-fit m-auto group">
                      {aboutData === null && photo === null ? (
                        <div className="group-hover:opacity-20 bg-dashAccent mb-4 items-center gap-2 w-[322px] h-[90px] border rounded-md p-2 grid place-items-center">
                          <div className="">
                            <IoImageOutline className="text-[40px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (aboutData?.data[0]?.about_img === "" &&
                          photo === null) ||
                        photo === "" ? (
                        <div className="group-hover:opacity-20 mb-4 bg-dashAccent grid place-items-center items-center gap-2 w-[322px] h-[90px] p-2">
                          <div>
                            <IoImageOutline className="text-[40px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight grid place-items-center text-gray text-[gray] text-sm text-center">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={
                            photo
                              ? URL.createObjectURL(photo) // preview
                              : devBaseImgUrl +
                                "/" +
                                aboutData?.data[0]?.about_img // check db
                          }
                          alt="Logo"
                          className="group-hover:opacity-30 duration-200 relative h-[90px] object-contain object-[50%,50%] m-auto"
                        />
                      )}

                      <div className="btnImgUpload">
                        <button>
                          <MdOutlineFileUpload />
                          <InputPhotoUpload
                            name="photo"
                            type="file"
                            id="myFile"
                            accept="image/*"
                            title="Upload Image"
                            onChange={(e) =>
                              handleChangePhoto(e, initVal.about_img)
                            }
                            className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <InputTextArea
                      label="Description 1"
                      type="text"
                      name="about_description_a"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputTextArea
                      label="Description 2"
                      type="text"
                      name="about_description_b"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputTextArea
                      label="Description 3"
                      type="text"
                      name="about_description_c"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={
                        ((mutation.isPending || !props.dirty) &&
                          photo === null) ||
                        photo === "" ||
                        initVal.about_img === photo?.name
                      }
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
                    </button>
                    <button
                      className="btn-modal-cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddAbout;
