import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Photo from './../components/Photo'

function PhotosBoard(props) {
    const { getPhotos, photos, match, deletePhotoSaga, editTitlePhoto, reloadPhoto } = props

    useEffect(() => {
        const id = +match.params.albumid
        getPhotos(id)
    }, [getPhotos, match.params.albumid])

    const deletePhoto = (id) => {
        deletePhotoSaga(id)
    }
    const editTitle = (id, title) => {
        editTitlePhoto(id, title)
    }

    const photoReload = (image, id) => {
        reloadPhoto(image, id)
    }

    return (<div>
        <Photo photos={photos}
            deletePhoto={deletePhoto}
            editTitle={editTitle}
            reload={photoReload} />
    </div>)
}

const mapstateToProps = state => {
    return {
        photos: state.PhotosReducer.PhotosList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPhotos: (id) => dispatch({
            type: 'PHOTOS/FETCHED_SAGA',
            payload: id
        }),
        deletePhotoSaga: (id) => dispatch({
            type: 'PHOTO/DELETE_SAGA',
            payload: id
        }),
        editTitlePhoto: (title, id) =>
            dispatch({
                type: 'TITLE/EDIT_PHOTO_TITLE_SAGA',
                payload: { title, id }
            }),
        reloadPhoto: (image, id) =>
            dispatch({
                type: 'PHOTOS/RELOAD_PHOTO_SAGA',
                payload: { image, id }
            })
    }
}

export default connect(
    mapstateToProps,
    mapDispatchToProps
)
    (withRouter(PhotosBoard));