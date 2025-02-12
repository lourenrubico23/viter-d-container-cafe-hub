import { devNavUrl } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import PageNotFound from "@/components/partials/PageNotFound";
import FetchingSpinner from "@/components/partials/spinners/FetchingSpinner";
import { setCredentials } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteUser = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const dcontainercafetoken = JSON.parse(
    localStorage.getItem("dcontainercafetoken")
  );
  const [pageStatus, setPageStatus] = React.useState(false);

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`/v1/user/token`, "post", {
        token: dcontainercafetoken.token,
      });

      const isUserKeyMatched =
        login.success && login.data.user_key === login.data.user_other_password;

      // check if the password from database is matched
      // to the password used to login
      // if not, logout the user

      if (isUserKeyMatched === false) {
        setLoading(false);
        setIsAuth("456");
        localStorage.removeItem("dcontainercafetoken");
        return;
      }

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
      } else {
        dispatch(
          setCredentials({
            ...login.data,
          })
        );

        console.log({ ...login.data });

        setIsAuth("123");
        setLoading(false);
        delete login.data.user_other_password;
        delete login.data.user_other_key;
        delete login.data.role_description;
        delete login.data.role_created;
        delete login.data.role_datetime;
      }
      if (
        !login.success
        // || login.data.role.toLowerCase() !== login.data.role_name.toLowerCase()
      ) {
        setPageStatus(true);
      }
    };

    if (dcontainercafetoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("dcontainercafetoken");
      setIsAuth("456");
    }
  }, [dispatch]);

  if (pageStatus) {
    return <PageNotFound />;
  } else {
    return (
      <>
        {loading ? (
          <FetchingSpinner />
        ) : isAuth === "123" ? (
          children
        ) : isAuth === "456" ? (
          <Navigate to={`${devNavUrl}/login`} />
        ) : (
          <p>API end point error / Page not found.</p>
        )}
      </>
    );
  }
};

export default ProtectedRouteUser;
