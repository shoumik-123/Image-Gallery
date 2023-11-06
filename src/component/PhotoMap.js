import React, {useEffect, useState} from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import PhotoItem from './PhotoItem';
import UploadPhoto from "./UploadPhoto";

function PhotoMap({ checkedItem, photo, handleCheckboxChange }) {
    const [dndPhoto, setDndPhoto] = useState(photo);

    useEffect(() => {
        setDndPhoto(photo)
    }, [photo]);

    const handleOnDragEnd = (result) => {
        console.log(result);
        if (!result.destination) return;
        // const items = [...dndPhoto]; // Use dndPhoto state variable
        const items = Array.from(dndPhoto); // Use dndPhoto state variable
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setDndPhoto(items);
        console.log(dndPhoto);
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="photos">
                {(provided) => (
                    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {dndPhoto.map((item, index) => (
                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                {(provided) => (
                                    <div className={`${index=== 0 ? 'large ' : 'small'}`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <PhotoItem
                                            item={item}
                                            i={index}
                                            checkedItem={checkedItem}
                                            handleCheckboxChange={handleCheckboxChange}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}

                        <UploadPhoto/>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default PhotoMap;

