const AlbumsList =[];
const initialState = {AlbumsList} //TODO тут можешь просто не расписывать так
//У тебя правильно, но можно сразу писать
//const initialState = {AlbumsList: []}, а первую строчку убрать
//ну и название переменной тут лучше с маленькой буквы

function AlbumsReducer (state = initialState, action) {
    switch(action.type){
        case 'ALBUMS/GET_ALBUMS':
            return{ ...state, AlbumsList: action.payload}
            default: 
            return state
    }

}
export default AlbumsReducer;