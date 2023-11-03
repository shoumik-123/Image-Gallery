import React from "react";

const UploadPhoto = () => {
    return (
        <label
            htmlFor="fileUpload"
            className="add-photo"
        >
            <div>
                <img src="images/image-12.png" alt="icon" />

                <div className="ml-2">Add Files</div>
            </div>
            <input type="file" className="hidden" id="fileUpload" />
        </label>
    );
};

export default UploadPhoto;
