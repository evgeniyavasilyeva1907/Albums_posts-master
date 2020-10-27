const PhotosList = [];
const initialState = { PhotosList }

function PhotosReducer(state = initialState, action) {
    switch (action.type) {
        case 'PHOTOS/GET_PHOTOS':
            console.log(action.payload)
            return { ...state, PhotosList: action.payload };
        case 'PHOTOS/DELETE_PHOTO':
            const newstate = state.PhotosList.filter(e => e.id!==action.payload)
            return{...state, PhotosList: newstate}
          default:
            return state
    }

}
export default PhotosReducer