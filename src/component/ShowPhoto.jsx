import React, { useState } from "react";
import PhotoMap from "./PhotoMap";

function ShowPhoto() {
    const [photo, setPhoto] = useState([
        'image-1.webp',
        'image-2.webp',
        'image-3.webp',
        'image-4.webp',
        'image-5.webp',
        'image-6.webp',
        'image-7.webp',
        'image-8.webp',
        'image-9.webp',
        'image-10.webp',
        'image-11.webp'
    ]);

    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setCheckedItems((prevItems) => [...prevItems, value]);
        } else {
            setCheckedItems((prevItems) => prevItems.filter((item) => item !== value));
        }
    };

    const handleDelete = () => {
        const updatedPhoto = photo.filter((_, i) => !checkedItems.includes(i.toString()));
        setPhoto(updatedPhoto);
        setCheckedItems([]); // Clear the selected items
    };

    const checkedCount = checkedItems.length;

    return (
        <>
            <div className='bg-white rounded-md w-full h-full'>
                <div className='w-full flex py-3 px-5 h-16 items-center justify-between'>
                    <div className='flex flex-row'>
                        <div className="" >
                            {checkedCount > 0 ? (
                                 <p className="text-gray-600 font-semibold">
                                   {checkedCount} {checkedCount > 1 ? "Files" : "File"} Selected
                                 </p>
                            ) : (
                                 <h3 className="text-3xl font-semibold">Gallery</h3>
                            )}
                        </div>
                    </div>
                    <div className=''>
                         {checkedCount > 0 && (
                             <button
                                 onClick={handleDelete}
                                 className="text-red-500 font-semibold"
                             >
                                Delete {checkedCount > 1 ? "Files" : "File"}

                            </button>
                         )}
                    </div>
                </div>
                 <hr />
                 <br/>
                <PhotoMap
                    photo={photo}
                    checkedItem={checkedItems}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </div>
        </>
    );
}

export default ShowPhoto;
