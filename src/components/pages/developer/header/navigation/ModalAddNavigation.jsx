import { InputText } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modal/ModalWrapper";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import { setError, setMessage, setSuccess } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";

const ModalAddNavigation = ({ setIsNav, headerData, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      setIsNav(false);
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      // queryData(
      //   headerData
      //     ? `/v1/header/${headerData?.data[0]?.header_aid}` // update
      //     : `/v1/header`, //create
      //   headerData ? "post" : "put",
      //   values
      // ),
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
        setIsNav(false);
        document.body.classList.remove("overflow-hidden");
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully Updated.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  // const initVal = {
  //   isUpdateHeader: itemEdit,
  //   header_nav_a: headerData ? headerData?.data[0]?.header_nav_a : "",
  //   header_nav_b: headerData ? headerData?.data[0]?.header_nav_b : "",
  //   header_nav_c: headerData ? headerData?.data[0]?.header_nav_c : "",
  //   header_nav_d: headerData ? headerData?.data[0]?.header_nav_d : "",
  // };

  const initVal = {
    isUpdateHeader: itemEdit,
    header_nav_a: headerData?.data?.[0]?.header_nav_a ?? "", // Use optional chaining with fallback
    header_nav_b: headerData?.data?.[0]?.header_nav_b ?? "",
    header_nav_c: headerData?.data?.[0]?.header_nav_c ?? "",
    header_nav_d: headerData?.data?.[0]?.header_nav_d ?? "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">Edit Navigation</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper">
                    <InputText
                      label="Navigation 1"
                      type="text"
                      name="header_nav_a"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Navigation 2"
                      type="text"
                      name="header_nav_b"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Navigation 3"
                      type="text"
                      name="header_nav_c"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Navigation 4"
                      type="text"
                      name="header_nav_d"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
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

export default ModalAddNavigation;
