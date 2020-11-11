import React, { useState, useRef } from "react";
import Modal from "@material-ui/core/Modal";
import DeleteIcon from "@material-ui/icons/Delete";
import CachedIcon from "@material-ui/icons/Cached";
import Button from "@material-ui/core/Button";

function Photo({ photos, deletePhoto, editTitle, reload }) {
  const [activeItem, setActimeItem] = useState({});
  const [OpenEdit, setOpenEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [editText, setEditText] = useState("");

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
    editTitle(title, id);
    setOpenEdit(!OpenEdit);
  };
  const isOpenEdit = () => {
    setOpenEdit(!OpenEdit);
    setEditText(activeItem.title);
  };

  const onButtonClick = () => {
    inputEl.current.click();
  };
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
              onClick={() => deletePhoto(item.id)}
            />
          </div>
        );
      })}
      <Modal
        open={open}
        onClose={handleOpen_Close}
        style={{ overflow: "auto" }}
      >
        <div className="ModalWindow">
          <img src={activeItem.url} alt={activeItem.title}></img>
          <div>{activeItem.title}</div>
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
          <CachedIcon  //TODO тут тоже, Если бы я не знал, что такая кнопка есть, я бы ее не заметил и не нашел бы
            className="Reload"
            color="disabled"
            onClick={onButtonClick}
          />
        </div>
      </Modal>
      <Modal open={OpenEdit} onClose={isOpenEdit}>
        <div className="ModalWindow">
          <div>Change title</div>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></input>
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
