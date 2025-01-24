import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const DescriptionSection = () => {
  return (
    <div className="h-[708px] bg-light  ">
      <div className="flex flex-col gap-6 items-center py-[157px]">
        <img
          src={`${devBaseImgUrl}/logo-brown.png`}
          alt=""
          className="w-[202px] h-[186px]"
        />
        <div className="text-center flex flex-col gap-6 w-[851px]">
          <p>
            D’ Container Cafe Hub is a one stop shop from coffee, food, drinks
            to relaxing facial, massage salon spa in one. We started
            conceptualizing this place last March 2024 and finally open its
            doors last October 18, 2024.
          </p>
          <p>
            Our goal is to serve quality and satisfying food while relaxing and
            pampering yourself in one place.
          </p>
          <p>Serving extraordinary food to satisfy your palate.</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
