import DashboardNavigation from "@/components/partials/dashboard/DashboardNavigation";
import DashboardUpperNav from "@/components/partials/dashboard/DashboardUpperNav";
import ModalError from "@/components/partials/modal/ModalError";
import ModalSuccess from "@/components/partials/modal/ModalSuccess";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import About from "./about/About";
import ContactUs from "./contact-us/ContactUs";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import ReachUs from "./reach-us/ReachUs";
import Services from "./services/Services";
import Testimonial from "./testimonial/Testimonial";
import UserTable from "./user/UserTable";
import RoleTable from "./role/RoleTable";

const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div className=" bg-[#f5f5f3] ">
        <DashboardNavigation />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardUpperNav menu="dashboard" />
          <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[60px]  bg-dashPrimary z-[9]"></div>
            <div className="addShadowDash bg-[#f5f5f3] ">
              <div className="outer-wrapper">
                <div className="wrapper">
                  <Header />
                  <About />
                  <Services />
                  <ContactUs />
                  <Testimonial />
                  <ReachUs />
                  <Footer />
                </div>
              </div>
              {/* <UserTable />
              <RoleTable /> */}
            </div>
          </div>
        </div>
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Dashboard;
