import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";
import { setError, setMessage } from "@/store/StoreAction";

const useUploadMultiplePhoto = (url, dispatch) => {
  // const { store, dispatch } = React.useContext(StoreContext);
  const [photoArrayList, setPhotoArrayList] = React.useState([]);
  let isPhotoJsonString = false;

  const uploadMultiplePhoto = async () => {
    if (photoArrayList.length > 0) {
      const fd = new FormData();

      // Loop through files
      let isPhotoJsonString = false;
      for (let i = 0; i < photoArrayList.length; i++) {
        if (
          !(
            photoArrayList[i] instanceof File ||
            photoArrayList[i] instanceof Blob
          )
        ) {
          isPhotoJsonString = true;
          continue;
        }
        fd.append(
          `file${i}`,
          photoArrayList[i],
          photoArrayList[i].name.toLowerCase()
        );
      }

      // If any file is not a File or Blob, skip upload
      if (isPhotoJsonString) return { success: true };

      try {
        // Upload photo
        const response = await fetchFormData(devApiUrl + url, fd, dispatch);

        if (response && response.headers) {
          // Check if response is not null and has headers
          // Check if the response is in JSON format
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();

            if (!data.success) {
              dispatch(setError(true));
              dispatch(setMessage(data.error));
            }

            return data;
          } else {
            const errorText = await response.text();
            console.error("Unexpected response format:", errorText);
            throw new Error("Response is not JSON.");
          }
        } else {
          console.error("No response or missing headers");
          throw new Error("No response from server.");
        }
      } catch (error) {
        console.error("API endpoint error:", error);
        return { success: false, error: "API endpoint error" };
      }
    }
  };

  const handleChangeMultiplePhoto = (
    e,
    fileLimit = 50,
    isAcceptImagesOnly = true
  ) => {
    const files = Array.from(e.target.files);

    // Check if no files were selected
    if (files.length === 0) {
      setPhotoArrayList([]); // You might not want to clear existing files here
      dispatch(setError(false));
      return;
    }

    // Limit the number of files
    if (files.length > fileLimit) {
      dispatch(setError(true));
      dispatch(setMessage(`Only ${fileLimit} images can upload.`));
      return;
    }

    // Filter to only accept images
    if (
      isAcceptImagesOnly &&
      files.some((file) => !file.type.startsWith("image/"))
    ) {
      dispatch(setError(true));
      dispatch(setMessage("Invalid file. Input only accept images."));
      return;
    }

    // Update the photo array list state
    // Here you can choose to concatenate with the existing state
    setPhotoArrayList((prevPhotos) => [...prevPhotos, ...files]);
  };

  return {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  };
};

export default useUploadMultiplePhoto;
