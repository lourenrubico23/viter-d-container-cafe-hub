import { devNavUrl } from "@/components/helpers/functions-general";
import Dashboard from "@/components/pages/developer/Dashboard";
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
];
