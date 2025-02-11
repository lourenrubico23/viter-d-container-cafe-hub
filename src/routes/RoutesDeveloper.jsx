import { devNavUrl } from "@/components/helpers/functions-general";
import CreateOtherPassword from "@/components/pages/access/user-other/CreateOtherPassword";
import OtherUserForgetPassword from "@/components/pages/access/user-other/OtherUserForgetPassword";
import OtherUserLogin from "@/components/pages/access/user-other/OtherUserLogin";
import Dashboard from "@/components/pages/developer/Dashboard";
import User from "@/components/pages/developer/user/User";
import Home from "@/components/pages/website/home/Home";

export const RoutesDeveloper = [
  {
    path: `${devNavUrl}/`,
    element: <Home />,
  },
  {
    path: `${devNavUrl}/dashboard`,
    element: <Dashboard />,
  },
  {
    path: `${devNavUrl}/create-pass`,
    element: <CreateOtherPassword />,
  },
  {
    path: `${devNavUrl}/forgot-password`,
    element: <OtherUserForgetPassword />,
  },
  {
    path: `${devNavUrl}/login`,
    element: <OtherUserLogin />,
  },
];
