import useDeveloperLogin from "@/components/custom-hooks/useDeveloperLogin";
import { InputText } from "@/components/helpers/FormInputs";
import {
  apiVersion,
  copyrightYear,
  devNavUrl,
  setStorageRoute,
  UrlDeveloper,
} from "@/components/helpers/functions-general";
import { checkRoleToRedirect } from "@/components/helpers/login-functions";
import { queryData } from "@/components/helpers/queryData";
import LoginFooter from "@/components/partials/LoginFooter";
import ModalError from "@/components/partials/modals/ModalError";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import TableSpinner from "@/components/partials/spinners/TableSpinner";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import FbsLogoXl from "@/components/svg/FbsLogoXl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const DeveloperLogin = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  const { loginLoading } = useDeveloperLogin(navigate);

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`${apiVersion}/user-developer/login`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user-developer"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_developer_password;
          delete data.data[0].role_description;
          delete data.data[0].role_created;
          delete data.data[0].role_datetime;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          checkRoleToRedirect(navigate, data.data[0]);
        }
      }
    },
  });
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initVal = {
    user_developer_email: "",
    password: "",
  };

  const yupSchema = Yup.object({
    user_developer_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      {loginLoading ? (
        <TableSpinner />
      ) : (
        <div
          className="flex justify-center items-center"
          style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
        >
          <div className="w-96 p-6">
            <div className="flex justify-center">
              <FbsLogoXl />
            </div>

            <div className="mb-4">
              <p className="mb-0 mt-2 font-bold text-center text-lg">
                FBS WEBSITE
              </p>
              <h2 className="mb-0 mt-10 text-[16px] font-semibold">
                DEVELOPER LOGIN
              </h2>
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
                    <div className="relative mb-6">
                      <InputText
                        label="Email"
                        type="text"
                        name="user_developer_email"
                        className="!bg-white"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mb-5">
                      <InputText
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        disabled={
                          mutation.isPending ||
                          (props.values.user_developer_email === "" &&
                            props.values.password === "")
                        }
                      />
                      {props.values.password && (
                        <span
                          className="text-base absolute bottom-1/2 text-gray-400 right-2 translate-y-1/2 cursor-pointer"
                          onClick={togglePassword}
                        >
                          {passwordShown ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 pt-3">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit relative"
                      >
                        {mutation.isPending && <ButtonSpinner />} Login
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <p className="mt-5 text-xs">
              Did you forget your password?{" "}
              <Link
                to={`${devNavUrl}/${UrlDeveloper}/forgot-password`}
                className="w-full text-primary"
              >
                <span>Forgot password</span>
              </Link>
            </p>

            <LoginFooter />
            {/* <div className="text-xs mt-12 grid place-items-center ">
              <ul className="flex items-center mb-2 [&>li]:px-2">
                <li>
                  <a
                    className="hover:text-primary transition ease-linear duration-200"
                    href={`${devNavUrl}/privacy-policy`}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="border-x border-dark">
                  <a
                    className="hover:text-primary transition ease-linear duration-200"
                    href={`${devNavUrl}/terms-of-service`}
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition ease-linear duration-200"
                    href={`${devNavUrl}/eula`}
                  >
                    EULA
                  </a>
                </li>
              </ul>
              <p className="text-center ">
                &copy; {copyrightYear()} Frontline Business Solutions, Inc.
                <br /> All rights reserved.
              </p>
            </div> */}
          </div>
        </div>
      )}

      {store.error && <ModalError />}
    </>
  );
};

export default DeveloperLogin;
