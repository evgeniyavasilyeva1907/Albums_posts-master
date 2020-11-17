import React, { useState, useRef } from "react";
import Modal from "@material-ui/core/Modal";
import DeleteIcon from "@material-ui/icons/Delete";
import CachedIcon from "@material-ui/icons/Cached";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';

function Photo({ photos, deletePhoto, editTitle, reload }) {

  const [activeItem, setActimeItem] = useState({});
  const [OpenEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [editText, setEditText] = useState("");
  const [error, setError] = useState('')
  const [openRemove, setOpenRemove] = useState(false)
  const [id, setId] = useState('')

  const inputEl = useRef(null);

  const getFullInfo = (item) => {
    setActimeItem(item);
    handleOpen_Close();
  };

  const handleOpen_Close = () => {
    setOpen(!open);
  };
  const changePhoto = (image, id) => {
    reload(image, id);
  };
  const edit = (title, id) => {
    if (title.length) {
      editTitle(title, id);
      setOpenEdit(!OpenEdit);
      setError('')
    }
    else { setError('Enter image title') }

  };
  const isOpenEdit = () => {
    setOpenEdit(!OpenEdit);
    setEditText(activeItem.title);
  };

  const onButtonClick = () => {
    inputEl.current.click();
  };
  const removeModalOpen = (id) => {
    setOpenRemove(!openRemove)
    setId(id)
  }
  const remove = () => {
    deletePhoto(id)
    setOpenRemove(!openRemove)
  }

  const upload = (elem, id) => {
    let reader = new FileReader();
    reader.readAsDataURL(elem);
    reader.onload = function () {
      changePhoto(reader.result, id);
    };
  };

  return (
    <div className="PhotosBoard">
      {photos.map((item, index) => {
        return (
          <div key={index} className="photo">
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              onClick={() => getFullInfo(item)}
            ></img>
            <DeleteIcon
              className="DeleteIcon"
              color="disabled"
              onClick={() => removeModalOpen(item.id)}
            />
          </div>
        );
      })}
      <Modal
        open={openRemove}
        onClose={() => setOpenRemove(!openRemove)}>
        <div className='ModalWindow'>
          <h3>Remove photo?</h3>
          <Button variant="contained" onClick={remove}>Remove</Button>
          <Button variant="contained" onClick={() => setOpenRemove(!openRemove)}>Cancle</Button>
        </div>
      </Modal>
      <Modal
        open={open}
        onClose={handleOpen_Close}
        style={{ overflow: "auto" }}
      >
        <div className="ModalPhoto">
          <div className='fullsize-foto'>
            <img src={activeItem.url} alt={activeItem.title}></img>
            <CachedIcon
              className="Reload"
              color="disabled"
              onClick={onButtonClick}
            />

          </div>
          <h3>{activeItem.title}</h3>
          <Button variant="contained" onClick={isOpenEdit}>
            Edit title
          </Button>
          <input
            className="load-input"
            ref={inputEl}
            type="file"
            name="file-input"
            onChange={() => upload(inputEl.current.files[0], activeItem.id)}
          ></input>

        </div>
      </Modal>
      <Modal open={OpenEdit} onClose={isOpenEdit}>
        <div className="ModalWindow">
          <h3>Change title</h3>
          <Input
            value={editText} id='edit-title'
            onChange={(e) => setEditText(e.target.value)}
          ></Input>
          <label htmlFor='edit-title'>{error}</label>
          <Button
            variant="contained"
            onClick={() => edit(editText, activeItem.id)}
          >
            Edit
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Photo;
