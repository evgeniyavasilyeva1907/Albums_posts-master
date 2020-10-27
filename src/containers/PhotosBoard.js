import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Photo from './../components/Photo'

function PhotosBoard(props) {
    const { getPhotos, photos, match, deletePhotoSaga } = props

    useEffect(() => {
        const id = +match.params.albumid
        getPhotos(id)
    }, [getPhotos, match.params.albumid])

    const deletePhoto = (id) => {
        deletePhotoSaga(id)
    }
    return (<div>
        <Photo photos={photos}
            deletePhoto={deletePhoto} />
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
        })
    }
}

export default connect(
    mapstateToProps,
    mapDispatchToProps
)
    (withRouter(PhotosBoard));