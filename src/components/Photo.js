import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';


function Photo({ photos }) {
    const [activeItem, setActimeItem] = useState({});
    const [open, setOpen] = useState(false)
    console.log(activeItem)

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
                    <img className='photo'
                        key={index}
                        src={item.thumbnailUrl}
                        alt={item.title}
                        onClick={() => getFullInfo(item)}></img>
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
/*
<Modal>
                <img></img>
                <div></div>
            </Modal>*/