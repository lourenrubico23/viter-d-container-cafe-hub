import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const Navigation = () => {
  return (
    <div className="customContainer absolute flex justify-between top-6 items-center">
      <img
        src={`${devBaseImgUrl}/logo.png`}
        alt=""
        className="w-[98px] h-[90px]"
      />
      <ul className="nav flex gap-12">
        <li>Coffee</li>
        <li>Spa Salon</li>
        <li>Reach Us</li>
      </ul>
    </div>
  );
};

export default Navigation;
