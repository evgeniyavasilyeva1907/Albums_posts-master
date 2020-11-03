import React, { useState, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';

function Photo({ photos, deletePhoto, editTitle, reload }) {
    const [activeItem, setActimeItem] = useState({});
    const [OpenEdit, setOpenEdit] = useState(false)
    const [open, setOpen] = useState(false)
    const [editText, setEditText] = useState('')


    const getFullInfo = (item) => {
        setActimeItem(item);
        handleOpen_Close();
    }

    const handleOpen_Close = () => {
        setOpen(!open)
    }
    const changePhoto = (image, id) => {
        reload(image, id)
    }
    const edit = (title, id) => {
        editTitle(title, id)
        setOpenEdit(!OpenEdit)
    }
    const isOpenEdit = () => {
        setOpenEdit(!OpenEdit)
        setEditText(activeItem.title)
    }

    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.click();
    };
    const upload = (elem, id) => {
        let reader = new FileReader();
        reader.readAsDataURL(elem)
        reader.onload = function () {
            changePhoto(reader.result, id)
        }
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
                    <button onClick={isOpenEdit}>Edit title</button>
                    <input ref={inputEl} type='file' name='file-input' onChange={() => upload(inputEl.current.files[0], activeItem.id)} ></input>
                    <CachedIcon className='Reload' color="disabled" onClick={onButtonClick} />
                </div>
            </Modal>
            <Modal
                open={OpenEdit}
                onClose={isOpenEdit}
            >
                <div className="ModalWindow">
                    <div>Change title</div>
                    <input value={editText} onChange={(e) => setEditText(e.target.value)}></input>
                    <button onClick={() => edit(editText, activeItem.id)}>Edit</button>

                </div>
            </Modal>

        </div>
    )
}

export default Photo
