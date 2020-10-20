const postsList =[];
const initialState = {postsList}

function PostsReducer (state = initialState, action) {
    switch(action.type) {
        case 'POSTS/GET_POSTS': 
        return {...state, postsList:action.payload}
        default:
            return state
    }
}
export default PostsReducer;