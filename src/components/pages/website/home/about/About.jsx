import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";

const About = () => {
  const {
    isFetching,
    error,
    data: aboutData,
  } = useQueryData(
    "/v1/about", // endpoint
    "get", // method
    "about" // key
  );

  return (
    <section id="about">
      <div className="h-[708px] bg-light  ">
        <div className="flex flex-col gap-6 items-center py-[157px]">
          <img
            src={`${devBaseImgUrl}/${aboutData?.data[0].about_img}`}
            alt=""
            className="w-[150px] md:w-[202px] md:h-[186px]"
          />
          <div className="text-center flex flex-col gap-6 max-w-[851px]">
            <p>
              {aboutData?.data?.length > 0 &&
              aboutData.data[0]?.about_description_a
                ? aboutData?.data[0].about_description_a
                : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
            </p>
            <p>
              {aboutData?.data?.length > 0 &&
              aboutData?.data[0].about_description_b
                ? aboutData?.data[0].about_description_b
                : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. "}
            </p>
            <p>
              {aboutData?.data?.length > 0 &&
              aboutData?.data[0].about_description_c
                ? aboutData?.data[0].about_description_c
                : " Lorem ipsum dolor sit, amet consectetur adipisicing elit.  "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
