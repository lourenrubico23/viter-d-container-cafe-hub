import useQueryData from "@/components/custom-hooks/useQueryData";
import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { FaRegImages } from "react-icons/fa";
import ModalAddAbout from "./ModalAddAbout";
import { IoImageOutline } from "react-icons/io5";

const About = () => {
  const [itemEdit, setItemEdit] = React.useState("");
  const [isAbout, setIsAbout] = React.useState(false);

  const {
    isFetching,
    error,
    data: aboutData,
  } = useQueryData(
    "/v1/about", // endpoint
    "get", // method
    "about" // key
  );

  const handleAddAbout = () => {
    setIsAbout(true);
    setItemEdit("aboutUpdate");
  };

  return (
    <>
      <section id="about">
        <div className="h-[708px] bg-light  ">
          <div className="flex flex-col gap-6 items-center py-[157px] ">
            <a
              className="absolute cursor-pointer tooltip-header z-[1] right-[300px] "
              data-tooltip="Upload Contents"
              onClick={handleAddAbout}
            >
              <FaRegImages className=" bg-[#C7AC27] rounded-full w-[25px] h-[25px] p-1 border-[1px]" />
            </a>

            {aboutData?.data?.length > 0 && aboutData.data[0]?.about_img ? (
              <div className="w-[150px] md:w-[202px] md:h-[186px]">
                <img
                  src={`${devBaseImgUrl}/${aboutData.data[0].about_img}`}
                  alt=""
                  className="w-[150px] md:w-[202px] md:h-[186px]"
                />
              </div>
            ) : (
              <div className="w-[150px] md:w-[202px] md:h-[186px] place-content-center">
                <IoImageOutline className="w-[150px] md:w-[202px] md:h-[186px] mx-auto text-gray-500" />
              </div>
            )}

            <div className="text-center flex flex-col gap-6 max-w-[851px]">
              <p>
                {aboutData?.data[0].about_description_a
                  ? aboutData?.data[0].about_description_a
                  : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. Aspernatur consequuntur magni veritatis dolore praesentium delectus maxime. Veniam, labore!"}
              </p>
              <p>
                {aboutData?.data[0].about_description_b
                  ? aboutData?.data[0].about_description_b
                  : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa. "}
              </p>
              <p>
                {aboutData?.data[0].about_description_c
                  ? aboutData?.data[0].about_description_c
                  : " Lorem ipsum dolor sit, amet consectetur adipisicing elit.  "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {isAbout && (
        <ModalAddAbout
          itemEdit={itemEdit}
          setIsAbout={setIsAbout}
          aboutData={aboutData}
        />
      )}
    </>
  );
};

export default About;
