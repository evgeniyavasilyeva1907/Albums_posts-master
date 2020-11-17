import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Album from './../components/Album';
import { Pagination } from '@material-ui/lab';


function Albums({ getAlbums, albums }) {
    const [page, setPage] = useState(1)
    useEffect(() => {
        getAlbums()
    }, [getAlbums])

    const getNumber = (event, value) => {
        setPage(value)
    }
    let newAlbums = albums.slice((page - 1) * 10, page * 10)

    return (
        <div >
            <Album albums={newAlbums} />
            <div className='pagination'>
                <Pagination count={10}
                    color="primary"
                    defaultPage={1}
                    page={page}
                    onChange={getNumber}
                />
            </div>

        </div>
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