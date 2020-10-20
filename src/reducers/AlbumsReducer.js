const AlbumsList =[];
const initialState = {AlbumsList}

function AlbumsReducer (state = initialState, action) {
    switch(action.type){
        case 'ALBUMS/GET_ALBUMS':
            return{ ...state, AlbumsList: action.payload}
            default: 
            return state
    }

}
export default AlbumsReducer;