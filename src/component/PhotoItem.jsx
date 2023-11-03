import React, { useState } from 'react';

function PhotoItem({ name, id, handleCheckboxChange, active, onClick }) {
    const [isChecked, setIsChecked] = useState(false);
    const [scaleActive, setScaleActive] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        handleCheckboxChange(id, !isChecked);
    };

    const photoStyle = {
        zIndex: active ? 1000 : 0,
        height: active ? '100%' : '80%',
        width: active ? '100%' : '80%',
        transform: active ? 'scale(1.5)' : 'scale(1)',
        marginRight: active? 0 :20,
        padding: active? 0 :20,
    };

    const handleMouseEnter = () => {
        setScaleActive(true);
    };

    const handleMouseLeave = () => {
        setScaleActive(false);
    };

    const handlePhotoClick = () => {
        onClick(id);
        setScaleActive(!scaleActive);
    };

    return (
        <div className="card">
            <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="form-check-input ml-2 mt-2" />
            <img
                src={process.env.PUBLIC_URL + `/images/${name}`}
                alt=""
                className={`photo ${active ? 'active-photo' : 'photo'}`}
                onClick={() => { onClick(); handlePhotoClick(); }}
                style={photoStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}/>
        </div>
    );
}

export default PhotoItem;

