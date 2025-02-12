import { devApiVersion } from "@/components/helpers/functions-general.jsx";
import DashboardNavigation from "@/components/partials/dashboard/DashboardNavigation";
import DashboardUpperNav from "@/components/partials/dashboard/DashboardUpperNav";
import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import ModalError from "../../../../partials/modal/ModalError";
import ModalSuccess from "../../../../partials/modal/ModalSuccess";
import RoleTable from "./RoleTable";

const Role = () => {
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
              <RoleTable />
            </div>
          </div>
        </div>
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Role;
