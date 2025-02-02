import { StoreContext } from "@/store/StoreContext";
import React from "react";
import DashboardNavigation from "@/components/partials/dashboard/DashboardNavigation";
import DashboardUpperNav from "@/components/partials/dashboard/DashboardUpperNav";
import ModalSuccess from "@/components/partials/modal/ModalSuccess";
import ModalError from "@/components/partials/modal/ModalError";
import Header from "./header/Header";
import About from "./about/About";
import Services from "./services/Services";
import ContactUs from "./contact-us/ContactUs";
import ReachUs from "./reach-us/ReachUs";
import Footer from "./footer/Footer";
import Testimonial from "./testimonial/Testimonial";

const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      <div className="wrapper bg-[#f5f5f3] ">
        <DashboardNavigation />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardUpperNav menu="dashboard" />
          <div className=" w-[calc(100%_-_10px)] pt-[70px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[76px]  bg-dashPrimary z-[9]"></div>
            <div className="addShadow bg-[#f5f5f3] ">
              <Header />
              <About />
              <Services />
              <ContactUs />
              <Testimonial />
              <ReachUs />
              <Footer />
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
