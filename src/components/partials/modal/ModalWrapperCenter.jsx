import React from "react";

const ModalWrapperCenter = ({
  children,
  handleClose,
  className = "",
  title = "",
  center = "",
}) => {
  return (
    <div className="modal__wrapper fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-[50]">
      <div
        className="backdrop w-screen h-screen relative z-[9]  bg-[black] opacity-90"
        onClick={handleClose}
      ></div>
      <div
        className={`modal__main place-content-center fixed z-10 h-full ${center}`}
      >
        <div
          className={`bg-white border border-gray-200 shadow-xl print:border-0 print:border-transparent print:shadow-transparent ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapperCenter;
