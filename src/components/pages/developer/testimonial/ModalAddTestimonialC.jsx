import useUploadMultiplePhoto from "@/components/custom-hooks/useUploadMultiplePhoto";
import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto";
import {
  InputFileUpload,
  InputPhotoUpload,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import {
  devApiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import LoadImages from "@/components/partials/LoadImages";
import ModalWrapper from "@/components/partials/modal/ModalWrapper";
import ModalRemovedPhoto from "@/components/partials/ModalRemovedPhoto";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import { setError, setMessage, setSuccess } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Yup from "yup";

const ModalAddTestimonialC = ({
  setIsTestimonialC,
  itemEdit,
  testimonialData,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState(null);
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);

  // multiple files
  const {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  } = useUploadMultiplePhoto(
    `${devApiVersion}/upload-multiple-photo`,
    dispatch
  );

  // handle for file upload
  const handleChangeFileUpload = (
    e,
    props,
    setPhotoArrayList,
    fieldValue = ""
  ) => {
    handleChangeMultiplePhoto(e, 10);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = photoArrayList?.length > 0 ? photoArrayList : [];
    setPhotoArrayList([...oldFiles, ...myFiles]);
  };

  const handleClickViewSlideshow = (photos, key) => {
    if (mutation.isPending || loading) return;
    const link =
      photos[key] instanceof Blob || photos[key] instanceof File
        ? URL.createObjectURL(photos[key])
        : `${googleViewLink}${photos[key]?.id}`;
    window.open(link, "_blank");
  };

  // delete the file in the server (public)
  const handleRemovePhoto = (photos, key, props) => {
    if (mutation.isPending || loading) return;
    setFileData({ images: photos, itemKey: key, props });
    setIsRemovedPhoto(true);
  };

  const handleClose = () => {
    setAnimate("translate-x-full");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      setIsTestimonialC(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        testimonialData?.data?.length
          ? `/v1/testimonial/${testimonialData.data[0].testimonial_aid}` // update
          : `/v1/testimonial`, // create
        testimonialData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        setIsTestimonialC(false);
        document.body.classList.remove("overflow-hidden");
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully Updated.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
    if (testimonialData) {
      const photos = getConvertStringToJSONparseData(
        testimonialData?.data?.[0]?.testimonial_client_img_c
      );
      setPhotoArrayList(photos);
    }
  }, []);

  const initVal = {
    isUpdateTestimonial: itemEdit,
    testimonial_client_img_c:
      testimonialData?.data?.[0]?.testimonial_client_img_c ?? "",
    testimonial_client_name_c:
      testimonialData?.data?.[0]?.testimonial_client_name_c ?? "",
    testimonial_client_message_c:
      testimonialData?.data?.[0]?.testimonial_client_message_c ?? "",

    testimonial_client_img_c_old:
      testimonialData?.data?.[0]?.testimonial_client_img_c ?? "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <ModalWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">Edit Testimonial Content</h2>
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
                testimonial_client_img_c: Array.from(photoArrayList).map(
                  (item) =>
                    JSON.stringify({
                      name: item.name,
                      id: item?.id || "",
                    })
                ),
              };
              const photoUpload = await uploadMultiplePhoto();
              if (photoUpload?.success || !photoUpload?.success) {
                setLoading(false);
              }
              if (!loading) console.log(data);
              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form className="modal-form">
                  <div className="form-input">
                    <div className="mt-5">
                      <span className="top-20 px-2 text-[12px]"></span>
                      <div
                        className={`relative mt-7 mb-6 border border-gray-300 rounded-md hover:border-primary hover:border-dashed ${
                          withFile && "border-primary border-dashed"
                        }`}
                        onDragOver={() => setWithFile(true)}
                        onDragLeave={() => setWithFile(false)}
                      >
                        <span className="min-h-20 flex items-center justify-center">
                          <span className="text-dark mr-1">Drag & Drop</span>{" "}
                          Photo here or{" "}
                          <span className="text-dark ml-1">Browse</span>
                        </span>

                        <InputFileUpload
                          label="Client Image"
                          name="File"
                          type="file"
                          id="myFile"
                          accept="*"
                          title="Upload File"
                          multiple
                          onChange={(e) =>
                            handleChangeFileUpload(
                              e,
                              props,
                              setPhotoArrayList,
                              "testimonial_client_img_c"
                            )
                          }
                          onDrop={(e) =>
                            handleChangeFileUpload(
                              e,
                              props,
                              setPhotoArrayList,
                              "testimonial_client_img_c"
                            )
                          }
                          disabled={mutation.isPending || loading}
                          className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                        />
                      </div>

                      <div className="relative mb-6">
                        <ol className="flex flex-wrap gap-5 justify-center bg-gray-300">
                          {photoArrayList?.length > 0 &&
                            Array.from(photoArrayList).map((item, key) => {
                              const fileLink =
                                item instanceof File || item instanceof Blob
                                  ? URL.createObjectURL(item)
                                  : `${googleHDViewLink}${item?.id}`;

                              return (
                                <React.Fragment key={key}>
                                  <li
                                    className={`relative z-10 h-48 w-48 group cursor-pointer overflow-hidden ${
                                      (mutation.isPending || loading) &&
                                      `!cursor-not-allowed`
                                    }`}
                                    onClick={() => {
                                      handleClickViewSlideshow(
                                        photoArrayList,
                                        key
                                      );
                                    }}
                                  >
                                    <LoadImages
                                      url={fileLink}
                                      className={`relative z-20 w-full h-full object-cover object-center`}
                                    />
                                    {(!mutation.isPending || !loading) && (
                                      <div className="hidden group-hover:inline-flex absolute top-0 z-30 w-full h-full bg-black/40 items-center justify-center text-white text-center ">
                                        <span>
                                          Click to View <br />
                                          {key + 1}. {item.name}
                                        </span>

                                        <div
                                          className="absolute bottom-0 right-0 flex items-center gap-2"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                          }}
                                        >
                                          <button
                                            type="button"
                                            className="text-red-600 p-20 mr-2 tooltip-action-table text-lg disabled:bg-transparent disabled:cursor-not-allowed disabled:text-red-400"
                                            data-tooltip={`Delete`}
                                            disabled={
                                              mutation.isPending || loading
                                            }
                                            onClick={() =>
                                              handleRemovePhoto(
                                                photoArrayList,
                                                key,
                                                props
                                              )
                                            }
                                          >
                                            <FaTrash />
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </li>
                                </React.Fragment>
                              );
                            })}
                        </ol>
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Name"
                        type="text"
                        name="testimonial_client_name_c"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Message"
                        type="text"
                        name="testimonial_client_message_c"
                        className="h-[200px]"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div className="form-action">
                    <div className="form-btn">
                      <button
                        className="btn-modal-submit"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty || loading}
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

      {isRemovedPhoto && (
        <ModalRemovedPhoto
          fileData={fileData.images}
          itemKey={fileData.itemKey}
          itemProps={fileData.props}
          msg="Are you sure you want to remove this file?"
          setIsModalShow={setIsRemovedPhoto}
          setNewFile={setPhotoArrayList}
        />
      )}
    </>
  );
};

export default ModalAddTestimonialC;
