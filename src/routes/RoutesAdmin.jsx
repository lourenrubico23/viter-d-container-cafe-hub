import { devNavUrl, urlAdmin } from "@/components/helpers/functions-general";
import ProtectedRouteUser from "@/components/pages/access/ProtectedRouteUser";
import CreateOtherPassword from "@/components/pages/access/user-other/CreateOtherPassword";
import OtherUserForgetPassword from "@/components/pages/access/user-other/OtherUserForgetPassword";
import UserCreatePassword from "@/components/pages/access/user-other/UserCreatePassword";
import UserForgotPassword from "@/components/pages/access/user-other/UserForgotPassword";
import UserVerifyEmail from "@/components/pages/access/user-other/UserVerifyEmail";
import Dashboard from "@/components/pages/developer/Dashboard";
import User from "@/components/pages/developer/user/User";
import Home from "@/components/pages/website/home/Home";

export const RoutesAdmin = [
  {
    path: `${devNavUrl}/${urlAdmin}`,
    element: (
      <ProtectedRouteUser>
        <Home />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/`,
    element: (
      <ProtectedRouteUser>
        <Home />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/dashboard`,
    element: (
      <ProtectedRouteUser>
        <Dashboard />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/user`,
    element: (
      <ProtectedRouteUser>
        <User />
      </ProtectedRouteUser>
    ),
  },
  {
    path: `${devNavUrl}/${urlAdmin}/create-pass`,
    element: (
      <ProtectedRouteUser>
        <UserVerifyEmail />
      </ProtectedRouteUser>
    ),
  },
];
