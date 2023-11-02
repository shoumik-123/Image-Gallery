import React, { useState } from "react";
import PhotoItem from "./PhotoItem";

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

    return (
        <>
            <div className='m-3 p-2' style={{ boxSizing: "border-box" }}>
                <div className=' row p-3'>
                    <div className='col-md-3 justify-content-center'>
                        <h3 className="" style={{ paddingLeft: 20 }}>
                            {checkedCount} file selected
                        </h3>
                    </div>
                    <div className="col-md-6"></div>
                    <div className='col-md-3 ' style={{ textAlign: 'right', paddingRight: 20 }}>
                        <button className="btn" style={{ color: "red" }}><h4>Delete file</h4></button>
                    </div>
                </div>
                <hr />
                <div className="container-fluid p-5">
                    <div className="row">
                        {photo.map((name, index) => (
                            <div key={index} className="col-md-2 mb-3">
                                <div className="card" style={{ width: '400' }}>
                                    <PhotoItem id={index} name={name} handleCheckboxChange={handleCheckboxChange} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowPhoto;