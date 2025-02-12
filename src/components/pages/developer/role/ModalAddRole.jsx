import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { devApiVersion } from "../../../../helpers/function-general";
import { queryData } from "../../../../helpers/queryData";
import ModalWrapperSide from "../../../../partials/modal/ModalWrapperSide";
import ButtonSpinner from "../../../../partials/spinner/ButtonSpinner";

const ModalAddRole = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${devApiVersion}/role/${itemEdit.role_aid}` // Update
          : `${devApiVersion}/role`, // Create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["role"],
      });

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  // Initial values for mutation Formik
  const initVal = {
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",
    role_name_old: itemEdit ? itemEdit.role_name : "",
  };

  const yupSchema = Yup.object({
    role_name: Yup.string().required("Require"),
    role_description: Yup.string().required("Require"),
  });

  const handleCloseModal = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(!store.isAdd));
    }, 200);
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);
  return (
    <>
      <ModalWrapperSide
        handleClose={handleCloseModal}
        title={itemEdit ? "Edit Role" : "Add Role"}
        className={`${animate}`}
      >
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
                <div className="modal-overflow max-h-[81dvh] flex flex-col justify-between">
                  <div className="modal_container overflow-y-auto overflow-x-hidden h-[100dvh]">
                    <div className="form-wrapper mt-0">
                      <InputText
                        label="Name"
                        type="text"
                        name="role_name"
                        className="text-xs"
                        disabled={itemEdit || mutation.isPending}
                      />
                    </div>
                    <div className="form-wrapper flex flex-col gap-1">
                      <InputTextArea
                        label="Description"
                        name="role_description"
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
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddRole;
