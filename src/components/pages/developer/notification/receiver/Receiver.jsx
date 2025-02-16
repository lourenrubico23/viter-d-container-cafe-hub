import {
  devApiVersion,
  hexToRgb,
} from "@/components/helpers/functions-general";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import ReceiverTable from "./ReceiverTable";
import useQueryData from "@/components/custom-hooks/useQueryData";
import DashboardUpperNav from "@/components/partials/dashboard/DashboardUpperNav";

const Receiver = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const {
    isFetching,
    error,
    data: colorsData,
  } = useQueryData(
    `${devApiVersion}/colors`, // endpoint
    "get", // method
    "colors" // key
  );

  document
    .querySelector(":root")
    .style.setProperty(
      "--primary-color",
      hexToRgb(colorsData?.data[0]?.colors_primary || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--secondary-color",
      hexToRgb(colorsData?.data[0]?.colors_secondary || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--accent-color",
      hexToRgb(colorsData?.data[0]?.colors_accent || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--light-color",
      hexToRgb(colorsData?.data[0]?.colors_light || "#000000")
    );
  document
    .querySelector(":root")
    .style.setProperty(
      "--dark-color",
      hexToRgb(colorsData?.data[0]?.colors_dark || "#000000")
    );

  return (
    <>
      <section id="receiver">
        <div className=" bg-[#f5f5f3] ">
          <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
            <DashboardUpperNav menu="dashboard" />
            <div className=" w-[calc(100%_-_10px)] pt-[65px] relative">
              <div className="headerCover fixed top-0 left-[200px] w-full h-[60px]  bg-dashPrimary z-[9]"></div>
              <div className="addShadowDash bg-[#f5f5f3] h-screen">
                <div className="outer-wrapper">
                  <ReceiverTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Receiver;
