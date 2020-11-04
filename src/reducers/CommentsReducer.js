const commentsList = [];
const initialState = { commentsList }

function CommentsReducer(state = initialState, action) {
    switch (action.type) {
        case 'COMMENTS/GET_COMMENTS':
            return { ...state, commentsList: action.payload }
        default:
            return state
    }
}

export default CommentsReducer