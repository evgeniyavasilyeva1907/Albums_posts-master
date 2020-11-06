import { put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'

export function* sagaWatcher() {
    yield all([
        takeEvery('ALBUMS/FETCHED_SAGA', getAlbums),
        takeEvery('POSTS/FETCHED_SAGA', getPosts),
        takeEvery('PHOTOS/FETCHED_SAGA', getPhotos),
        takeEvery('PHOTO/DELETE_SAGA', deletePhoto),
        takeEvery('TITLE/EDIT_PHOTO_TITLE_SAGA', editTitle),
        takeEvery('PHOTOS/RELOAD_PHOTO_SAGA', reloadPhoto),
        takeEvery('COMMENTS/FETCHED_SAGA', getComments),
        takeEvery('COMMENTS/DELETE_COMMENT_SAGA', deleteComment),
        takeEvery('COMMENTS/ADD_COMMENT_SAGA', addComment)
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
    try {
        const URL = `https://jsonplaceholder.typicode.com/albums/${props.payload}/photos`
        const { data } = yield axios.get(URL)

        yield put({
            type: 'PHOTOS/GET_PHOTOS',
            payload: data
        })
    }
    catch (error) {
        yield console.log(error)
    }
}
export function* deletePhoto(props) {
    let idPhoto = props.payload;
    try {
        yield put({
            type: 'PHOTOS/DELETE_PHOTO',
            payload: idPhoto
        })
    }
    catch (error) {
        yield console.log(error)
    }
}

export function* editTitle(props) {
    let titlePhoto = props.payload.title;
    let idPhoto = props.payload.id
    try {
        yield put({
            type: 'PHOTOS/EDIT_TITLE',
            payload: { titlePhoto: titlePhoto, id: idPhoto }
        })
    }
    catch (error) {
        yield console.log(error)
    }
}
export function* reloadPhoto(props) {
    let idPhoto = props.payload.id;
    let urlPhoto = props.payload.image;
    try {
        yield put({
            type: 'PHOTOS/UPLOAD_PHOTO',
            payload: { id: idPhoto, url: urlPhoto }
        })
    }
    catch (error) {
        yield console.log(error)
    }
}
export function* getComments(props) {
    try {
        const URL = `https://jsonplaceholder.typicode.com/posts/${props.payload}/comments`
        const { data } = yield axios.get(URL)

        yield put({
            type: 'COMMENTS/GET_COMMENTS',
            payload: data
        })
    }
    catch (error) {
        yield console.log(error)
    }
}

export function* deleteComment(props) {
    let idPhoto = props.payload;
    try {
        yield put({
            type: 'COMMENTS/DELETE_COMMENT',
            payload: idPhoto
        })
    }
    catch (error) {
        yield console.log(error)
    }
}

export function* addComment(props) {
    let newComment = props.payload;
    try {
        yield put({
            type: 'COMMENTS/ADD_COMMENT',
            payload: newComment
        })
    }
    catch (error) {
        yield console.log(error)
    }
}
