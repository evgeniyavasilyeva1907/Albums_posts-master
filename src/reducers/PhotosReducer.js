const PhotosList = [];
const initialState = { PhotosList }

function PhotosReducer(state = initialState, action) {
    switch (action.type) {
        case 'PHOTOS/GET_PHOTOS':
            return { ...state, PhotosList: action.payload };
        case 'PHOTOS/DELETE_PHOTO':
            const newstate = state.PhotosList.filter(e => e.id !== action.payload)
            return { ...state, PhotosList: newstate };
        case 'PHOTOS/EDIT_TITLE':
            const copyState = state.PhotosList.map((photo) => {
                if (photo.id === action.payload.id) {
                    photo.title = action.payload.titlePhoto
                }
                return photo
            })
            return { ...state, PhotosList: copyState };
        case 'PHOTOS/UPLOAD_PHOTO':
            const newState = state.PhotosList.map((photo) => {
                if (photo.id === action.payload.id) {
                    photo.url = action.payload.url;
                    photo.thumbnailUrl = action.payload.url
                }
                return photo
            })
            return { ...state, PhotosList: newState }
        default:
            return state
    }

}
export default PhotosReducer