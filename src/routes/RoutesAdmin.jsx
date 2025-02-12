import { devNavUrl, urlAdmin } from "@/components/helpers/functions-general";
import ProtectedRouteUser from "@/components/pages/access/ProtectedRouteUser";
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
];
