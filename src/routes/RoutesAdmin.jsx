import { devNavUrl, urlAdmin } from "@/components/helpers/functions-general";
import ProtectedRouteUser from "@/components/pages/access/ProtectedRouteUser";
import UserVerifyEmail from "@/components/pages/access/user-other/UserVerifyEmail";
import Dashboard from "@/components/pages/developer/Dashboard";
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
    path: `${devNavUrl}/${urlAdmin}/create-pass`,
    element: (
      <ProtectedRouteUser>
        <UserVerifyEmail />
      </ProtectedRouteUser>
    ),
  },
];
