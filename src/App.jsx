import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { devNavUrl } from "./components/helpers/functions-general";
import OtherUserLogin from "./components/pages/access/user-other/OtherUserLogin";
import UserCreatePassword from "./components/pages/access/user-other/UserCreatePassword";
import UserForgotPassword from "./components/pages/access/user-other/UserForgotPassword";
import UserVerifyEmail from "./components/pages/access/user-other/UserVerifyEmail";
import Home from "./components/pages/website/home/Home";
import PageNotFound from "./components/partials/PageNotFound";
import { RoutesAdmin } from "./routes/RoutesAdmin";
import { StoreProvider } from "./store/StoreContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="*" element={<PageNotFound />} />

              <Route path={`${devNavUrl}/login`} element={<OtherUserLogin />} />
              <Route path={`${devNavUrl}/`} element={<Home />} />
              <Route path={`/`} element={<Home />} />
              <Route
                path={`${devNavUrl}/create-password`}
                element={<UserCreatePassword />}
              />
              <Route
                path={`${devNavUrl}/forgot-password`}
                element={<UserForgotPassword />}
              />
              <Route
                path={`${devNavUrl}/verify-email`}
                element={<UserVerifyEmail />}
              />

              {/* {RoutesDeveloper.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })} */}
              {RoutesAdmin.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
