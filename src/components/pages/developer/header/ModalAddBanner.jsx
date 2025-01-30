import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto";
import {
  InputPhotoUpload,
  InputText,
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

const ModalAddBanner = ({ itemEdit, headerData, setIsBanner }) => {
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
      setIsBanner(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        headerData?.data?.length
          ? `/v1/header/${headerData.data[0].header_aid}` // update
          : `/v1/header`, // create
        headerData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["header"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        setIsBanner(false);
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
    isUpdateHeader: itemEdit,
    header_banner_img: headerData?.data?.[0]?.header_banner_img ?? "",
    header_banner_title: headerData?.data?.[0]?.header_banner_title ?? "",
    header_button_text: headerData?.data?.[0]?.header_button_text ?? "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">Edit Banner Content</h2>
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
              header_banner_img: photo
                ? photo.name
                : headerData?.data?.[0]?.header_banner_img,
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
                    <span className="top-20 px-2 text-[12px]">
                      Banner Image
                    </span>
                    <div className="relative w-fit m-auto group">
                      {!headerData?.data?.[0]?.header_banner_img && !photo ? (
                        <div className="group-hover:opacity-20 bg-dashAccent mb-4 items-center gap-2 w-[322px] h-[90px] border rounded-md p-2 grid place-items-center">
                          <IoImageOutline className="text-[40px] text-[gray] mx-auto" />
                          <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                            Upload Image
                          </h1>
                        </div>
                      ) : (
                        <img
                          src={
                            photo
                              ? URL.createObjectURL(photo)
                              : headerData?.data?.[0]?.header_banner_img // Get image from headerData if no new photo
                              ? `${devBaseImgUrl}/${headerData.data[0].header_banner_img}`
                              : ""
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
                            title="Upload Logo"
                            onChange={(e) =>
                              handleChangePhoto(e, initVal.header_banner_img)
                            }
                            className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <InputTextArea
                      label="Banner Title"
                      type="text"
                      name="header_banner_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Button Text"
                      type="text"
                      name="header_button_text"
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
                        initVal.header_banner_img === photo?.name
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

export default ModalAddBanner;
