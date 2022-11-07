import React from "react";
import PropTypes from "prop-types";
import { openUploadWidget } from "../../util/Cloudinary/CloudinaryService";

export default function UploadImgWidget({ setImgUrl }) {
  const uploadImageWidget = () => {
    let myWidget = openUploadWidget(
      {
        cloudName: "dmykyluyo",
        uploadPreset: "xDacvQs",
        sources: ["local", "url", "camera", "google_drive", "facebook"],
        //googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: false,
        multiple: false,
        defaultSource: "local",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImgUrl(result.info.secure_url);
        }
      }
    );
    myWidget.open();
  };

  return (
    <button className="upload-img-button" onClick={uploadImageWidget}>
      Upload Photo
    </button>
  );
}
UploadImgWidget.propTypes = {
  setImgUrl: PropTypes.func.isRequired,
};
