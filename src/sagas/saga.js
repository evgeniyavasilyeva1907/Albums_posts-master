import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'

export function* sagaWatcher() {
    yield all([
        takeEvery('ALBUMS/FETCHED_SAGA', getAlbums),
        takeEvery('POSTS/FETCHED_SAGA', getPosts),
        takeEvery('PHOTOS/FETCHED_SAGA', getPhotos)
    ])
}

export function* getAlbums() {

    try {
        const URL = 'https://jsonplaceholder.typicode.com/albums';
        const { data } = yield axios.get(URL)

        yield put({
            type: 'ALBUMS/GET_ALBUMS',
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}

export function* getPosts() {
    
    try {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const { data } = yield axios.get(URL)

        yield put({
            type: 'POSTS/GET_POSTS',
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}
export function* getPhotos(props) {
    try{
        const URL = `https://jsonplaceholder.typicode.com/albums/${props.payload}/photos`
        const {data} =yield axios.get(URL)

        yield put({
            type: 'PHOTOS/GET_PHOTOS',
            payload: data
        })
    }
    catch(error) {
        console.log(error)
    }
}