import useUploadMultiplePhoto from "@/components/custom-hooks/useUploadMultiplePhoto";
import { InputPhotoUpload } from "@/components/helpers/FormInputs";
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

const ModalAddCoffeeGallery = ({
  itemEdit,
  setIsCoffeeGallery,
  servicesData,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  } = useUploadMultiplePhoto(
    `${devApiVersion}/upload-multiple-photo`,
    dispatch
  );

  const handleClose = () => {
    setAnimate("translate-x-full");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      setIsCoffeeGallery(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        servicesData?.data?.length
          ? `/v1/services/${servicesData.data[0].services_aid}` // update
          : `/v1/services`, // create
        servicesData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        setIsCoffeeGallery(false);
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
    isUpdateServices: itemEdit,
    services_coffee_gallery:
      servicesData?.data?.[0]?.services_coffee_gallery ?? "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">Edit Coffee Gallery</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            console.log("Uploading Images:", photoArrayList);

            const data = {
              ...values,
              services_coffee_gallery:
                photoArrayList.length > 0
                  ? photoArrayList.map((file) => file.name).join(", ")
                  : servicesData?.data?.services_coffee_gallery || "",
            };

            mutation.mutate(data);
            uploadMultiplePhoto(); // Ensure upload completes
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="mt-5">
                    <span className="top-20 px-2 text-[12px]">
                      Coffee Images
                    </span>
                    <div className="relative w-fit m-auto group mt-3">
                      {!servicesData?.data?.[0]?.services_coffee_gallery &&
                      !photoArrayList.length ? (
                        <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[350px] h-[180px] p-2 place-content-center">
                          <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                          <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                            Upload Image
                          </h1>
                        </div>
                      ) : photoArrayList.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2">
                          {photoArrayList.map((file, index) => (
                            <img
                              key={index}
                              src={URL.createObjectURL(file)}
                              alt="Uploaded Preview"
                              className="w-[160px] h-[180px] object-cover"
                            />
                          ))}
                        </div>
                      ) : servicesData?.data?.[0]?.services_coffee_gallery ? (
                        <div className="grid grid-cols-2 gap-2">
                          {servicesData.data[0].services_coffee_gallery
                            .split(",")
                            .map((img, index) => (
                              <img
                                key={index}
                                src={`${devBaseImgUrl}/${img.trim()}`}
                                alt={`Existing Image ${index + 1}`}
                                className="w-[160px] h-[180px] object-cover"
                              />
                            ))}
                        </div>
                      ) : (
                        <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[115px] h-[37px] p-2 grid place-items-center">
                          <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                          <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                            No Images Available
                          </h1>
                        </div>
                      )}

                      <div className="btnImgUpload">
                        <button>
                          <MdOutlineFileUpload className="text-gray-900 text-[30px]" />
                          <InputPhotoUpload
                            name="photo"
                            type="file"
                            id="myFile"
                            accept="image/*"
                            title="Upload Images"
                            multiple
                            onChange={(e) =>
                              handleChangeMultiplePhoto(e, 50, true)
                            }
                            className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={
                        ((mutation.isPending || !props.dirty) &&
                          photoArrayList === null) ||
                        photoArrayList === "" ||
                        initVal.services_coffee_gallery === photoArrayList?.name
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

export default ModalAddCoffeeGallery;
