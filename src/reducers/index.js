import {combineReducers} from 'redux'
import PostsReducer from './PostsReducer'
import AlbumsReducer from './AlbumsReducer'
import PhotosReducer from './PhotosReducer'
import CommentsReducer from './CommentsReducer'

export default combineReducers({PostsReducer, AlbumsReducer, PhotosReducer, CommentsReducer})