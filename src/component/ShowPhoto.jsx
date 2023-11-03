import React, { useState } from "react";
import PhotoItem from "./PhotoItem";
import "../assets/css/style.css"
import UploadPhoto from "./UploadPhoto";

function ShowPhoto() {
    const [photo, setPhoto] = useState([
        'image-1.webp', 'image-2.webp', 'image-3.webp', 'image-4.webp', 'image-5.webp',
        'image-6.webp', 'image-7.webp', 'image-8.webp', 'image-9.webp', 'image-10.webp', 'image-11.webp'
    ]);


    const [checkedCount, setCheckedCount] = useState(0);
    const handleCheckboxChange = (id, isChecked) => {
        if (isChecked) {
            setCheckedCount(checkedCount + 1);
            setCheckedItems([...checkedItems, id]); // Add the item's index to checkedItems
        } else {
            setCheckedCount(checkedCount - 1);
            setCheckedItems(checkedItems.filter((item) => item !== id)); // Remove the item's index from checkedItems
        }
    };


    const [activePhoto, setActivePhoto] = useState(null); // Store the active photo ID
    const handlePhotoClick = (id) => {
        setActivePhoto(id); // Set the clicked photo as active
    };

    const [checkedItems, setCheckedItems] = useState([]);

    const handleDelete = () => {
        const updatedPhoto = photo.filter((item, i) => !checkedItems.includes(i));
        setPhoto(updatedPhoto);
        setCheckedItems([]); // Clear the selected items
        setActivePhoto(null);
        setCheckedCount(0);


    };


    return (
        <>
            <div className='m-3 p-2'>
                <div className=' row p-3'>
                    <div className='col-md-3'>
                        <div className="select-checkbox-div" >

                            {checkedCount > 0 ? (
                                <p className="text-gray-600 font-semibold">
                                    {checkedCount} {checkedCount > 1 ? "Files" : "File"} Selected
                                </p>
                            ) : (
                                <p> Gallery</p>
                            )}
                        </div>

                    </div>
                    <div className="col-md-6"></div>
                    <div className='col-md-3 delete-div'>
                        {checkedCount > 0 && (
                            <button
                                onClick={handleDelete}
                                className="btn"
                            >
                                Delete {checkedCount > 1 ? "Files" : "File"}

                            </button>
                        )}
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