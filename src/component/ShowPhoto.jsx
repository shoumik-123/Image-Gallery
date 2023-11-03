import React, { useState } from "react";
import PhotoItem from "./PhotoItem";
import "../assets/css/style.css"
import UploadPhoto from "./UploadPhoto";

function ShowPhoto() {
    const photo = ['image-1.webp', 'image-2.webp', 'image-3.webp', 'image-4.webp', 'image-5.webp', 'image-6.webp', 'image-7.webp', 'image-8.webp', 'image-9.webp', 'image-10.webp', 'image-11.webp', 'image-11.webp'];

    const [checkedCount, setCheckedCount] = useState(0);

    const handleCheckboxChange = (id, isChecked) => {
        if (isChecked) {
            setCheckedCount(checkedCount + 1);
        } else {
            setCheckedCount(checkedCount - 1);
        }
    };

    const [activePhoto, setActivePhoto] = useState(null); // Store the active photo ID

    const handlePhotoClick = (id) => {
        setActivePhoto(id); // Set the clicked photo as active
    };

    return (
        <>
            <div className='m-3 p-2'>
                <div className=' row p-3'>
                    <div className='col-md-3 justify-content-center'>
                        <h3 className="" style={{ paddingLeft: 20 }}>
                            {checkedCount > 0 ? (
                                <>
                                    <input className="px-4" type="checkbox" checked />
                                    &nbsp;&nbsp;{checkedCount}&nbsp;&nbsp;
                                </>
                            ) : (
                                <>
                                    <input className="px-4" type="checkbox" disabled />
                                    &nbsp;&nbsp;{checkedCount}&nbsp;&nbsp;
                                </>
                            )}
                            file selected
                        </h3>

                    </div>
                    <div className="col-md-6"></div>
                    <div className='col-md-3 delete-div'>
                        <button className="btn" style={{ color: "red" }}><h4>Delete file</h4></button>
                    </div>
                </div>
                <hr />
                <br/>
                <div className="container-fluid p-5">
                    <div className="row">
                        {photo.map((item, i) => (
                            <div key={i} className="col-md-2 mb-3 photo">
                                <div className="">
                                    <PhotoItem
                                        id={i}
                                        name={item}
                                        active={activePhoto === i}
                                        onClick={() => handlePhotoClick(i)}
                                        handleCheckboxChange={handleCheckboxChange}
                                    />
                                </div>
                            </div>
                        ))}
                        <UploadPhoto/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowPhoto;