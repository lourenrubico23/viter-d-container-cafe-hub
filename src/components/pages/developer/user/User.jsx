import useQueryData from "@/components/custom-hooks/useQueryData";
import {
  devApiVersion,
  hexToRgb,
} from "@/components/helpers/functions-general";
import DashboardNavigation from "@/components/partials/dashboard/DashboardNavigation";
import DashboardUpperNav from "@/components/partials/dashboard/DashboardUpperNav";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import UserTable from "./UserTable";

const User = () => {
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

  // to change the color when submitted
  // document
  //   .querySelector(":root")
  //   .style.setProperty(
  //     "--primary-color",
  //     hexToRgb(colorsData?.data[0].colors_primary)
  //   );
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
      <div className=" bg-[#f5f5f3] ">
        <DashboardNavigation />
        <div className="main ml-[220px] w-[calc(100%_-_230px)] z-10">
          <DashboardUpperNav menu="dashboard" />
          <div className=" w-[calc(100%_-_10px)] pt-[70px] relative">
            <div className="headerCover fixed top-0 left-[200px] w-full h-[76px]  bg-dashPrimary z-[9]"></div>
            <div className="addShadow bg-[#f5f5f3] h-screen ">
              <UserTable />
            </div>
          </div>
        </div>
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default User;
