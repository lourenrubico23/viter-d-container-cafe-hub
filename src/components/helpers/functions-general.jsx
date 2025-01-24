import React from "react";

const urlDContainerCafeHub =
  "http://localhost/react-vite/viter-d-container-cafe-hub";
const urlDContainerCafeHubImg =
  "http://localhost/react-vite/viter-d-container-cafe-hub/public/img";

// ONLINE DEV and LOCAL hris
export const devApiUrl = `${urlDContainerCafeHub}/rest`;
export const devBaseImgUrl = `${urlDContainerCafeHubImg}`;
export const devBaseUrl = `${urlDContainerCafeHub}`;
export const devNavUrl = "";
export const devApiVersion = "/v1";

export const setTimeZone = "Asia/Taipei";

export const urlDeveloper = "developer";

// dev key
export const devKey =
  "$2a$12$5obsBD1n0We9BIAM01RJy.4F0t4W2KmMPJppAur2eY1tmpG4y87vO";

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};

export const HandleEscape = (handleClose) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
};

//rgb to hex
export const hexToRgb = (hex) => {
  let result = "";
  // console.log(hex);
  if (typeof hex !== "undefined" && hex !== "") {
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
      result[3],
      16
    )} `;
  }

  return result;
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpoint error");
    });
  return data;
};
