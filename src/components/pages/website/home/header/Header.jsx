import { devBaseImgUrl } from "@/components/helpers/functions-general";
import React from "react";
import { GrLocation } from "react-icons/gr";
import Navigation from "../../Navigation";

const Header = () => {
  // const [activeSection, setActiveSection] = React.useState("#header");

  // React.useEffect(() => {
  //   // section IDs to track
  //   const sectionIds = ["ourTaste", "ourOrigin", "reachUs"];

  //   // IntersectionObserver to track the active section
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.3 } // 30% of the section is in view
  //   );

  //   // Observe each section on the page
  //   sectionIds.forEach((id) => {
  //     const section = document.getElementById(id);
  //     if (section) {
  //       observer.observe(section);
  //     }
  //   });

  //   // Cleanup observer on component unmount
  //   return () => {
  //     sectionIds.forEach((id) => {
  //       const section = document.getElementById(id);
  //       if (section) {
  //         observer.unobserve(section);
  //       }
  //     });
  //   };
  // }, []);

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  return (
    <section
      id="header"
      className="banner h-[120vh] relative flex items-center place-content-center "
    >
      <div className="">
        <img
          src={`${devBaseImgUrl}/bannerImage.webp`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <Navigation />
        <div className="customContainer relative z-10 h-full">
          <div className="wrapper justify-center place-items-center py-10">
            <div className="text-center flex flex-col gap-14 justify-center items-center py-10">
              <h2 className="text-[clamp(52px,3vw,45px)] leading-[1.1]  text-light font-rubikBold text-center w-[1267px]">
                Indulge in delicious, high-quality food while unwinding and
                treating yourself—all in one perfect destination.
              </h2>
              <a
                href=""
                className="btn text-light  flex items-center gap-2 w-[218px] h-[54px] "
              >
                See Where We At <GrLocation className="text-[22px]" />
              </a>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Header;
