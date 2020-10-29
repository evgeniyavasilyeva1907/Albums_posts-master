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
            const copyState = state.PhotosList.map((photo,index)=>{
                if(photo.id === action.payload.id){
                    photo.title = action.payload.titlePhoto
                }
                return photo
            })
            return {...state, PhotosList: copyState}
          default:
            return state
    }

}
export default PhotosReducer