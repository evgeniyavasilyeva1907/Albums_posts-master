import {combineReducers} from 'redux'
import PostsReducer from './PostsReducer'
import AlbumsReducer from './AlbumsReducer'
import PhotosReducer from './PhotosReducer'

export default combineReducers({PostsReducer, AlbumsReducer, PhotosReducer})