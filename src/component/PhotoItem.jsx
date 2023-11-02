import React, {useState} from 'react';

function PhotoItem({ name, id ,handleCheckboxChange }) {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
        handleCheckboxChange(id, !isChecked);
    };


    return (
        <div className="">
            {id === "" ? (
                <>
                    <input type="checkbox" onChange={() => handleCheckboxChange(id)} className="form-check-input ml-2 mt-2" />
                    <img src={process.env.PUBLIC_URL + `/images/${name}`} alt="" className="" style={{ width: 800 , height:800}} />
                </>
            ) : (
                <>
                    <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="form-check-input ml-2 mt-2" />
                    <img src={process.env.PUBLIC_URL + `/images/${name}`} alt="" className="" style={{ width: 400 , height:400}} />
                </>
            )}
        </div>

    );
}

export default PhotoItem;
