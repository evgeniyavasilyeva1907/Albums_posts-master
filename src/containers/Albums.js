import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Album from './../components/Album'

function Albums({ getAlbums, albums }) {

    useEffect(() => {
        getAlbums()
    }, [getAlbums])

    return (
        <Album albums={albums} />
    )
}

const mapStateToProps = state => {
    return {
        albums: state.AlbumsReducer.AlbumsList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAlbums: () => dispatch({
            type: 'ALBUMS/FETCHED_SAGA'

        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Albums)