import { InputText } from "@/components/helpers/FormInputs";
import { devApiVersion } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ModalWrapper from "@/components/partials/modal/ModalWrapper";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";

const ModalAddReceiver = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/receiver/${itemEdit.receiver_aid}` // Update
          : `${devApiVersion}/receiver`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["receiver"],
      });

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
      if (data.success) {
        dispatch(setIsAdd({ modal: false, modalCode: "" }));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  // Initial values for mutation Formik
  const initVal = {
    receiver_name: itemEdit ? itemEdit.receiver_name : "",
    receiver_email: itemEdit ? itemEdit.receiver_email : "",
    receiver_phone_no: itemEdit ? itemEdit.receiver_phone_no : "",

    receiver_name_old: itemEdit ? itemEdit.receiver_name : "",
  };

  const yupSchema = Yup.object({
    receiver_name: Yup.string().required("Require"),
    receiver_email: Yup.string().required("Require"),
  });

  const handleCloseModal = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd({ modal: false, modalCode: "" }));
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalWrapper
        handleClose={handleCloseModal}
        className={`transition-all ease-linear transform duration-200 ${animate}`}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Role</h2>
          <button onClick={handleCloseModal}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal-form">
                  <div className="modal_container overflow-y-auto overflow-x-hidden h-[100dvh]">
                    <div className="input-wrapper">
                      <InputText
                        label="*Full Name"
                        type="text"
                        name="receiver_name"
                        className="text-xs"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="*Email"
                        type="text"
                        name="receiver_email"
                        className="text-xs"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Phone No."
                        type="number"
                        name="receiver_phone_no"
                        className="text-xs"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div
                    className="modal__action fixed bottom-0 flex justify-end w-full pt-4
                   gap-2 bg-white pb-4 pr-11"
                  >
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? (
                        <ButtonSpinner />
                      ) : itemEdit ? (
                        "Save"
                      ) : (
                        "Add"
                      )}
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className="btn-modal-cancel"
                      type="reset"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ModalWrapper>
    </>
  );
};

export default ModalAddReceiver;
