import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';

function Photo({ photos, deletePhoto }) {
    const [activeItem, setActimeItem] = useState({});
    const [open, setOpen] = useState(false)

    const getFullInfo = (item) => {
        setActimeItem(item);
        handleOpen_Close();
    }

    const handleOpen_Close = () => {
        setOpen(!open)
    }

    return (
        <div className='PhotosBoard'>
            {photos.map((item, index) => {
                return (
                    <div key={index}>
                        <img className='photo'
                            src={item.thumbnailUrl}
                            alt={item.title}
                            onClick={() => getFullInfo(item)}></img>
                        <DeleteIcon className='DeleteIcon' color="disabled" onClick={() => deletePhoto(item.id)} />
                        <CachedIcon className='Reload' color="disabled" />
                    </div>
                )
            })}
            <Modal
                open={open}
                onClose={handleOpen_Close}
            >
                <div className='ModalWindow'>
                    <div><img src={activeItem.url} alt={activeItem.title}></img></div>
                    <div>{activeItem.title}</div>
                </div>
            </Modal>

        </div>
    )
}

export default Photo
