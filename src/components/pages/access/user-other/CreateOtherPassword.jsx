import useQueryData from "@/components/custom-hooks/useQueryData";
import { InputText, InputTextOnChange } from "@/components/helpers/FormInputs";
import {
  devApiVersion,
  devBaseImgUrl,
  devNavUrl,
  getUrlParam,
} from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import LoginFooter from "@/components/partials/LoginFooter";
import PageNotFound from "@/components/partials/PageNotFound";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import ServerError from "@/components/partials/spinners/ServerError";
import TableLoading from "@/components/partials/spinners/TableLoading";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setCreatePassSuccess,
  setError,
  setMessage,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import * as Yup from "yup";

const CreateOtherPassword = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const paramKey = getUrlParam().get("key");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [newPasswordShown, setNewPasswordShown] = React.useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
  const [lowerValidated, setLowerValidated] = React.useState(false);
  const [upperValidated, setUpperValidated] = React.useState(false);
  const [numberValidated, setNumberValidated] = React.useState(false);
  const [specialValidated, setSpecialValidated] = React.useState(false);
  const [lengthValidated, setLengthValidated] = React.useState(false);
  const queryClient = useQueryClient();

  // const {
  //   isLoading,
  //   error,
  //   isFetching,
  //   data: otherKey,
  // } = useQueryData(
  //   `${devApiVersion}/user-other/key/${paramKey}`, // endpoint
  //   "get", // method
  //   "other-key" // key
  // );

  // const mutation = useMutation({
  //   mutationFn: (values) =>
  //     queryData(`${devApiVersion}/user-other/password`, "post", values),
  //   onSuccess: (data) => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["other"] });

  //     // show error box
  //     if (!data.success) {
  //       dispatch(setError(true));
  //       dispatch(setMessage(data.error));
  //     } else {
  //       setIsSuccess(true);
  //     }
  //   },
  // });

  const toggleNewPassword = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const initVal = {
    new_password: "",
    confirm_password: "",
    key: paramKey,
  };

  const yupSchema = Yup.object({
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches("(?=.*[a-z])", "At least one lowercase letter.")
      .matches("(?=.*[A-Z])", "At least one uppercase letter.")
      .matches("(?=.*[!@#$%^&*`{;:',<.>/?}_-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*`{;:',<.>/?}_-])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  React.useEffect(() => {
    dispatch(setCreatePassSuccess(true));
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <TableLoading />
      ) : error ? (
        <div style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}>
          <ServerError />
        </div>
      ) : isSuccess ? ( */}
      <>
        {/* <div
          className="relative"
          style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
        >
          <div className="flex justify-center items-center ">
            <div className="w-96 p-6">
              <div className="relative flex gap-2 justify-center">
                <img
                  src={`${devBaseImgUrl}/logo-brown.png `}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
                <img
                  src={`${devBaseImgUrl}/spa-logo.png `}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>

              <AiFillCheckCircle className="text-7xl text-primary mx-auto mt-10 mb-2" />
              <h2 className="mb-4 mt-2 text-lg text-center">Success!</h2>
              <p className="text-sm mb-6">
                Your password is set and your account is ready to use. Click the
                button below to continue login.
              </p>
              <a
                className="text-primary text-xs block text-center mt-6 underline"
                href={`${devNavUrl}/login`}
              >
                Go to Login
              </a>
            </div>
          </div>
        </div> */}
      </>
      {/* ) : otherKey?.count === 0 ? (
        <PageNotFound />
      ) : ( */}
      <div
        className="relative"
        style={{ transform: "translateY(clamp(5rem,5vw,8rem))" }}
      >
        <div className="flex justify-center items-center ">
          {/* {isFetching && <TableSpinner />} */}
          <div className="w-96">
            <div className="relative flex gap-2 justify-center ">
              <img
                src={`${devBaseImgUrl}/d-container-logo.webp `}
                alt=""
                className="w-[100px] h-[100px]"
              />
              <img
                src={`${devBaseImgUrl}/spa-logo.png `}
                alt=""
                className="w-[100px] h-[100px]"
              />
            </div>

            <p className="mb-0 mt-2 font-bold text-center text-lg">
              D' CONTAINER CAFE HUB
            </p>
            <p className="mt-8 mb-5 text-[16px] font-semibold">
              CREATE PASSWORD
            </p>
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
                    <div className="relative mb-7">
                      <InputTextOnChange
                        label="New password"
                        type={newPasswordShown ? "text" : "password"}
                        name="new_password"
                        // disabled={mutation.isPending}
                        onChange={(e) => handleChange(e.target.value)}
                      />
                      {props.values.new_password && (
                        <span
                          className="text-base absolute bottom-1/2 right-4 text-gray-400 translate-y-1/2 cursor-pointer"
                          onClick={toggleNewPassword}
                        >
                          {newPasswordShown ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      )}
                    </div>
                    <div className="relative mb-5">
                      <InputText
                        label="Confirm password"
                        type={confirmPasswordShown ? "text" : "password"}
                        name="confirm_password"
                        // disabled={
                        //   mutation.isPending ||
                        //   props.values.new_password === ""
                        // }
                      />
                      {props.values.confirm_password && (
                        <span
                          className="text-base absolute bottom-1/2 right-4 text-gray-400 translate-y-1/2 cursor-pointer
                    "
                          onClick={toggleConfirmPassword}
                        >
                          {confirmPasswordShown ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 pt-3">
                      <button
                        type="submit"
                        // disabled={
                        //   mutation.isPending ||
                        //   props.values.new_password === "" ||
                        //   props.values.confirm_password === ""
                        // }
                        className="btn-modal-submit relative"
                      >
                        {/* {mutation.isPending && <ButtonSpinner />} FBS WEBSITE */}
                        Create Password
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="p-3 mt-5 rounded-sm mb-6">
              <h5 className="text-xs text-body mb-5">Password Requirement</h5>
              <ul className="text-sm">
                <li className="text-body text-xs flex gap-2 items-center mb-3">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      lengthValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  Must have 8 characters
                </li>
                <li className="text-body  text-xs flex gap-2 items-center mb-3">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      upperValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 uppercase
                </li>
                <li className="text-body  text-xs flex gap-2 items-center mb-3">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      lowerValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 lowercase
                </li>
                <li className="text-body  text-xs flex gap-2 items-center mb-3">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      numberValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 number
                </li>
                <li className="text-body  text-xs flex gap-2 items-center mb-1">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      specialValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 symbol
                </li>
              </ul>
            </div>
            <LoginFooter />
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default CreateOtherPassword;
