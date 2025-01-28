import React from "react";

const Loader = ({ customCss }) => {
  return (
    <>
      <div className={`${customCss} animate-pulse bg-dashAccent w-full`}></div>
    </>
  );
};

export default Loader;
