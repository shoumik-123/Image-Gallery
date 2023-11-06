import React from 'react';

function PhotoItem({ item, i, handleCheckboxChange, checkedItem }) {
    const isChecked = checkedItem.includes(i.toString());

    return (

        <div className={`  ${isChecked ? "brightness-75" : ""} rounded-2xl hover:brightness-50`}>
            <div className={`border rounded-2xl overflow-hidden `}>
                <div className='rounded-2xl overflow-hidden shadow relative group w-full h-full'>
                    <div>
                        <input
                            type="checkbox"
                            value={i.toString()}
                            checked={checkedItem.includes(i.toString())}
                            onChange={handleCheckboxChange}
                            className={`ml-3 mt-3 w-4 h-4 text-blue-600 bg-white border-gray-300 rounded absolute z-5 ${isChecked ? 'block' : 'hidden'} group-hover:block`}
                        />
                        <img
                            src={`./images/${item}`}
                            alt=""
                            className="rounded-2xl w-full z-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoItem;
