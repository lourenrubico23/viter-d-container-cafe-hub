import Loader from "@/components/partials/Loader";
import React from "react";

const HeaderLoader = () => {
  return (
    <>
      <header className="py-2.5" id="header">
        <div className="container navigation-loader">
          <div className="flex flex-row justify-between ">
            <Loader customCss="mb-4 lg:w-[450px] h-[20px]" />
            <Loader customCss="mb-4 lg:w-[450px] h-[20px]" />
          </div>
          <div className="flex flex-row justify-between ">
            <Loader customCss="mb-4 lg:w-[150px] h-[50px]" />
            <Loader customCss="mb-4 lg:w-[450px] h-[40px]" />
          </div>
        </div>
        <div className="heroBanner bg-primary h-screen pt-40 ">
          <div className="container max-w-[1170px] mx-auto">
            <div className="bannerText relative flex flex-col items-center">
              <Loader customCss="mb-4 lg:w-[800px] h-[60px] mb-9" />
              <div className="flex flex-col items-center">
                <Loader customCss="mb-4 lg:w-[600px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[400px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[300px] h-[15px]" />
                <Loader customCss="mb-4 lg:w-[100px] h-[30px]" />
              </div>
            </div>
          </div>
          <Loader customCss="mb-4 lg:w-full h-[60px] pt-[200px] mt-[150px]" />
        </div>
      </header>
    </>
  );
};

export default HeaderLoader;
