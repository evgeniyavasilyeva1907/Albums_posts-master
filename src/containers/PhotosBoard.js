import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Photo from './../components/Photo'

function PhotosBoard(props) {
    const { getPhotos, photos, match } = props

    useEffect(() => {
        const id = +match.params.albumid
        getPhotos(id)
    }, [getPhotos, match.params.albumid])

    return (<div>
        <Photo photos={photos} />
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
        })
    }
}

export default connect(
    mapstateToProps,
    mapDispatchToProps
)
    (withRouter(PhotosBoard));