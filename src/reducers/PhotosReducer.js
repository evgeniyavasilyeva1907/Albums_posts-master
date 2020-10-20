const PhotosList =[];
const initialState = {PhotosList}

function PhotosReducer(state = initialState, action) {
    switch(action.type){
      case 'PHOTOS/GET_PHOTOS':
          console.log(action.payload)
          return{...state, PhotosList:action.payload}
          default:
              return state  
    }

}
export default PhotosReducer