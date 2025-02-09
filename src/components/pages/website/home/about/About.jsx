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
      <div className="h-[498px] bg-light  ">
        <div className="flex flex-col gap-16 items-center py-[75px]">
          <div className="flex gap-16">
            {aboutData?.data?.length > 0 &&
              aboutData.data[0]?.about_img &&
              (() => {
                const imageList = aboutData.data[0].about_img
                  .split(",")
                  .map((img) => img.trim()) // Trim spaces
                  .filter((img) => img !== ""); // Remove empty values

                return imageList.length > 0 ? (
                  <div className="flex gap-16">
                    {imageList.map((img, index) => (
                      <img
                        key={index}
                        src={`${devBaseImgUrl}/${img}`}
                        alt={`About Image ${index + 1}`}
                        className="w-[150px] md:w-[170px] object-cover"
                      />
                    ))}
                  </div>
                ) : null;
              })()}
          </div>
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
