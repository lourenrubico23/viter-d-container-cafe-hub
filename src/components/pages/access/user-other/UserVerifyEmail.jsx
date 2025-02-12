import useQueryData from "@/components/custom-hooks/UseQueryData.jsx";
import { InputText } from "@/components/helpers/FormInputs.jsx";
import {
  devApiVersion,
  devNavUrl,
  getUrlParam,
} from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import ModalError from "@/components/partials/modal/ModalError.jsx";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner.jsx";
import TableSpinner from "@/components/partials/spinners/TableSpinner.jsx";
import { StoreContext } from "@/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { HiEyeSlash } from "react-icons/hi2";
import { RiEyeFill } from "react-icons/ri";
import * as Yup from "yup";

const UserVerifyEmail = () => {
  const key = getUrlParam().get("key");

  const { isLoading, data: changeEmail } = useQueryData(
    `/${devApiVersion}/user/verify-email/${key}`,
    "get", // method
    "user-change-email" // key
  );

  return (
    <>
      {isLoading ? (
        <TableSpinner />
      ) : changeEmail?.count === 0 || key === null || key === "" ? (
        <PageNotFound />
      ) : (
        <div
          className="w-full flex justify-center items-center"
          style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
        >
          <div className="max-w-[340px] w-full p-4 py-5 rounded-md">
            <div className="flex justify-center items-center mb-5">
              {/* <Fbslogo /> */}
            </div>
            <h2 className="text-base text-center">User - Success</h2>

            <div className="login-message flex justify-center items-center flex-col text-center ">
              <FaCheck className="text-5xl text-green-500 mb-5" />
              <p className="text-balance">
                Your email has been successfully changed! You can now login
                using your new email.
              </p>

              <a
                href={`${devNavUrl}/login`}
                className="btn btn-accent text-center mt-5 center-all text-[12px]"
              >
                Back to Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserVerifyEmail;
